import { createRouter, createWebHistory } from "vue-router";
import { getItem } from "@/helpers/persistanceStorage";
import NProgress from "nprogress";

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
      redirect: "/shop",
      component: () => import("../views/ShopView.vue"),
      children: [
        {
          path: "",
          name: "products",
          component: () => import("../views/ProductsView.vue"),
        },
        {
          path: ":id",
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
      component: () => import("../views/LabTestsView.vue"),
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
        if (getItem("accessToken")) {
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
        if (!getItem("accessToken")) {
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
      path: "/terms-and-conditions",
      name: "terms",
      meta: { slug: "terms-and-conditions" },
      component: () => import("../views/TermsView.vue"),
    },
    {
      path: "/privacy-policy",
      meta: { slug: "privacy-policy" },
      name: "policy",
      component: () => import("../views/TermsView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

// Injection Progress
router.beforeEach(() => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
