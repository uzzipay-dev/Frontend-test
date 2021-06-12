<template>
  <section class="character-container">
    <div v-if="result.results && result.results.length" class="characters">
      <div class="character" v-for="result in result.results" :key="result.id">
        <router-link :to="{ name: 'character', params: { id: result.id } }">
          <img :src="result.image" alt="image" />
          <h2 class="name">{{ result.name }}</h2>
        </router-link>
        <p class="status">Status: {{ result.status }}</p>
        <p class="species">Specie: {{ result.species }}</p>
      </div>
    </div>
    <div v-else-if="result.results && result.results.length === 0">
      <p class="sem-resultados">
        Busca sem reusltado. Tente buscar outro termo.
      </p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      result: null,
    };
  },
  computed: {
    url() {
      let queryString = '';
      for (let key in this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
      }
      console.log(queryString);
      return '/character?_limit=20' + queryString;
    },
  },
  methods: {
    getCharacters() {
      axios.get(this.url).then((r) => {
        this.result = r.data;
      });
    },
  },
  watch: {
    url() {
      this.getCharacters();
    },
  },
  created() {
    this.getCharacters();
  },
};
</script>

<style scoped>
.character-container {
  max-width: 1000px;
  margin: 0 auto;
}

.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.character {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.character:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.character img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.name {
  margin-bottom: 10px;
}

.sem-resultados {
  text-align: center;
}
</style>
