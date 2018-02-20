import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "@/components/Index";
import Login from "@/components/Login";
import Register from "@/components/Register";
import CreateCampaigns from "@/components/CreateCampaigns";
import EditCampaigns from "@/components/EditCampaigns";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/index",
      name: "Index",
      component: Index
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/Register",
      name: "Register",
      component: Register
    },
    {
      path: "/add",
      name: "CreateCampaigns",
      component: CreateCampaigns
    },
    {
      path: "/edit",
      name: "EditCampaigns",
      component: EditCampaigns
    }
  ],
  mode: 'history'
});
