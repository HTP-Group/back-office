<template>
  <div class="teacher-dashboard-page">
    <div class="teacher-dashboard-title">
      <h2 class="teacher-dashboard-title-h2">Teacher Name Dashboard</h2>
    </div>
    <div class="dashboard-classes">
      <div class="classes">
        <Classroom />
        <Classroom />
        <Classroom />
        <Classroom />
        <Classroom />
        <Classroom />
      </div>
      <div class="display-class"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Classroom from '../classes/Classroom.vue';

@Component({
  components: {
    Classroom,
  },
})

export default class TeacherDashboard extends Vue {

}
</script>

<style lang="scss">
.teacher-dashboard-page {
  display: grid;
  grid-template-rows: 25px auto;
  height: 78vh;
  grid-template-columns: 1fr;
  margin: 1em 2em;
  padding-bottom: 2em;
  .teacher-dashboard-title {
    grid-row-start: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #262a3e;
    padding: 2em;
    border-bottom :1px solid #6f68ed;
    box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.15);
    margin-bottom: 1em;
    width: 80% !important;
    justify-self: center;
    .teacher-dashboard-title-h2 {
      grid-column-start: 2;
      text-align: center;
    }
  }
  .dashboard-classes {
    grid-row-start: 2;
    width: 80%;
    margin-top: 3.5em;
    display: grid;
    grid-gap: 1em;
    grid-template-columns:repeat(auto-fill, minmax(450px, 1fr));
    justify-self: center;
    box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.15);
    padding: 1em;
    overflow-y: scroll;
    .classes {
      justify-self: center;
    }
  }

}

</style>
