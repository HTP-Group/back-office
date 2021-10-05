<template>
  <div class="home">
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from '../components/Home.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Home,
  },
});
</script>
