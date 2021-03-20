<template>
  <div class="school-life-page">
    <div class="school-life-title">
      <h2 class="school-life-title-h2">School Life</h2>
    </div>
    <div class="events">
      <div class="sooner-events">
        <Event />
      </div>
      <div class="others-events">
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import Event from './events/Event.vue';
// import
@Component({
  components: {
    Event,
  },
})
export default class SchoolLife extends Vue {

}
</script>

<style lang="scss">
.school-life-page {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20% auto;
  .school-life-title {
     width: 80%;
    display: grid;
    grid-column-start: 1;
    grid-column-end: 3;
    color: #262a3e;
    padding: 2em;
    border-bottom :1px solid #6f68ed;
    box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.15);
    margin-bottom: 1em;
    justify-self: center;
    .school-life-title-h2 {
      justify-self: center;
    }
  }
  .events {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    margin: 1.5em;
    .sooner-events {
      display: grid;
      grid-template-columns: auto;
      padding: 2em 0;
      border-bottom: 2px solid #6f68ed;
    }
    .others-events {
      display: grid;
      margin-top: 2em;
      grid-template-columns:repeat(auto-fill, minmax(500px, 1fr));
    }
  }
}

</style>
