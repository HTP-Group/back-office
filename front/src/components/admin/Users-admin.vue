<template>
  <div class="users-admin">
    <div class="title-page">
      <h1>Admin Users Page</h1>
    </div>
    <div class="admin-main">
      <v-text-field
        v-model="userBis.firstname"
        label="first name"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        v-model="userBis.lastname"
        label="last name"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        v-model="userBis.email"
        type="email"
        label="email"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        v-model="userBis.password"
        :type="hideNewPassword ? 'password' : 'type'"
        label="password"
        :append-icon="hideNewPassword ? 'fa-eye-slash' : 'fa-eye'"
        class="user-input"
        @click:append="hideNewPassword = !hideNewPassword"
      ></v-text-field>
      <v-text-field
        v-model="userBis.confirmPassword"
        :type="hideNewConfirmPassword ? 'password' : 'type'"
        label="confirmation"
        :append-icon="hideNewConfirmPassword ? 'fa-eye-slash' : 'fa-eye'"
        class="user-input"
        @click:append="hideNewConfirmPassword = !hideNewConfirmPassword"
      ></v-text-field>
    </div>
    <div class="buttons">
        <v-btn
          class="button-cancel"
          @click="cancel()"
        >Cancel</v-btn>
        <v-btn
          class="button-submit"
          @click="submit()"
          @keyup.enter="submit"
        >Submit</v-btn>
      </div>
  </div>
</template>

<script lang='ts'>
import {
	Component,
	Vue,
	// Watch,
	// Prop
} from 'vue-property-decorator';
// import componentNameImported from '';

@Component({
	components: {},
})
export default class UsersAdmin extends Vue {
	// public booleanName = false;
	// @Prop() public propsName!: boolean;

	// public userBis: User | null = null

  public confirmPassword = ''

  public hideNewPassword = false

  public hideNewConfirmPassword = false

  public ableSubmitBtn = true

  public roles = ['Admin', 'Collabs'];

  public isAdmin = 'Admin';

	// get inputHasChanged(): boolean {
	// let data = false;

	// if (!this.userBis) {
	//   return false;
	// }

	//   if (this.userBis.firstname !== ''
	//       && this.userBis.lastname !== ''
	//       && this.userBis.email !== ''
	//       && this.userBis.password !== ''
	//       && this.confirmPassword !== ''
	//       && this.userBis.isAdmin !== false
	//   ) {
	//     data = true;
	//   }
	//   return data;
	// }

	// cancel() {
	//   if (!this.userBis) {
	//     return;
	//   }

	//   this.userBis = {
	//     _id: '',
	//     firstname: '',
	//     lastname: '',
	//     email: '',
	//     password: '',
	//     isAdmin: false,
	//   };
	//   this.confirmPassword = '';
	// }

	// private async submit() {
	//   if (!this.userBis) {
	//     return;
	//   }
	//   try {
	//     this.userBis.isAdmin = this.isAdmin === 'Admin';

	//     // const response = await authApi.register(this.userBis);
	//     // 1/ token csrf renvoyé => le log de response
	//     // console.log('response', response);
	//     // le payload va nous permettre de récupérer les infos du user
	//     // on stock le token dans le localStorage pour communiquer avec l'app.
	//     // localStorage.setItem(`${JWT_ACCESS}`, response);
	//     // pour récupérer IS_SIGNED avec localStorage.getItem('IS_SIGNED')
	//     // localStorage.setItem(`${IS_SIGNED}`, 'true');

	//     // this.$router.replace('/profile');
	//     //
	//   } catch (err) {
	//     console.error(err);
	//   }
	// }
}
</script>

<style lang='scss' scoped>
    /*
         @import '@/assets/scss/_base.scss';
         @import '@/assets/scss/layout/_layout.scss';
    */
    .register-page {
  display: grid;
  grid-template-columns: 30% auto 30%;
  background-color: #fff;
  height: 95vh;
  overflow-y: hidden;
}
.register-bloc {
  margin-top: 2em;
  grid-column-start: 2;
  border: 1px solid #6f68ed;
  border-radius: 10px;
  padding: 2em;
  background-color: #fff;
  height: 75%;
  box-shadow: 0 0 4px 0 rgba(116, 40, 23, 0.15);
  display: grid;
  grid-template-rows: 15% 60% 10% 15%;
  grid-template-columns: 1fr;
  box-shadow:  0 0 6px 0 rgb(111, 104, 237, 0.25);
  .register-title {
    grid-row-start: 1;
    display: grid;
    padding: 2em;
    color: #262a3e;
    border-bottom :1px solid #6f68ed;
    margin-bottom: 1em;
  }
  .register-title-h2 {
    justify-self: center;
  }
  .user-infos {
    grid-row-start: 2;
    grid-template-rows: repeat(6, 16.6%);
    padding: 0 1em;
    border-bottom: none !important;
    .radios-buttons {
      padding-left: -10px;
      .v-input__control {
        display: start;
        .v-input--radio-group {
          display: inline-grid !important;
        }
        .v-label {
          padding-left: 1em;
        }
      }
    }
  }
  .buttons {
    display: grid;
    grid-row-start: 4;
    grid-template-columns: 20% auto 20%;
    grid-gap: 2em;
    grid-template-rows: 1fr;
    margin: 2em 0;
  }
  .button-cancel {

  }
  .button-submit {
    justify-self: flex-end !important;
    background-color: #6f68ed !important;
    color: #fff !important;
  }
  .v-label {}

  .v-icon {
    font-size: 1rem;
  }
}
</style>
