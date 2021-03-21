<template>
  <div class="tests-list">
    <div class="title">
      <h2 class="title-h2">Tests list</h2>
    </div>
    <TestCard />
    <TestCard />
    <TestCard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TestCard from './test/TestCard.vue';

@Component({
  components: {
    TestCard,
  },
})
export default class TestsList extends Vue {

}
</script>

<style lang="scss">
.tests-list {
  display: grid;
  grid-gap: 1em;
  border-radius: 10px;
  padding: 1.5em;
  .title-h2 {
    text-align: center;
  }
}
</style>
