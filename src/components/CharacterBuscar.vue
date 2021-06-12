<template>
  <form>
    <input
      name="busca"
      id="busca"
      type="text"
      v-model="busca"
      placeholder="Buscar..."
    />
    <input
      type="submit"
      id="lupa"
      value="Buscar"
      @click.prevent="buscarCharacter"
    />
    <div class="dropdown">
      <div class="opt-status">
        <label class="lblstatus" for="status">Status </label>
        <select name="select" @change="buscarStatus">
          <option value="">Escolha o status </option>
          <option
            v-for="item in uniqListStatus"
            :key="item.id"
            :value="item.status"
          >
            {{ item.status }}
          </option>
        </select>
      </div>
      <div class="opt-specie">
        <label class="lblspecies" for="species">Species </label>
        <select name="select" @change="buscarSpecies">
          <option value="">Escolha a espécie </option>
          <option
            v-for="item in uniqListSpecies"
            :key="item.id"
            :value="item.species"
          >
            {{ item.species }}
          </option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import filterList from '@/filter_list';

export default {
  data() {
    return {
      busca: '',
      status: '',
      species: '',
      uniqListStatus: null,
      uniqListSpecies: null,
    };
  },
  methods: {
    buscarCharacter() {
      this.$router.push({
        query: { name: this.busca, status: this.status, species: this.species },
      });
    },
    buscarStatus(event) {
      this.status = event.target.value;
      this.$router.push({
        query: { status: event.target.value, species: this.species },
      });
    },
    buscarSpecies(event) {
      this.species = event.target.value;
      this.$router.push({
        query: { species: event.target.value, status: this.status },
      });
    },
  },
  mounted() {},
  created() {
    axios
      .get('/character')
      .then((response) => {
        var listCharacters = response.data.results;
        this.uniqListStatus = filterList(listCharacters, 'species', 'status');
        this.uniqListSpecies = filterList(listCharacters, 'status', 'species');
        // console.log(_.uniqBy(mapListStatus, 'status'));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 20px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
}

#busca:focus,
#busca:hover {
  outline: none;
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url('../assets/search.svg') no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
}
.dropdown {
  display: grid;
  grid-template-columns: 0.7fr 0.8fr 0.6fr;
  margin: 15px;
}

.lblspecies {
  color: #345;
  font-weight: bold;
}
.lblstatus {
  color: #345;
  font-weight: bold;
}
.opt-specie {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 5px;
  border: none;
  border-radius: 4px;
}

.opt-status {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 5px;
  border: none;
  border-radius: 4px;
}
</style>
