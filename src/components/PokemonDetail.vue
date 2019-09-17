<template>
  <div class="detail">
    <div class="detail-view" v-if="show">
      <div v-if="pokemon" class="image">
        <img :src="imageUrl + pokemon.id + '.png'" width="166" height="166" alt="">
      </div>
      <div v-if="pokemon" class="data">
        <br>
        <br>
        <h2>{{ pokemon.name }}</h2>
        <div class="property">
          <div class="left">Base Experience</div>
          <div class="right">{{ pokemon.base_experience }} XP</div>
        </div>
        <div class="property">
          <div class="left">Height</div>
          <div class="right">{{ pokemon.height / 10 }} m</div>
        </div>
        <div class="property">
          <div class="left">Weight</div>
          <div class="right">{{ pokemon.weight / 10 }} kg</div>
        </div>
        <table class="stat">
          <thead >
            <td class="tleft">
              Stat
            </td>
            <td class="trighthead">
              Base Value
            </td>
          </thead>
          <tbody
          v-for="(value, index) in pokemon.stats"
          :key="'value'+index">
              <td >{{ value.stat.name }}</td>
              <td class="tright">{{ value.base_stat }}</td>
          </tbody>
        </table>
        <h3>Pokemon Types</h3>
        <div class="types">
          <div class="type" 
            v-for="(value, index) in pokemon.types"
            :key="'value'+index">
            {{ value.type.name }}
          </div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
          <div class="ability" 
            v-for="(value, index) in pokemon.abilities"
            :key="'value'+index">
            {{ value.ability.name }}
          </div>
        </div>
      </div>
      <h2 v-else>The pokemon was not found</h2>
      <button class="close" @click="closeDetail">X</button>
    </div>
    <i v-else class="fas fa-spinner fa-spin"></i>
  </div>
</template>

<script>
  export default {
    props: [
      'pokemonUrl',
      'imageUrl'
    ],
    data: () => {
      return {
        show: false,
        pokemon: {}
      }      
    },
    methods: {
      fetchData() {
        let req = new Request(this.pokemonUrl);
        fetch(req)
          .then((resp) => {
            if(resp.status === 200)
              return resp.json();
          })
          .then((data) => {
            this.pokemon = data;
            this.show = true;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      closeDetail() {
        this.$emit('closeDetail');
      }
    },
    created() {
      this.fetchData();
    }
  }
</script>

<style lang="scss" scoped>
  .detail {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    padding: 90px 10px 10px;
    width: calc(100% - 20px);
    height: calc(100vh - 20px);
    background: rgba($color: #000000, $alpha: .7);

    .detail-view {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      width: 100%;
      max-width: 510px;
      padding: 50px 0 0;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
    
      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -60px;
        width: 130px;
        height: 130px;
        background-image: linear-gradient(to bottom, #ff0000, #d2001f, #a20027, #710826, #420f1d, #3e2131, #392f3b, #3b3b3b, #676767, #979797, #cacaca, #ffffff);
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);
      }

      h2 {
        text-transform: capitalize;
        font-family: 'Courier New', Courier, monospace;
      }

      .data {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 40px;

        .property {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
          font-family: 'Courier New', Courier, monospace;
          .left { float: left; }
          .right { float: right; }
        }
        .stat {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
          font-family: 'Courier New', Courier, monospace;
          .thead {
            border-bottom: 1px solid #ccc;
          }
          .tright{
            text-align: right;
          }
          .trighthead{
            text-align: right;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
          }
          .tleft{
            font-size: 18px;
            border-bottom: 1px solid #ccc;
          }
        }

        h3 {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid #ccc;
          font-family: 'Courier New', Courier, monospace;
        }

        .types, .abilities {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 90%;
          max-width: 400px;
          font-family: 'Courier New', Courier, monospace;

          .type, .ability {
            margin: 0 10px 10px 0;
            padding: 5px 10px;
            border-radius: 20px;
            color: #fff;
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: capitalize;
            word-wrap: none;
            word-break: keep-all;
          }

          .type { background-color: #0A2E50; }
          .ability { background-color: #C73015; }
        }
      }

      .close {
        display:block;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        color: white;
        font-size: 150%;
        background-image: linear-gradient(to bottom, #ff0000, #d2001f, #a20027, #710826, #420f1d, #3e2131, #392f3b, #3b3b3b, #676767, #979797, #cacaca, #ffffff);
        border: 1px solid;
        margin-bottom: 20px;
        outline: none;
        cursor: pointer;
      }
    }

    i {
      font-size: 2rem;
      color: #efefef;
    }
    
  }
</style>
