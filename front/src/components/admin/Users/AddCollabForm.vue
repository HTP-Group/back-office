<template>
  <div class="addCollabForm">
      <v-icon class="icon" @click="cancelDisplayForm">fa-times</v-icon>
      <v-text-field
        v-model="userBis.firstname"
        label="firstname"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        v-model="userBis.lastname"
        label="lastname"
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
        hint="At least 8 characters"
        :append-icon="hideNewPassword ? 'fa-eye-slash' : 'fa-eye'"
        class="user-input"
        @click:append="hideNewPassword = !hideNewPassword"
      ></v-text-field>
      <v-text-field
        v-model="userBis.confirmPassword"
        :type="hideNewConfirmPassword ? 'password' : 'type'"
        label="confirmation"
        :append-icon="hideNewConfirmPassword ? 'fa-eye-slash' : 'fa-eye'"
        @click:append="hideNewConfirmPassword = !hideNewConfirmPassword"
        class="user-input"
      ></v-text-field>
      <v-text-field
        v-model="userBis.isAdmin"
        label="role"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        v-model="userBis.city"
        label="city"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        v-model="userBis.job"
        label="job"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <button class="cancel btn" type="submit"  @click="cancelDisplayForm">Annuler</button>
      <button class="add btn" type="submit" @click="addCollab">Ajouter</button>
    </div>
</template>

<script lang='ts'>
/* eslint-disable */
import {
  Component,
  Vue,
  Prop
} from 'vue-property-decorator';
import { User } from '../../../Interfaces/user/User.interface';
import UserApi from '../../../api/auth.api';

@Component({
  components: {},
})
export default class AddCollabForm extends Vue {
@Prop() addCollabForm!: boolean;

  public confirmPassword = ''

  public hideNewPassword = false

  public hideNewConfirmPassword = false

  public userBis: User = {
  	firstname: '',
  	lastname: '',
  	email: '',
  	password: '',
  	confirmPassword: '',
  	isAdmin: false,
  	city: '',
  	job: '',
  }

  public cancelDisplayForm() {
    this.$emit('cancelAddCollab')
  }

  public async addCollab() {
  	await UserApi.register(this.userBis);
    this.$emit('addCollab');
  }

}
</script>

<style lang='scss' scoped>
.addCollabForm {
  border: 30px solid #cfe2f3;
  background-color: #a3d4ff;
  border-radius: 12px;
  position: fixed;
  top: 12em;
  padding: .5em;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.28),
		-4px -2px 16px #ffffff;
}
  .btn {
    padding: .5em;
    border-radius: 12px;
    width: 45%;
  }
  .add {
    border: 3px solid #fff;
    color: #fff;
    font-weight: bolder;
  }
  .add:hover {
    background-color: #fff;
    color: #b1d6f7;
    font-weight: bold;
  }
  .cancel {
    background-color: #fff;
    margin-right: .5em;
    color: #b1d6f7;
    font-weight: bold;
  }
  .icon {
    left: 18em;
    padding: .5em;
  }
  .icon:hover {
    background-color: #fff;
    border-radius: 50%;
    padding: .5em;
  }
  .user-input {
    width: 90%;
  }
</style>
