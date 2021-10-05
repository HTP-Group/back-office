<template>
  <div class="parent-dashboard-page">
    <div class="parent-dashboard-title">
      <h2 v-if="!childrenSelected" class="parent-dashboard-title-h2">parent Name Dashboard</h2>
      <h2 v-else class="parent-dashboard-title-h2">Children Name</h2>
    </div>
    <!--  -->
    <div
      v-if="!childrenSelected"
      class="dashboard-children-first"
    >
      <!-- first screen: I display all the children -->
      <div class="children-list">
        <ChildrenCard @display-children="displayChildrenProfile()"/>
        <ChildrenCard />
      </div>
    </div>
      <!-- second screen: I select a children-->
    <div v-else class="dashboard-children-second" >
      <div class="close-icon" style="cursor:pointer" @click="displayChildrenProfile()">
        <p>Back</p>
        <v-icon color="#6f68ed" size="16">fa-arrow-left</v-icon>
      </div>
      <!-- v-icon fa-times @display-children="displayChildrenProfile()"-->
      <div class="children-profile">
        <ChildrenProfile />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChildrenCard from '../children/ChildrenCard.vue';
import ChildrenProfile from '../profile/ChildrenProfile.vue';

@Component({
  components: {
    ChildrenCard,
    ChildrenProfile,
  },
})

export default class ParentDashboard extends Vue {
  public childrenSelected = false;

  displayChildrenProfile() {
    console.log('je rentre là');
    this.childrenSelected = !this.childrenSelected;
  }
}
</script>

<style lang="scss">
.parent-dashboard-page {
  display: grid;
  grid-template-rows: 25px auto;
  height: 78vh;
  grid-template-columns: 1fr;
  margin: 1em 2em;
  padding-bottom: 2em;
  .parent-dashboard-title {
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
    .parent-dashboard-title-h2 {
      grid-column-start: 2;
      text-align: center;
    }
  }
  .dashboard-children-first {
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

    .children-list {
      width: 50%;
      justify-self: center;
    }
  }
  .dashboard-children-second {
    grid-row-start: 2;
    width: 80%;
    margin-top: 3.5em;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: auto;
    grid-template-rows: 1fr;
    justify-self: center;
    box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.15);
    padding: 2em;
    overflow-y: scroll;
    .children-card-selected {
      grid-column-start: 1;
      width: 100%;
      justify-self: center;
      margin-right: 1.5em;
    }
    .children-profile {
      background-color: rgba(211, 209, 250, 0.1);
      width: 95%;
      grid-column-start: 2;
      padding: 1.5em;
      justify-self: center;
    }
  }

}
</style>
