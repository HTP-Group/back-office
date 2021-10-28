<template>
  <div class="user-admin-page">
    <div class="title-page">
      <h1>Users List Admin</h1>
    </div>
    <div class="main-admin-page">
      <div class="column firstname">
        <div class="column-title">
          <h3>Prénom</h3>
        </div>
      </div>
      <div class="column lastname">
        <div class="column-title">
          <h3>Nom</h3>
        </div>
      </div>
      <div class="column email">
        <div class="column-title">
          <h3>email</h3>
        </div>
      </div>
       <div class="column password">
        <div class="column-title">
          <h3>mdp</h3>
        </div>
      </div>
      <div class="column role">
        <div class="column-title">
          <h3>role</h3>
        </div>
      </div>
      <div class="column cabinet">
        <div class="column-title">
          <h3>Cabinet</h3>
        </div>
      </div>
       <div class="column job">
        <div class="column-title">
          <h3>Poste</h3>
        </div>
      </div>
    </div>
    <div class="users">
        <Collab
          v-for="(user, index) in usersList"
          :key="index"
          :collab="user"
        />
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
    <div v-if="UserUpdateForm" class="user-update"></div>
    <AddForm
      v-if="addCollabForm"
      @cancelAddCollab="cancelDisplayForm"
      @addCollab="addCollab"
    />
  </div>
</template>

<script lang='ts'>
/* eslint-disable */
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import Collab from './Collab.vue';
import AddForm from './AddCollabForm.vue';
import UserApi from '../../../api/auth.api';
import { User } from '../../../Interfaces/user/User.interface';
// import { Users } from '../../../Interfaces/user/Users.interface';

@Component({
  components: {
    Collab,
    AddForm,
  },
})
export default class UsersList extends Vue {
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

  public users: User[] = [];

  public confirmPassword = ''

  public hideNewPassword = false

  public hideNewConfirmPassword = false

  public addCollabForm = false;

  public UserUpdateForm = false;


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
    this.addCollabForm = false;
  	this.init();
  }

  public async beforeMount() {
  	// console.log('test 0 - users', this.users);
  	this.init();
  	// console.log('test 1 - users', this.users);
  }

  get usersList(): User[] {
  	if (this.users === undefined) {
  		return this.users;
  	}

  	return this.users;
  }

  public async init() {
  	this.users = await UserApi.users();
  }
}
</script>

<style lang='scss' scoped>
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
