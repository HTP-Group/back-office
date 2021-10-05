<template>
<!-- add headers reprendre le template de classroom-->
  <div class="card-page" @click="$emit('open-test')">
    <div class="card-date">
      <span>02/15/21</span>
    </div>
    <div class="card-disciplines">
      <p class="card-disciplines-name">Maths</p>
    </div>
    <div class="card-title">
      <h4 class="card-title-h2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industrys
      </h4>
    </div>
    <div class="icons" @click="edit()">
      <v-icon>fa-pen</v-icon>
    </div>
  </div>
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
