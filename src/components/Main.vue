<template>
  <div class="container">
    <img
      src="./../assets/logo-pixel.gif"
      alt="pokémon"
    >
    <router-link to="/Pokemon" tag="button" class="pkmn">Pokedex</router-link>
      <!--this goes to the pokedex-->
    <router-link to="/PokemonGame" tag="button" class="pkmn">Guess That Pokemon!</router-link>

    <br>
    <br>
  </div>
</template>

<script>

export default {
    components: {
    },
    computed: {
    },
    methods: {
    },
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom, #ff0000, #d2001f, #a20027, #710826, #420f1d, #3e2131, #392f3b, #3b3b3b, #676767, #979797, #cacaca, #ffffff);   
  }
  .pkmn{
      border: 2px white solid;
      border-radius: 15px;
      font-size: 30px;
      padding: 12px;
      color: white;
      font-family:'Courier New', Courier, monospace;
      font-weight: normal;
      background: #676767;
      cursor: pointer;
      outline: none;
  }
</style>
