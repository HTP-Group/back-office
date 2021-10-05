<template>
  <div class="test-page">
    <div class="test-title">
      <TestCard />
    </div>
    <div class="test-list">
      <Classroom />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Classroom from '../../classes/Classroom.vue';
import TestCard from './Card.vue';

@Component({
  components: {
    Classroom,
    TestCard,
  },
})

export default class Test extends Vue {
  public search = '';
}
</script>

<style lang="scss">
.test-page {
  .test-title {
    grid-row-start: 1;
    z-index: 1000;
    width: 100%;
    .test-title-h2 {
      text-align: center;
    }
  }
  .test-list {
    grid-template-columns: 1fr;
    width: 100%;
    margin-top: 2em;
    grid-row-start: 2;
  }
}
</style>
