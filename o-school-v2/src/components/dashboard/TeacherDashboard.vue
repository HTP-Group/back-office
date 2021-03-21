<template>
  <div class="teacher-dashboard-page">
    <div class="teacher-dashboard-title">
      <h2 class="teacher-dashboard-title-h2">Teacher Name Dashboard</h2>
    </div>
    <!-- If I select a class I display testslist with a add btn -->
    <div v-if="!classSelected" class="dashboard-classes-first">
      <!-- first screen: I display classes in the middle and take all the page -->
      <div class="classes-list">
        <Classroom @display-class="displayClass()"/>
        <Classroom />
        <Classroom />
      </div>
    </div>
      <!-- second screen: I select a class, -->
    <div v-else-if="classSelected" class="dashboard-classes-second">
      <div class="classes-list">
        <Classroom @display-class="displayClass()"/>
        <Classroom />
        <Classroom />
      </div>
      <div class="class-tests-list">
        <TestsList />
      </div>
    </div>
      <!-- the classList is display on the left and the testsList on the right with add test btn-->
      <!-- if I select a test I display the test -->
      <div class=""></div>
      <!-- third screen: I display the student list of the class
      as a Teacher I can edit the test: entry -->
      <div class="display-class"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Classroom from '../classes/Classroom.vue';
import TestsList from '../tests/TestsList.vue';

@Component({
  components: {
    Classroom,
    TestsList,
  },
})

export default class TeacherDashboard extends Vue {
  public classSelected = false;

  displayClass() {
    console.log('je passe');
    this.classSelected = !this.classSelected;
  }
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
  .dashboard-classes-first {
    grid-row-start: 2;
    width: 80%;
    margin-top: 3.5em;
    display: grid;
    grid-gap: 1em;
    // grid-template-columns:repeat(auto-fill, minmax(450px, 1fr));
    justify-self: center;
    box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.15);
    padding: 1em;
    overflow-y: scroll;
    // border: 4px solid purple;

    .classes-list {
      width: 50%;
      justify-self: center;
    }
  }
  .dashboard-classes-second {
    grid-row-start: 2;
    width: 80%;
    margin-top: 3.5em;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 35% 65%;
    // grid-template-columns:repeat(auto-fill, minmax(450px, 1fr));
    justify-self: center;
    box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.15);
    padding: 1em;
    overflow-y: scroll;
    .classes-list {
      grid-column-start: 1;
      width: 100%;
      justify-self: center;
      margin-right: 1.5em;
    }
    .class-tests-list {
      background-color: rgba(211, 209, 250, 0.1);
      width: 80%;
      grid-column-start: 2;
      padding: 1em;
      justify-self: center;
    }
  }

}

</style>
