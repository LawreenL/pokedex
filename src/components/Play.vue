<template>
  <div class="list">

    <article>
      <img :src="imageUrl + Math.floor(Math.random() * pokemons.length) + '.png'" width="166" height="166" alt="">
      <h3>{{ pokemons[Math.floor(Math.random() * pokemons.length)].name}}</h3>
    </article>
  </div>
</template>

<script>
  export default {
    props: [
      'imageUrl',
      'apiUrl'
    ],
    data: () => {
      return {
        pokemons: [],
        nextUrl: '',
        currentUrl: '',
        random: null,
        game:[]
      }
    },
    methods: {
      fetchData() {
        let req = new Request(this.currentUrl);
        fetch(req)
          .then((resp) => {
            if(resp.status === 200)
              return resp.json();
          })
          .then((data) => {
            this.nextUrl = data.next;
            data.results.forEach(pokemon => {
              pokemon.id = pokemon.url.split('/')
                .filter(function(part) { return !!part }).pop();
              this.pokemons.push(pokemon);
            });
          })
          .catch((error) => {
            console.log(error);
          })
      },
      next() {
        this.currentUrl = this.nextUrl;
        this.fetchData();
      },
      setPokemonUrl(url) {
        this.$emit('setPokemonUrl', url);
      }
    },
    created() {
      this.currentUrl = this.apiUrl;
      this.fetchData();
    },
    mounted() {
      this.scrollTrigger();
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1px;
    width: 80%;
    margin: 1px;
    // max-width: 710px;

    article {
      height: 200px;
      width: 200px;
      margin-bottom: 30px;
      background-color: #efefef;
      text-align: center;
      text-transform: capitalize;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);

      h3 {
        margin: 0;
        font-family: 'Courier New', Courier, monospace;
      }
    }
  }

  #scroll-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    font-size: 2rem;
    color: #efefef;
  }
</style>

