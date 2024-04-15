import { createRouter, createWebHistory } from "vue-router";
import CustomerView from "../views/CustomerView.vue";
import HomeView from "../views/HomeView.vue";
import CustomerList from "../components/CustomerList.vue";
import CustomerForm from "../components/CustomerForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      menuTitle: "Início",
      icon: "mdi-home",
    },
  },
  {
    path: "/customer",
    name: "customer-view",
    component: CustomerView,
    meta: {
      menuTitle: "Clientes ",
      icon: "mdi-account-multiple",
    },
    children: [
      {
        path: "",
        component: CustomerList,
      },
      {
        path: "form",
        component: CustomerForm,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
