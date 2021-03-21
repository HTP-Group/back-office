<template>
  <div class="test-page">
    <div class="test-date">
      <span>02/15/21</span>
    </div>
    <div class="test-disciplines">
      <p class="test-disciplines-name">Maths</p>
    </div>
    <div class="test-title">
      <h4 class="test-title-h2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industrys
      </h4>
    </div>
    <div class="icons">
      <v-icon>fa-pen</v-icon>
    </div>
  </div>
</template>

<script la,g="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Card extends Vue {
}
</script>

<style lang="scss">
.test-page {
  background-color: #fff;
  border: 2px solid rgb(111, 104, 237, 0.1);
  display: grid;
  grid-template-columns: 20% 20% 53% 2%;
  max-height: 3.5em;
  padding: 0.5em;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 rgba(111, 104, 237, 0.1);
  .test-date {
    grid-column-start: 1;
  }
  .test-title {
    grid-column-start: 3;
    .test-title-h2 {
      text-align: justify;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 280px;
      white-space: nowrap;
      font-weight: 400;
    }
  }
  .test-disciplines {
    grid-column-start: 2;
  }
  &:hover {
    background-color: rgb(111, 104, 237, 0.1);
  }
  .v-icon {
    margin-top: 0;
    align-self: center !important;
  }
}

</style>
