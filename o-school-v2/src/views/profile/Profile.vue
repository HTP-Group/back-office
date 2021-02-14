<template>
  <div class="profile">
    <ParentProfile v-if="currentUser.isParent"/>
    <TeacherProfile v-if="!currentUser.isParent"/>
    <ChildreProfile v-if="showChildrenProfile" />
    <StudentProfile v-if="showStudentProfil"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ParentProfile from '../../components/profile/ParentProfile.vue';
import TeacherProfile from '../../components/profile/TeacherProfile.vue';
import ChildreProfile from '../../components/profile/ChildrenProfile.vue';
import StudentProfile from '../../components/profile/StudentProfile.vue';

@Component({
  components: {
    ParentProfile,
    TeacherProfile,
    ChildreProfile,
    StudentProfile,
  },
})
export default class Profile extends Vue {
  // récupérer en props le boolean isParent pour conditionner l'affichage du profile
  // @Prop public isParent!: boolean
  public currentUser = {
    isParent: false,
  }

  public showChildrenProfile = false;

  public showStudentProfil = false;
}
</script>

<style lang="scss">
.btn {
  width: 50%;
}
</style>
