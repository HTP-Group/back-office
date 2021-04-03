<template>
  <div class="event-page">
    <div class="event-infos">
      <div class="event-title">
        <h2 class="event-title-h2">Event Name: Annual School Party </h2>
      </div>
      <div class="event-content">
        <p class="event-content-para">
          Lorem Ipsum is simply text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          Lorem Ipsum is simply text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </div>
    </div>
    <div class="calendar">
      <div class="calendar-content">
        <p class="number">12th</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

Component({
  components: {},
});

export default class EventCard extends Vue {

}
</script>

<style lang="scss" scoped>
.event-page {
  width: 100%;
  justify-self: flex-start;
  // padding: 1.5em;
  border-radius: 10px;
  border-left: 4px solid #6f68ed;
  display: grid;
  grid-template-columns: 85% 15%;
  box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.5);
  max-height: 15em;
  .event-infos {
    padding: 1.5em 0.5em;
    .event-content {
      overflow: hidden;
      white-space: nowrap;
      width: 90%;
      .event-content-para {
        text-overflow: ellipsis;
        max-height: 5em;
        text-align: justify;
      }
    }
  }
  .calendar {
    // margin: 0.001em 0.1;
    background-color: #6f68ed;
    box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.7);
    display: grid;
    border-radius: 0 10px 10px 0;
    .calendar-content {
      display: grid;
      .number {
        align-self: center;
        color: #fff;
        padding: 0.5em;
      }
    }
  }
}

</style>
