<template>
  <div class="event-page">
    <div class="event-infos">
      <div class="event-title">
        <h2 class="event-title-h2">Event Name: Party Year Of The School</h2>
      </div>
      <div class="event-content">
        <p class="event-content-para">....</p>
      </div>
    </div>
    <div class="calendar">
      <div class="calendar-content">
        <p class="number">12th</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.event-page {
  width: 50%;
  justify-self: center;
  margin: 1.5em;
  // padding: 1.5em;
  border-radius: 10px;
  border-left: 4px solid #6f68ed;
  display: grid;
  grid-template-columns: 95% 5%;
  box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.5);
  .event-infos {
    padding: 1.5em 0.5em;
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
