<template>
  <section>
    <CharacterBuscar />
    <CharacterLista />
  </section>
</template>

<script>
import CharacterBuscar from '@/components/CharacterBuscar.vue';
import CharacterLista from '@/components/CharacterLista.vue';

export default {
  name: 'Home',
  components: {
    CharacterBuscar,
    CharacterLista,
  },
};
</script>

<style>
</style>
