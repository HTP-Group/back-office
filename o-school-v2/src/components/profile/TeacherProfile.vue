<template>
  <div class="profile-page">
    <div class="profile-page-title">
      <h2 class="profile-page-title-h2">
        {{ userBis.firstname }} - {{ userBis.lastname }}</h2>
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
          {{ userBis.firstname }} - {{ userBis.lastname }}
          </h2>
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-label>Job: </v-label>
          {{userBis.job}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-label>Level: </v-label>
          {{userBis.class.level}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-label>Class name: </v-label>
          {{userBis.class.name}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-label>Number of Children: </v-label>
          {{userBis.class.childrenNumber}}
        </v-list-item-subtitle>
          <v-list-item-subtitle>
          <v-label>Children: </v-label>
            <router-link to="/trombinoscope/" class="b-link">
            Trombinoscop link
            </router-link>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-label>Adress: </v-label>
        {{ userBis.city }} - {{ userBis.zipcode }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-label>Email: </v-label>{{ userBis.email }}
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
          v-model="userBis.level"
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
          v-model="userBis.class.childrenNumber"
          label="Number of Children"
          prepend-icon='fa-users'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="userBis.class.name"
          label="Class name"
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
          <v-btn class="btn btn-cancel">cancel</v-btn>
          <v-btn class="btn btn-submit save-btn">Save</v-btn>
        </div>
      </div>
       <div class="password-infos">
        <div class="password-title">
          <h2 class="password-title-h2">Password settings</h2>
        </div>
        <div class="user-password">
        <v-text-field
            v-model="userBis.password"
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
            <v-btn class="btn-cancel">cancel</v-btn>
            <v-btn class="btn-submit save-btn">Save</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TeacherProfil extends Vue {
  public userBis = {
    firstname: 'katy',
    lastname: 'Smith',
    job: 'Teacher',
    email: 'k.smith@outlook.com',
    class: {
      level: '3rd grade',
      name: '3rd grade A',
      childrenNumber: 25,
      children: [
        {
          firstname: 'Karl',
          lastname: 'Obrien',
          level: '8',
          healthIndications: '',
        },
        {
          firstname: 'Betty',
          lastname: 'Obrien',
          level: '10',
          healthIndications: 'do not drink milk',
        },
      ],
    },
    adress: '25 Avenue Victor Hugo',
    city: 'Paris',
    state: 'France',
    zipcode: '75116',
    phone: '+63344556677',
    password: '123456789',
    hobbies: [
      'Diving',
      'Hiking',
    ],
  }

  public newPassword = '';

  public confirmPassword = '';

  public hideCurrentPassword = true;

  public hidePassword = true;

  public hideConfirmPassword = true;
}
</script>

<style lang="scss">
@import './src/assets/_profile.scss';
.save-btn {
  justify-self: end;
  width: 85%;
}
</style>
