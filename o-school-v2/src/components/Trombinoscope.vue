<template>
  <div class="trombi-page">
    <div class="profile-page-title">
      <h2 class="profile-page-title-h2">
        Trombinoscope
      </h2>
      <!-- créer un profil student sous forme de Card -->
    </div>
    <div class="trombi">
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
         <ProfileStudent />
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileStudent from './profile/StudentProfile.vue';

@Component({
  components: {
    ProfileStudent,
  },
})
export default class Trombinoscope extends Vue {

}
</script>

<style lang="scss">
@import './src/assets/_trombi.scss';
</style>
