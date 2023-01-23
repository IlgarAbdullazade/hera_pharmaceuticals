export const cartStore = {
  state: () => ({
    cart: [],
    isLoading: false,
    error: null,
  }),
  getters: {
    cartItems: (state) => {
      return state.cart;
    },
    isProductInCart: (state) => (productId) => {
      return state.cart.find((product) => product.id === productId);
    },
    cartTotalAmount: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
  },
  mutations: {
    addToCart: (state, payload) => {
      const cartItems = state.cart.find((item) => item.id === payload.id);
      const qty = payload.quantity ? payload.quantity : 1;
      if (cartItems) {
        cartItems.quantity = qty;
      } else {
        state.cart.push({
          ...payload,
        });
      }
    },
    updateCartQuantity: (state, payload) => {
      state.cart.find((items, index) => {
        if (items.id === payload.product.id) {
          const qty = state.cart[index].quantity + payload.qty;
          if (qty !== 0) {
            state.cart[index].quantity = qty;
          }
          return true;
        }
      });
    },
    removeCartItem: (state, payload) => {
      const index = state.cart.indexOf(payload);
      state.cart.splice(index, 1);
    },
  },
  actions: {
    addToCart: ({ commit }, payload) => {
      commit("addToCart", payload);
    },
    updateCartQuantity: ({ commit }, payload) => {
      commit("updateCartQuantity", payload);
    },
    removeCartItem: ({ commit }, payload) => {
      commit("removeCartItem", payload);
    },
  },
  namespaced: true,
};
