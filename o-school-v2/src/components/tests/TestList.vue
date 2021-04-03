<template>
  <div class="tests-list">
    <div class="title">
      <h2 v-if="!testOpen" class="title-h2">Tests list</h2>
    </div>
    <div v-if="!testOpen" class="list-test">
      <Card @open-test="openTest()"/>
      <Card @open-test="openTest()"/>
      <Card @open-test="openTest()"/>
    </div>
    <div v-else class="testOpened">
      <Test />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from './test/Card.vue';
import Test from './test/Test.vue';

@Component({
  components: {
    Card,
    Test,
  },
})
export default class TestsList extends Vue {
  public testOpen = false;

  public openTest() {
    console.log('je passe bien là', this.testOpen);
    this.testOpen = !this.testOpen;
  }
}
</script>

<style lang="scss">
.tests-list {
  display: grid;
  grid-gap: 1em;
  border-radius: 10px;
  padding: 1.5em;
  grid-template-columns: 1fr;
  .title-h2 {
    text-align: center;
  }
  .list-test {
    display: grid;
    grid-gap: 1em;
  }
  .testOpened {
    display: grid;
    border: none;
    border-radius: 0px;
    grid-template-columns: 1fr;
  }
}
</style>
