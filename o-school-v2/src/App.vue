<template>
  <div>
    <Register />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Register from './components/Register.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Register,
  },

  data: () => ({
    //
  }),
});
</script>
