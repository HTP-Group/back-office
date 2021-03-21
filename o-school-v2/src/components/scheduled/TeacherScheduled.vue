<template>
  <div class="scheduled-teacher-page">
    <!-- <v-calendar
      ref='calendar'
      :now="today"
      :value="today"
      :events="events"
      color='primary'
      type='week'
    ></v-calendar> -->
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Sheduled extends Vue {
  // public today = '2019-01-08';

  // public events = [
  //   {
  //     name: 'Weekly Meeting',
  //     start: '2019-01-07 09:00',
  //     end: '2019-01-07 10:00',
  //   },
  //   {
  //     name: 'Thomas anniversary',
  //     start: '2019-01-10',
  //   },
  //   {
  //     name: 'Mash Potatoes',
  //     start: '2019-01-09 12:30',
  //     end: '2019-01-09 15:30',
  //   },
  // ]

  // mounted() {
  //   console.log(this.$refs);
  //   // this.$refs.calendar;
  // }
}
</script>
<style lang="scss">
</style>
