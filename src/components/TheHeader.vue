<template>
  <header>
    <nav>
      <router-link to="/" class="titulo">
        <h1>Rick and Morty</h1>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style scoped>
header {
  background: #fff;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.titulo {
  padding: 10px 0;
}
</style>
