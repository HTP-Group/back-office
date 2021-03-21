<template>
  <div class="class-page" @click="$emit('display-class')">
    <div class="class-infos">
      <div class="class-title">
      <h2 class="class-title-h2">Class Name : Lilipus</h2>
      <span>Level: 3rd Grade</span>
    </div>
    <div class="class-infos-content">
      <p class="class-content">
        <span class="comment">Lorem Ipsum is simply text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </span>
      </p>
      <v-card-text>
        <router-link to="/trombinoscope/:id" class="b-link">Trombinoscope</router-link>
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
  padding: 1em;
  border-radius: 10px;
  border-left: 4px solid #6f68ed;
  display: grid;
  grid-template-columns: 75% 25%;
  box-shadow: 0 0 4px 0 rgba(111, 104, 237, 0.4);
  height: 20vh;
  .class-infos {
    .class-title {
      grid-column-start: 1;
      border-bottom: 1px solid #6f68ed;
      width: 85%;
      padding: 0.5em 0 0.5em 1em;
  }
    .class-infos-content {
      padding: 1em;
      .class-content {
        text-align: justify;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 300px;
        white-space: nowrap;
        max-height: 3em;
        padding-right: 0.5em;
        .comment {
          width: 50%;
          text-align: justify;
        }
      }
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
