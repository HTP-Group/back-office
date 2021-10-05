<template>
  <div class="profile-page">
    <div class="profile-page-title">
      <h2 class="profile-page-title-h2">
        {{ teacherInfos.firstname }} - {{ teacherInfos.lastname }}</h2>
    </div>
    <div class="profile-left-bloc">
      <div class="avatar">
        <v-avatar
          class="profile"
          color="grey"
          size="164"
          tile
        >
        <v-img src=""></v-img>
        </v-avatar>
      </div>
      <v-list-item-content class="teacher-infos">
        <v-list-item-title class="title">
          <h2 class="name">
          {{ teacherInfos.firstname }} - {{ teacherInfos.lastname }}
          </h2>
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-label>Job: </v-label>
          {{teacherInfos.job}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-label>Level: </v-label>
          {{teacherInfos.level}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-label>Class name: </v-label>
          <!-- {{teacherInfos.class.name}} -->
        </v-list-item-subtitle>
        <!-- <v-list-item-subtitle>
          <v-label>Number of Children: </v-label>
          {{teacherInfos.class.students.length}}
        </v-list-item-subtitle> -->
          <v-list-item-subtitle>
          <v-label>Children: </v-label>
            <router-link to="/trombinoscope/" class="b-link">
            Trombinoscop link
            </router-link>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-label>Adress: </v-label>
        {{ teacherInfos.city }} - {{ teacherInfos.zipcode }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-label>Email: </v-label>{{ teacherInfos.email }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </div>
    <div class="profile-right-bloc">
      <div class="user-infos">
        <div class="user-infos-title">
          <h2 class="user-infos-title-h2">General Informations</h2>
        </div>
        <div class="user-inputs">
          <v-text-field
          v-model="teacherInfos.firstname"
          label="First name"
          prepend-icon='fa-user'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="teacherInfos.lastname"
          label="Last name"
          prepend-icon='fa-user'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="teacherInfos.level"
          label="Job"
          prepend-icon='fa-user-tie'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="teacherInfos.email"
          label="Email"
          prepend-icon='fa-envelope'
          append-icon="fa-pen"
          ></v-text-field>
          <!-- <v-text-field
          v-model="teacherInfos.class.students.length"
          label="Number of Children"
          prepend-icon='fa-users'
          append-icon="fa-pen"
          ></v-text-field> -->
          <!-- <v-text-field
          v-model="teacherInfos.class.name"
          label="Class name"
          prepend-icon='fa-users'
          append-icon="fa-pen"
          ></v-text-field> -->
          <v-text-field
          v-model="teacherInfos.adress"
          label="Address"
          prepend-icon='fa-map-marker-alt'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="teacherInfos.city"
          label="City"
          prepend-icon='fa-map-marker-alt'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="teacherInfos.state"
          label="State"
          prepend-icon='fa-map-marker-alt'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="teacherInfos.zipcode"
          label="Zip code"
          prepend-icon='fa-map-marker-alt'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="teacherInfos.phone"
          label="Phone"
          prepend-icon='fa-mobile'
          append-icon="fa-pen"
          ></v-text-field>
        </div>
         <div class="btn-user-infos">
          <v-btn class="btn btn-cancel" @click="cancel()">cancel</v-btn>
          <v-btn class="btn btn-submit save-btn" @click="save()">Save</v-btn>
        </div>
      </div>
       <div class="password-infos">
        <div class="password-title">
          <h2 class="password-title-h2">Password settings</h2>
        </div>
        <div class="user-password" v-if="updatePassword">
        <v-text-field
            v-model="teacherInfos.password"
            label="current password"
            :append-icon="hideCurrentPassword ? 'fa-eye-slash' : 'fa-eye-slash'"
            prepend-icon="fa-key"
            :readonly="true"
            type="password"
            @click:append="hideCurrentPassword = !hideCurrentPassword"
          ></v-text-field>
          <v-text-field
            v-model="newPassword"
            label="new password"
            :append-icon="hidePassword ? 'fa-eye' : 'fa-eye-slash'"
            prepend-icon="fa-key"
            :type="hidePassword ? 'password' : 'type'"
            @click:append="hidePassword = !hidePassword"
            @keyup.enter="logIn"
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            label="new password"
            :append-icon="confirmPassword ? 'fa-eye-slash' : 'fa-eye'"
            prepend-icon="fa-key"
            :type="hideConfirmPassword ? 'type' : 'password'"
            @click:append="hideConfirmPassword = !hideConfirmPassword"
            @keyup.enter="logIn"
          ></v-text-field>
          <div class="btn-user-infos-password">
            <v-btn
              class="btn-cancel"
              @click="cancel()">cancel
            </v-btn>
            <v-btn
              class="btn-submit save-btn"
              :disabled="!passwordHasChanged"
              @click="savePassword()">Save
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Teacher } from '../../Interfaces/user/teacher/Teacher.interface';

@Component({
  components: {},
})
export default class TeacherProfil extends Vue {
  @Prop() teacherInfos!: Teacher;

  public userBis = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    isParent: false,
    adress: '',
    class: [],
    city: '',
    discipline: '',
    job: '',
    level: '',
    phone: '',
    state: '',
    zipcode: '',
  }

  public newPassword = '';

  public confirmPassword = '';

  public currentPassword = '';

  public hideCurrentPassword = true;

  public hidePassword = true;

  public hideConfirmPassword = true;

  public editPassword = false;

  get passwordHasChanged(): boolean {
    return (this.currentPassword !== ''
      && this.currentPassword !== this.confirmPassword
      && this.newPassword === this.confirmPassword
      && this.confirmPassword.length >= 8);
  }

  public mounted() {
    console.log('teacher-profile', this.teacherInfos);
  }

  public async save() {
    //  update_me
    console.log('save');
  }

  // password bloc
  public async savePassword() {
    const data = {
      id: this.teacherInfos.id,
      password: this.confirmPassword,
      currentPassword: this.currentPassword,
    };

    if (this.newPassword === this.confirmPassword
    && this.teacherInfos.password !== this.newPassword) {
      this.userBis.password = this.newPassword;
    }
    // try {} catch (err) {
    //   console.error(err);
    // }
    // call api update_password()
    console.log('save_password');
  }

  // public async init() {}

  public reset() {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  public updatePassword() {
    this.editPassword = !this.editPassword;
  }

  // generic function
  // public cancel() {
  //   console.log('cancel');
  // }
}
</script>

<style lang="scss">
@import './src/assets/_profile.scss';
.save-btn {
  justify-self: end;
  width: 85%;
}
</style>
