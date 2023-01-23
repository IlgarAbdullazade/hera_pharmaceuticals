import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      redirect: "/shop/all",
      component: () => import("../views/ShopView.vue"),
      children: [
        {
          path: ":category",
          name: "products",
          props: (route) => ({ category: route.params.category || "all" }),
          component: () => import("../views/ProductsView.vue"),
        },
        {
          path: ":category/:id",
          name: "product",
          component: () => import("../views/ProductView.vue"),
        },
      ],
    },
    {
      path: "/about-us",
      name: "aboutUs",
      component: () => import("../views/AboutUsView.vue"),
    },
    {
      path: "/labtests",
      name: "labTests",
      redirect: "/labtests/all",
      children: [
        {
          path: ":category",
          name: "labTestItems",
          props: (route) => ({ category: route.params.category || "all" }),
          component: () => import("../views/LabTestsView.vue"),
        },
      ],
    },
    {
      path: "/contact-us",
      name: "contactUs",
      component: () => import("../views/ContactsView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      redirect: "/auth/sing-in",
      component: () => import("../views/AuthView.vue"),
      beforeEnter: (to, from, next) => {
        if (store.state.auth.isLoggedIn) {
          next("/profile");
        } else {
          next();
        }
      },
      children: [
        {
          path: "sing-in",
          name: "signIn",
          component: () => import("../views/LoginView.vue"),
        },
        {
          path: "sign-up",
          name: "signUp",
          component: () => import("../views/RegisterView.vue"),
        },
      ],
    },
    {
      path: "/profile",
      name: "profile",
      redirect: "/profile/my-account",
      component: () => import("../views/ProfileView.vue"),
      beforeEnter: (to, from, next) => {
        if (!store.state.auth.isLoggedIn) {
          next("/auth/sing-in");
        } else {
          next();
        }
      },
      children: [
        {
          path: "my-account",
          name: "myAccount",
          meta: { title: "My Account" },
          component: () => import("../views/MyAccountView.vue"),
        },
        {
          path: "order-history",
          name: "orderHistory",
          meta: { title: "Order History" },
          component: () => import("../views/OrderHistoryView.vue"),
        },
        {
          path: "shipping-address",
          name: "shippingAddress",
          meta: { title: "Shipping Address" },
          component: () => import("../views/ShippingAddressView.vue"),
        },
        {
          path: "account-settings",
          name: "accountSettings",
          meta: { title: "Account Settings" },
          component: () => import("../views/AccountSettingsView.vue"),
        },
        {
          path: "my-reviews",
          name: "myReviews",
          meta: { title: "My Reviews" },
          component: () => import("../views/MyReviewsView.vue"),
        },
      ],
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/CheckoutView.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/PaymentView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
