<template>
  <div class="container">
    <router-link to="/" class="home"><i class="material-icons md-48">home</i></router-link>
    <div>
      <img
        src="./../assets/logo-pixel.gif"
        alt="pokémon"
      >
    </div>
    <Play 
      :imageUrl="imageUrl" 
      :apiUrl="apiUrl"
      @setPokemonUrl="setPokemonUrl" />
  </div>
</template>

<script>
  import Play from './Play.vue';

  export default {
    data: () => {
      return {
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
        apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
        pokemonUrl: '',
        showDetail: false
      }
    },
    components: {
      Play,
    },
    methods: {
      setPokemonUrl(url) {
        this.pokemonUrl = url;
        this.showDetail = true;
      },
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    width: 100%;
    min-height: auto;
    background-image: linear-gradient(to bottom, #ff0000, #d2001f, #a20027, #710826, #420f1d, #3e2131, #392f3b, #3b3b3b, #676767, #979797, #cacaca, #ffffff);
        
    font-family: 'Acme', arial;
    font-size: 1rem;
    font-weight: normal;
  }
  .home{
    margin-left: 95%;
  }
  .material-icons.md-48 { font-size: 48px; }

  h1 { color: #efefef; }
</style>
