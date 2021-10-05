<template>
  <div v-if="parentInfos && userBis" class="profile-page">
    <div class="profile-page-title">
      <h2 class="profile-page-title-h2">
        {{parentInfos.firstname}}
        {{parentInfos.lastname}}
      </h2>
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
        <v-list-item-content class="parent-infos">
          <v-list-item-title class="title">
            <h2 class="name">
              {{parentInfos.firstname}}
              {{parentInfos.lastname}}
            </h2>
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-label>Job: </v-label>{{parentInfos.job}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Number of Children: </v-label>{{parentInfos.childrenNumber}}
          </v-list-item-subtitle>
           <v-list-item-subtitle>
            <v-label>Children: </v-label>
             <!-- <router-link to="/profile/:id" class="b-link">
              {{parentInfos.children[0].firstname}} {{parentInfos.children[0].lastname}},
             </router-link>
             <router-link to="/profile/:id" class="b-link">
               {{parentInfos.children[1].firstname}} {{parentInfos.children[1].lastname}}
             </router-link> -->
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Adress: </v-label>
            {{parentInfos.adress}} - {{parentInfos.city}} -
            {{parentInfos.zipcode}} - {{parentInfos.state}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Phone: </v-label>{{parentInfos.phone}}
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
            v-model="userBis.firstname"
            label="First name"
            prepend-icon='fa-user'
            append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
            v-model="userBis.lastname"
            label="Last name"
            prepend-icon='fa-user'
            append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
            v-model="userBis.job"
            label="Job"
            prepend-icon='fa-user-tie'
            append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
            v-model="userBis.email"
            label="Email"
            prepend-icon='fa-envelope'
            append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
            v-model="userBis.childrenNumber"
            label="Number of Children"
            prepend-icon='fa-users'
            append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
            v-model="userBis.adress"
            label="Address"
            prepend-icon='fa-map-marker-alt'
            append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
            v-model="userBis.city"
            label="City"
            prepend-icon='fa-map-marker-alt'
            append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
            v-model="userBis.state"
            label="State"
            prepend-icon='fa-map-marker-alt'
            append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
            v-model="userBis.zipcode"
            label="Zip code"
            prepend-icon='fa-map-marker-alt'
            append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
            v-model="userBis.phone"
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
        <div class="user-password">
          <v-text-field
            v-model="parentInfos.password"
            label="current password"
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
            label="confirm password"
            :append-icon="hideConfirmPassword ? 'fa-eye-slash' : 'fa-eye'"
            prepend-icon="fa-key"
            :type="hideConfirmPassword ? 'type' : 'password'"
            @click:append="hideConfirmPassword = !hideConfirmPassword"
            @keyup.enter="logIn"
          ></v-text-field>
          <div class="btn-user-infos-password">
            <v-btn class="btn-cancel" @click="cancel()">cancel</v-btn>
            <v-btn class="btn-submit save-btn" @click="savePassword()">Save</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import { User } from '../../Interfaces/user/User';
import profileApi from '../../api/profile.api';

@Component({
  components: {},
})
export default class Profile extends Vue {
  @Prop() parentInfos!: User;

  public userBis: User | null = null;

  public newPassword = '';

  public confirmPassword = '';

  public hideCurrentPassword = true;

  public hidePassword = true;

  public hideConfirmPassword = true;

  mounted() {
    console.log('parent-profile', this.parentInfos);
    this.userBis = { ...this.parentInfos };
    //
  }

  public async save() {
    if (!this.userBis) {
      return;
    }
    //  update_me
    console.log('save');
    this.userBis._id = this.parentInfos._id;

    await profileApi.updateMe(this.userBis);
    this.$emit('refresh-profile');
  }

  @Watch('parentInfos')
  onParentInfosChange() {
    console.log('watch');
    this.userBis = { ...this.parentInfos };
  }

  // password bloc
  // public async savePassword() {
  //   // call api update_password()
  //   console.log('savePassword');
  // }

  // generic function
  // public cancel() {
  //   console.log('cancel');
  // }
}
</script>

<style lang="scss">
@import '@/assets/_profile.scss';
.save-btn {
  justify-self: end;
  width: 85%;
}
</style>
