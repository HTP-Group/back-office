<template>
  <div class="trombi-page">
    <div class="trombi-page-title">
      <h2 class="trombi-page-title-h2">
        Trombinoscope
      </h2>
      <!-- créer un profil student sous forme de Card -->
    </div>
    <div class="trombi">
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
         <StudentProfile />
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StudentProfile from './profile/StudentProfile.vue';

@Component({
  components: {
    StudentProfile,
  },
})
export default class Trombinoscope extends Vue {

}
</script>

<style lang="scss">
@import './src/assets/_trombi.scss';
</style>
