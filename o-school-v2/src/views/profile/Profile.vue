<template>
  <div class="profile">
    <div v-if="currentUser.isParent" class="parent-profile">
      <router-link to="/parent-profile">
        <ParentProfile :parent-infos="this.currentUserBis"/>
    </router-link>
    </div>
    <div v-else class="teacher-profile">
      <router-link to="/teacher-profile">
        <TeacherProfile  :teacher-infos="this.currentUserBis"/>
      </router-link>
    </div>
    <!-- <ChildrenProfile v-if="showChildrenProfile" />
    <StudentProfile v-if="showStudentProfil"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ParentProfile from '../../components/profile/ParentProfile.vue';
import TeacherProfile from '../../components/profile/TeacherProfile.vue';
import ChildrenProfile from '../../components/profile/ChildrenProfile.vue';
import StudentProfile from '../../components/profile/StudentProfile.vue';
import authApi from '../../api/auth.api';
// import { User } from '../../Interfaces/user/User';
import {
  // IS_SIGNED,
  JWT_ACCESS,
} from '../../constants';

@Component({
  components: {
    ParentProfile,
    TeacherProfile,
    ChildrenProfile,
    StudentProfile,
  },
})
export default class Profile extends Vue {
  // récupérer en props le boolean isParent pour conditionner l'affichage du profile
  // @Prop public isParent!: boolean
  public currentUser = {
    isParent: false,
  }

  public currentUserBis = {};

  public showChildrenProfile = false;

  public showStudentProfil = false;

  public async mounted() {
    console.log('test before GetMe');
    // récupère le token
    localStorage.getItem(`${JWT_ACCESS}`);
    console.log('getItem local storage', localStorage.getItem(`${JWT_ACCESS}`));

    // call api get_me()
    const response = await authApi.getMe();
    this.currentUserBis = { ...response };
    console.log(this.currentUserBis);
    console.log(response);
  }
}
</script>

<style lang="scss">
.btn {
  width: 50%;
}
</style>
