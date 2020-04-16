import Vue from "vue";
import Router from "vue-router";
import Main from "../components/Main";
import UserData from "../components/UserData";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "/main"
    },

    {
      path: "/main",
      component: Main
    },

    {
      path: "/user",
      component: UserData,
      props: route => ({ id: route.query.id })
    }
  ]
});
