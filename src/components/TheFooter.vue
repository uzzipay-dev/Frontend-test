<template>
  <footer>
    <router-link to="/" class="titulo">
      <p>Rick and Morty</p>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped>
footer {
  background: #fff;
  padding: 25px 0;
  text-align: center;
  font-size: 1.2rem;
  color: white;
  position: relative;
  top: 75px;
}
</style>
