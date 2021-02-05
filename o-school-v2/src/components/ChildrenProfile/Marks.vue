<template>
  <v-data-table
    :headers="headers"
    :items="evaluations"
    :items-per-page="6"
    class="elevation-1 header"
  ></v-data-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Marks extends Vue {
  public headers: object[] = [
    {
      text: 'Dates',
      align: 'start',
      sortable: false,
      value: 'Dates',
      class: 'header-table',
    },
    { text: 'Subject', value: 'Subject' },
    { text: 'Marks', value: 'Marks' },
    { text: 'Comments', value: 'Comments' },
    { text: 'Suggestions', value: 'Suggestions' },
  ]

  public evaluations: object[] = [
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
    {
      Dates: '12/02/2020',
      Subject: 'Additions',
      Marks: '15/20',
      Comments: 'Be careful with the 3',
      Suggestions: 'You should do again the third exercice page ...',
    },
  ];
}
</script>

<style lang="scss" scoped>
@import './src/assets/_profile.scss';
</style>
