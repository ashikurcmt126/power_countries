import Vue from "vue";
import Router from "vue-router";
import AddCustomer from "./components/AddCustomer.vue";
import Customer from "./components/Customer.vue";
//import NavbarMenu from "./components/population/NavbarMenu.vue";
import HomePopulation from "./components/population/HomePopulation.vue";
 
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
        name: "homePopulation",
        component: HomePopulation
    },
    {
        path: "/customer",
        name: "customer",
        component: Customer
    }
  ]
});