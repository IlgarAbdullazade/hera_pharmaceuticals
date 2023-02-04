import cartApi from "@/network/api/cartApi";
import { calculateStockCounts } from "@/helpers/utils";
import { useToast } from "vue-toastification";
const toast = useToast();

export const cartStore = {
  state: () => ({
    data: null,
    isLoading: false,
    error: null,
  }),
  getters: {
    cartItems: (state) => {
      return state.data?.item ?? [];
    },
    cartTotalAmount: (state) => {
      return state.data?.subtotal;
    },
    cartPromo: (state) => {
      return state.data?.promo_code;
    },
    isProductInCart: (state) => (productId) => {
      return state.data?.item.find((item) => item.product.slug === productId);
    },
    cartRealTotalAmount: (state) => {
      return state.data?.item.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setError(state, error) {
      state.error = error;
    },
    addToCart: (state, { product, quantity }) => {
      if (state.data) {
        const cartItems = state.data.item.find(
          (item) => item.product.slug === product.slug
        );
        const qty = quantity ? quantity : 1;
        if (cartItems) {
          cartItems.quantity = qty;
        } else {
          state.data.item.push({
            product: product,
            quantity: quantity,
          });
        }
      }
    },
    updateCartQuantity: (state, { product, quantity }) => {
      if (state.data) {
        state.data.item.find((items, index) => {
          if (items.product.slug === product.slug) {
            const qty = quantity;
            const stock = calculateStockCounts(
              state.data.item[index],
              quantity
            );
            if (qty !== 0 && stock) {
              state.data.item[index].quantity = qty;
            }
            return true;
          }
        });
      }
    },
    removeCartItem: (state, product) => {
      const index = state.data.item.findIndex(
        (item) => item.product.slug === product.slug
      );
      if (index > -1) state.data.item.splice(index, 1);
    },
  },
  actions: {
    async getCart({ commit }) {
      try {
        commit("setData", null);
        commit("setLoading", true);
        const response = await cartApi.getCart();
        commit("setData", response.data);
        commit("setError", null);
        return response;
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async updateUserCart({ commit }, { product, quantity }) {
      try {
        commit("setLoading", true);
        const response = await cartApi.cartUpdate({
          slug: product.slug,
          quantity: quantity,
        });
        commit("setData", response.data);
      } catch (e) {
        commit("setError", e.message);
      } finally {
        commit("setLoading", false);
      }
    },
    async acceptPromoCode({ commit }, { promo_code }) {
      try {
        commit("setLoading", true);
        const response = await cartApi.acceptPromoCode(promo_code);
        commit("setData", response.data);
        commit("setError", null);
      } catch (e) {
        commit("setError", e.message);
        toast.error(e.response.data.detail);
      } finally {
        commit("setLoading", false);
      }
    },
    addToCart: ({ commit }, { product, quantity }) => {
      commit("addToCart", { product, quantity });
    },
    updateCartQuantity: ({ commit }, { product, quantity }) => {
      commit("updateCartQuantity", { product, quantity });
    },
    removeCartItem: ({ commit }, payload) => {
      commit("removeCartItem", payload);
    },
    clearCart: ({ commit }) => {
      commit("setData", null);
    },
  },
  namespaced: true,
};
