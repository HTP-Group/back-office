<template>
  <div class="profile">
    <!-- <div v-if="currentUserBis.isParent" class="parent-profile">
        <ParentProfile :parent-infos="this.currentUserBis" @refresh-profile="getMe()" />
    </div>
    <div v-else class="teacher-profile">
        <TeacherProfile :teacher-infos="this.currentUserBis"/>
    </div> -->
    <!-- <ChildrenProfile v-if="showChildrenProfile" />
    <StudentProfile v-if="showStudentProfil"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// import profileApi from '../../api/profile.api';
// import { User } from '../../Interfaces/user/User';
import {
	// IS_SIGNED,
	JWT_ACCESS,
} from '../../constants';

@Component({
	components: {
	},
})
export default class Profile extends Vue {
  // récupérer en props le boolean isParent pour conditionner l'affichage du profile
  // @Prop public isParent!: boolean
  public currentUserBis = {};

  public showChildrenProfile = false;

  public showStudentProfil = false;

  public async mounted() {
  	// récupère le token
  	localStorage.getItem(`${JWT_ACCESS}`);
  	// console.log('getItem local storage', localStorage.getItem(`${JWT_ACCESS}`));

  	// this.getMe();
  }

	// public async getMe() {
	//   // call api get_me()
	//   const response = await profileApi.getMe();
	//   this.currentUserBis = { ...response };
	//   console.log(this.currentUserBis);
	//   console.log(response);
	// }
}
</script>

<style lang="scss">
.btn {
  width: 50%;
}
</style>
