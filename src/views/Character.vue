<template>
  <section>
    <div v-if="character" class="character">
      <ul class="image">
        <li>
          <img :src="character.image" alt="image" />
        </li>
      </ul>
      <div class="info">
        <h1 class="name">{{ character.name }}</h1>
        <p class="status">Status: {{ character.status }}</p>
        <p class="gender">Gênero: {{ character.gender }}</p>
        <p class="species">Espécie: {{ character.species }}</p>
        <p class="location">Origem: {{ character.location.name }}</p>
        <p class="created">Criação: {{ character.created }}</p>
      </div>
      <router-link to="/">
        <button class="btn">Voltar</button>
      </router-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Characters',
  props: ['id'],
  data() {
    return {
      character: '',
    };
  },
  methods: {
    getCharacter() {
      axios.get(`/character/${this.id}`).then((response) => {
        this.character = response.data;
      });
    },
  },
  created() {
    this.getCharacter();
  },
};
</script>

<style scoped>
.character {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.name {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.status {
  font-size: 1.2rem;
  padding-bottom: 10px;
}

.species {
  font-size: 1.2rem;
  padding-bottom: 10px;
}
.gender {
  font-size: 1.2rem;
  padding-bottom: 10px;
}
.created {
  font-size: 1.2rem;
  padding-bottom: 10px;
}
.location {
  font-size: 1.2rem;
  padding-bottom: 10px;
}

.btn {
  margin-top: 20px;
  width: 200px;
}
</style>
