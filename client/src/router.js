import Vue from "vue";
import Router from "vue-router";
import AddCustomer from "./components/AddCustomer.vue";
import Customer from "./components/Customer.vue";
 
Vue.use(Router);
 
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/add",
      name: "add",
      component: AddCustomer
    },
    {
        path: "/",
        name: "customer",
        component: Customer
      }
  ]
});