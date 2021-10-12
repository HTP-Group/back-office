<template>
  <div class="user">
		<div class="column-content">
			<v-text-field
				v-if="UserUpdateForm"
				v-model="userBis.firstname"
				label="firstname"
				append-icon="fa-pen"
				class="user-input"
			></v-text-field>
			<p v-if="!UserUpdateForm">{{collab.firstname}}</p>
		</div>
		<div class="column-content">
			<v-text-field
			v-if="UserUpdateForm"
				v-model="userBis.lastname"
				label="lastname"
				append-icon="fa-pen"
				class="user-input"
			></v-text-field>
			<p v-if="!UserUpdateForm">{{collab.lastname}}</p>
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
			<p v-if="!UserUpdateForm">{{collab.email}}</p>
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
		<div class="column-content">
			<v-text-field
				v-if="UserUpdateForm"
				v-model="userBis.isAdmin"
				label="role"
				append-icon='fa-pen'
				@click:append="hideNewConfirmPassword = !hideNewConfirmPassword"
				class="user-input"
			></v-text-field>
			<p v-if="!UserUpdateForm">{{collab.isAdmin ? 'Adminstrateur' : 'utilisateur'}}</p>
		</div>
		<div class="column-content">
			<v-text-field
				v-if="UserUpdateForm"
				v-model="userBis.city"
				label="city"
				append-icon="fa-pen"
				class="user-input"
			></v-text-field>
			<p v-if="!UserUpdateForm">{{collab.city}}</p>
		</div>
		<div class="column-content">
			<v-text-field
				v-if="UserUpdateForm"
				v-model="userBis.job"
				label="job"
				append-icon="fa-pen"
				class="user-input"
			></v-text-field>
			<p v-if="!UserUpdateForm">{{collab.job}}</p>
		</div>
		<div class="column actions">
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
</template>

<script lang='ts'>
/* eslint-disable */
import {
	Component,
	Prop,
	Vue,

} from 'vue-property-decorator';
import { User } from '../../../Interfaces/user/User.interface';
import UserApi from '../../../api/auth.api';

@Component({
	components: {},
})
export default class Collab extends Vue {
	@Prop() collab!: User;

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

	public UserUpdateForm = false;

	public confirmPassword = ''

  public hideNewPassword = false

  public hideNewConfirmPassword = false

	public userUpdateForm = false;
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
	public displayUserUpdateForm() {
  	this.UserUpdateForm = !this.UserUpdateForm;
  }

  public async updatedUser() {
  	await UserApi.userUpdate(this.userBis);
  	this.UserUpdateForm = false;
		console.log(this.collab)
  	// this.init(); this$emit('refresh') => init
  }
}
</script>

<style lang='scss' scoped>
.user {
	display: grid;
	grid-template-rows: 3em 1fr;
	grid-template-columns: repeat(8, 1fr);
	margin: .5em;
  padding: .5em;
	border-radius: 12px;
	grid-gap: 1em;
	/* background-color: #cfe2f3; */
	box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.28),
		-4px -2px 16px #ffffff;
	.actions {
		display: grid;
		.action-title {
			text-align: center;
		}
		.content {
			display: grid;
			grid-template-columns: 50% 50%;
			align-self: center !important;
			justify-self: center;
			text-align: center;
			grid-gap: 1em;
			margin: 0 .5em 0 0;
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
		width: 100%;
	}
	.user:hover {
		background-color: #cfe2f3;
	}
</style>
