<template>
  <v-data-table></v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Marks extends Vue {
  public marks = {
     french: [
       12, 14
     ], 
     sport: [
       17
     ]
    }
  public headers = [{
    text: 'betty Obrien'
  }]   
}
</script>

<style>

</style>