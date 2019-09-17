import Vue from "vue";
import Router from "vue-router";
import Main from "./components/Main.vue";
import Pokemon from "./components/Pokemon.vue";
import PokemonGame from "./components/PokemonGame.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/Pokemon",
      name: "Pokemon",
      component: Pokemon
    },
    {
        path: "/PokemonGame",
        name: "PokemonGame",
        component: PokemonGame
      },
  ]
});
