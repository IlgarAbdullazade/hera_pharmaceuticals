import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
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
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      children: [
        {
          path: "",
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
  ],
});

export default router;
