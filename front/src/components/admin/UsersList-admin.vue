<template>
  <div class="user-admin-page">
    <div class="title-page">
      <h1>Users List Admin</h1>
    </div>
    <div
      v-for="(user, index) in usersList"
      :key="index"
	  class="main-admin-page"
	>
      <!-- v-for -->
      <div class="column firstname">
        <div class="column-title">
          <h3>Prénom</h3>
        </div>
        <div class="column-content">
          <v-text-field
            v-if="UserUpdateForm"
            v-model="userBis.firstname"
            label="firstname"
            append-icon="fa-pen"
            class="user-input"
          ></v-text-field>
          <p v-if="!UserUpdateForm">{{user.firstname}}</p>
        </div>
      </div>
      <div class="column lastname">
        <div class="column-title">
          <h3>Nom</h3>
        </div>
        <div class="column-content">
          <v-text-field
          v-if="UserUpdateForm"
            v-model="userBis.lastname"
            label="lastname"
            append-icon="fa-pen"
            class="user-input"
          ></v-text-field>
          <p v-if="!UserUpdateForm">{{user.lastname}}</p>
        </div>
      </div>
      <div class="column email">
        <div class="column-title">
          <h3>Email</h3>
        </div>
        <div class="column-content">
          <v-text-field
            v-if="UserUpdateForm"
            v-model="userBis.email"
            type="email"
            label="email"
            append-icon="fa-pen"
            class="user-input"
          ></v-text-field>
          <p v-if="!UserUpdateForm">{{user.email}}</p>
        </div>
      </div>
      <div class="column password">
        <div class="column-title">
          <h3>Mot de pass</h3>
        </div>
        <div class="column-content">
          <v-text-field
            v-if="UserUpdateForm"
            v-model="userBis.password"
            :type="hideNewPassword ? 'password' : 'type'"
            label="password"
            hint="At least 8 characters"
            class="user-input"
            :append-icon="hideNewPassword ? 'fa-eye-slash' : 'fa-eye'"
            @click:append="hideNewPassword = !hideNewPassword"
          ></v-text-field>
          <p v-if="!UserUpdateForm"></p>
        </div>
      </div>
      <div class="column isAdmin">
        <div class="column-title">
          <h3>Role</h3>
        </div>
        <div class="column-content">
         <v-text-field
          v-if="UserUpdateForm"
          v-model="userBis.isAdmin"
          label="role"
          append-icon='fa-pen'
          @click:append="hideNewConfirmPassword = !hideNewConfirmPassword"
          class="user-input"
        ></v-text-field>
        <p v-if="!UserUpdateForm">{{user.isAdmin}}</p>
        </div>
      </div>
      <div class="column city">
        <div class="column-title">
          <h3>Cabinet</h3>
        </div>
        <div class="column-content">
          <v-text-field
            v-if="UserUpdateForm"
            v-model="userBis.city"
            label="city"
            append-icon="fa-pen"
            class="user-input"
          ></v-text-field>
          <p v-if="!UserUpdateForm">{{user.city}}</p>
        </div>
      </div>
      <div class="column job">
        <div class="column-title">
          <h3>Poste</h3>
        </div>
        <div class="column-content">
          <v-text-field
            v-if="UserUpdateForm"
            v-model="userBis.job"
            label="job"
            append-icon="fa-pen"
            class="user-input"
          ></v-text-field>
          <p v-if="!UserUpdateForm">{{user.job}}</p>
        </div>
      </div>
      <div class="column actions">
        <div class="column-title action-title">
          <h3>Actions</h3>
        </div>
        <div class="content">
          <div class="column-content">
            <button
              v-if="!UserUpdateForm"
              class="btn update"
              type="submit"
              @click="displayUserUpdateForm">
              Modifier
            </button>
            <button
              v-if="UserUpdateForm"
              class="btn validate"
              type="submit"
              @click="updatedUser">
              Valider
            </button>
          </div>
          <div class="column-content">
            <button class="btn delete" type="submit">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="addCollabForm" class="addCollabForm">
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
      <button v-if="addCollabForm" type="submit" class="btn" @click="cancel">Annuler</button>
      <button v-if="addCollabForm" class="add btn" type="submit" @click="addCollab">Ajouter</button>
    </div>
    <div class="addCollab">
        <button
          v-if="!addCollabForm"
            class="btn add"
            type="submit"
            @click="displayAddCollabForm()"
          >
          Ajouter un collab
        </button>
      </div>
      <div v-if="UserUpdateForm" class="user-update">
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
/* eslint-disable */
import UserApi from '../../api/auth.api';
import { User } from '../../Interfaces/user/User.interface';
import { Users } from '../../Interfaces/user/Users.interface';

@Component({
	components: {},
})
export default class UsersListAdmin extends Vue {
  public addCollabForm = false;

  public UserUpdateForm = false;

  public user: User = {
  	firstname: '',
  	lastname: '',
  	email: '',
  	password: '',
  	confirmPassword: '',
  	isAdmin: false,
  	city: '',
  	job: '',
  }

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

  public users: Users[] = [];

  public confirmPassword = ''

  public hideNewPassword = false

  public hideNewConfirmPassword = false

  get inputHasChanged(): boolean {
  	let data = false;
  	if (!this.userBis) {
  		return false;
  	}
  	if (this.userBis.firstname !== ''
        && this.userBis.lastname !== ''
        && this.userBis.email !== ''
        && this.userBis.password !== ''
        && this.confirmPassword !== ''
        && this.userBis.isAdmin !== false
        && this.userBis.city !== ''
        && this.userBis.job !== ''
  	) {
  		data = true;
  	}
  	return data;
  }

  cancel() {
  	if (!this.userBis) {
  		return;
  	}
  	this.userBis = {
  		firstname: '',
  		lastname: '',
  		email: '',
  		password: '',
  		confirmPassword: '',
  		isAdmin: false,
  		city: '',
  		job: '',
  	};
  	this.confirmPassword = '';
  }

  public displayAddCollabForm() {
  	this.addCollabForm = !this.addCollabForm;
  }

  public displayUserUpdateForm() {
  	this.UserUpdateForm = !this.UserUpdateForm;
  }

  public async updatedUser() {
  	await UserApi.userUpdate(this.userBis);
  	this.UserUpdateForm = false;
  	this.init();
  }

  public cancelDisplayForm() {
  	this.addCollabForm = false;
  }

  public async addCollab() {
  	await UserApi.register(this.userBis);
  	this.addCollabForm = false;
  	this.init();
  }

  public async beforeMount() {
  	// console.log('test 0 - users', this.users);
  	this.init();
  	// console.log('test 1 - users', this.users);
  }

  get usersList(): Users[] {
  	if (this.users === undefined) {
  		return this.users;
  	}

  	return this.users;
  }

  public async init() {
  	this.users = await UserApi.users();
  	// console.log('je récupère les données et les stocks dans la variable users');
  	// console.log(this.users, 'test users');
  }
}
</script>

<style lang='scss' scoped>
    /*
         @import '@/assets/scss/_base.scss';
         @import '@/assets/scss/layout/_layout.scss';
    */
  .user-admin-page {
    display: grid;
    grid-template-rows: 3em 1fr;
    .title-page {
      text-align: center;
      padding: .5em;
    }
    .main-admin-page {
      background-color: #cfe2f3;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      margin: .5em;
      padding: .5em;
      border-radius: 12px;
      .column {
        padding: .5em 0 1.5em 0;
        display: grid;
        grid-gap: 1em;
      }
      .actions {
        .action-title {
          text-align: center;
        }
        .content {
          display: grid;
          grid-template-columns: 50% 50%;
        }
      }
    }
    .addCollab {
      justify-self: center;
    }
    .btn {
      width: 7em;
      padding: .5em;
      border-radius: 12px;
    }
    .add {
      background-color: #cfe2f3;
    }
    .update {
      background-color: #fd958d;
    }
    .validate {
      background-color: #00dffc;
    }
    .delete {
      background-color: #e21726;
      color: #fff;
    }
    .addCollabForm {
      margin: .5em;
      width: 30%;
      justify-self: center;
    }
    .icon {
      left: 15em;
      margin: .5em;
    }
    .user-input {
      width: 80%;
    }
  }
</style>
