<template>
  <div class="school-life-page">
    <div class="school-life-title">
      <h2 class="school-life-title-h2">School Life</h2>
    </div>
    <div class="events">
      <div class="sooner-events">
        <EventCard />
      </div>
      <div class="others-events">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import EventCard from './events/EventCard.vue';
// import
@Component({
  components: {
    EventCard,
  },
})
export default class SchoolLife extends Vue {

}
</script>

<style lang="scss">
.school-life-page {
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  grid-template-rows: 20% auto;
  border: 3px solid orange;
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
     width: 80%;
    display: grid;
    grid-column-start: 1;
    grid-column-end: 3;
    border: 3px solid pink;
    justify-self: center;
    .sooner-events {
      border: 3px solid red;
      display: grid;
      width: 10%;
      grid-template-columns: 1fr;
      justify-self: flex-start;
      padding: 2em 0;
      border-bottom: 2px solid #6f68ed;
    }
    .others-events {
      display: grid;
      justify-self: center;
      margin-top: 2em;
      grid-gap: 2em;
      grid-template-columns:repeat(auto-fill, minmax(400px, 1fr));
    }
  }
}

</style>
