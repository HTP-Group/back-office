<template>
  <div class="register-page">
    <div class="register-bloc">
      <div class="register-title">
        <h2 class="register-title-h2">Register</h2>
      </div>
      <div class="user-infos">
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
        <v-container fluid>
          <v-radio-group
            v-model="isParent"
            row
          >
            <v-radio
              :label="roles[0]"
              :value="roles[0]"
              active-class
            ></v-radio>
            <v-radio
              :label="roles[1]"
              :value="roles[1]"
            ></v-radio>
          </v-radio-group>
        </v-container>
      </div>
      <div class="buttons">
        <v-btn
          class="button-cancel"
          @click="cancel()"
        >Cancel</v-btn>
        <v-btn
          class="button-submit"
          @click="submit()"
        >Submit</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import registerApi from '../../api/register.api';

@Component({
  components: {},
})

export default class Register extends Vue {
  public userBis = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    isParent: false,
  }

  public hideNewPassword = false

  public hideNewConfirmPassword = false

  public ableSubmitBtn = true

  public roles = ['Parent', 'Teacher'];

  public isParent = true;

  get inputHasChanged(): boolean {
    let data = false;
    if (this.userBis.firstname !== ''
        && this.userBis.lastname !== ''
        && this.userBis.email !== ''
        && this.userBis.password !== ''
        && this.userBis.confirmPassword !== ''
        && this.userBis.isParent !== false
    ) {
      data = true;
    }
    return data;
  }

  cancel() {
    this.userBis = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      isParent: false,
    };
  }

  private async submit() {
    try {
      const response = await registerApi.register(this.userBis);
      localStorage.setItem('JWT_ACCESS', response);
      localStorage.setItem('IS_SIGNED', 'true');
    } catch (err) {
      console.error(err);
    }
  }
  // logout
  // dans le router, beforeEnter, grâce IS_SIGNED je vas pouvoir savoir s'il faut être connecté
  // (ex: profile) sur tel ou tel page à l'inverse login pas besoin.
  // localStorage.removeItem('IS_SIGNED');
  // localstorage.removeItem('JWT_ACCESS'');
}
</script>
<style lang="scss">
// @import '../src/assets/_register.scss';
.register-page {
  display: grid;
  grid-template-columns: 30% auto 30%;
  background-color: #6f68ed;
  height: 100vh;
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
}
.register-title {
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
}
.buttons {
  display: grid;
  grid-template-columns: 20% 20%;
  grid-gap: 2em;
  grid-template-rows: 1fr;
}
.button-cancel {

}
.button-submit {
  justify-self: flex-end !important;
  background-color: #6f68ed !important;
  color: #fff !important;
}
.v-label {

}

.v-icon {
  font-size: 1rem;
}

</style>
