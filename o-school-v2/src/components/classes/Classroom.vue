<template>
  <div class="class-page">
    <div class="class-infos">
      <div class="class-title">
      <h2 class="class-title-h2">Class Name : Lilipus</h2>
      <span>Level: 3rd Grade</span>
    </div>
    <div class="class-infos-content">
      <p class="class-content">
        <span>Last comments: Agitated class</span>
      </p>
      <v-card-text>
        <router-link to="/profilchildren/:id" class="b-link">Trombinoscope</router-link>
    </v-card-text>
    </div>
    </div>
    <div class="class-settings">
      <v-btn>Edit</v-btn>
      <v-btn>Delete</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Classroom extends Vue {}
</script>
<style lang="scss">
.class-page {
  width: 100%;
  justify-self: center;
  margin: 1.5em;
  // padding: 1.5em;
  border-radius: 10px;
  border-left: 4px solid #6f68ed;
  display: grid;
  grid-template-columns: 75% 25%;
  box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.5);
  height: 17vh;
  .class-infos {
    .class-title {
      grid-column-start: 1;
      border-bottom: 1px solid #6f68ed;
      width: 85%;
      padding: 0.5em 0 0.5em 1em;
  }
    .class-infos-content {
      padding: 1em;
    }
  }
  .class-settings {
    margin-top: 1em;
    display: grid;
    grid-gap: 1em;
    padding-right: 1em;
  }
}
.v-btn {
  border: none;
}
</style>
