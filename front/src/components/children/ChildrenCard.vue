<template>
  <div class="children-card" @click="$emit('display-children')">
    <div class="children-infos">
      <div class="children-title">
        <h2 class="children-title-h2">Betty Obrien</h2>
        <span class="childrenInfos">3rd Grade</span>
      </div>
      <div class="children-infos-content">
        <p class="children-content">
          <span class="comment">
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </span>
        </p>
        <v-card-text>
          <router-link to="/trombinoscope" class="b-link">Trombinoscope</router-link>
        </v-card-text>
      </div>
    </div>
    <div class="children-settings">
      <v-btn>Edit</v-btn>
      <v-btn>Delete</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ChildrenCard extends Vue {}
</script>

<style lang="scss">
.children-card {
  width: 100%;
  justify-self: center;
  margin: 1.5em;
  padding: 1em;
  border-radius: 10px;
  border-left: 4px solid #6f68ed;
  display: grid;
  grid-template-columns: 75% 25%;
  box-shadow: 0 0 4px 0 rgba(111, 104, 237, 0.4);
  height: 25vh;
  .children-infos {
    .children-title {
      grid-column-start: 1;
      border-bottom: 1px solid #6f68ed;
      width: 85%;
      padding: 0.5em 0 0.5em 1em;
  }
    .children-infos-content {
      padding: 1em;
      .children-content {
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
  .children-settings {
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
