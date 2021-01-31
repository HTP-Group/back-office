<template>
  <div class="profile-page">
    <div class="profile-page-title">
      <h2 class="profile-page-title-h2">
        {{userBis.firstname}}
        {{userBis.lastname}}
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
        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
      </div>
        <v-list-item-content class="parent-infos">
          <v-list-item-title class="title">
            <h2 class="name">
              {{userBis.firstname}}
              {{userBis.lastname}}
            </h2>
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-label>Job: </v-label>{{userBis.job}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Number of Children: </v-label>{{userBis.childrenNumber}}
          </v-list-item-subtitle>
           <v-list-item-subtitle>
            <v-label>Children: </v-label>
             <router-link to="/profile/:id" class="b-link">
              {{userBis.children[0].firstname}} {{userBis.children[0].lastname}},
             </router-link>
             <router-link to="/profile/:id" class="b-link">
               {{userBis.children[1].firstname}} {{userBis.children[1].lastname}}
             </router-link>
          </v-list-item-subtitle>
           <v-list-item-subtitle>
            <v-label>Statut: </v-label>{{userBis.statut}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Adress: </v-label>
            {{userBis.adress}} - {{userBis.city}} - {{userBis.zipcode}} - {{userBis.state}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Phone: </v-label>{{userBis.phone}}
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
          v-model="userBis.statut"
          label="statut"
          prepend-icon='fa-users'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="userBis.adress"
          label="statut"
          prepend-icon='fa-map-marker-alt'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="userBis.city"
          label="statut"
          prepend-icon='fa-map-marker-alt'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="userBis.state"
          label="statut"
          prepend-icon='fa-map-marker-alt'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="userBis.zipcode"
          label="statut"
          prepend-icon='fa-map-marker-alt'
          append-icon="fa-pen"
          ></v-text-field>
          <v-text-field
          v-model="userBis.phone"
          label="statut"
          prepend-icon='fa-mobile'
          append-icon="fa-pen"
          ></v-text-field>
        </div>
         <div class="buttons btn-user-infos">
          <v-btn class="btn-cancel">cancel</v-btn>
          <v-btn class="btn-submit">Save</v-btn>
        </div>
      </div>
      <div class="password-infos">
        <div class="password-title">
          <h2 class="password-title-h2">Password settings</h2>
        </div>
        <div class="user-password">
          <v-text-field
            v-model="newPassword"
            label="current password"
            :append-icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
            prepend-icon="fa-key"
            :readonly="true"
            :type="showPassword ? 'password' : 'type'"
            @click:append="showPassword = !showPassword"
            @keyup.enter="logIn"
          ></v-text-field>
          <v-text-field
            v-model="newPassword"
            label="new password"
            :append-icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
            prepend-icon="fa-key"
            :type="showPassword ? 'password' : 'type'"
            @click:append="showPassword = !showPassword"
            @keyup.enter="logIn"
          ></v-text-field>
          <v-text-field
            v-model="confirmNewPassword"
            label="new password"
            :append-icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
            prepend-icon="fa-key"
            :type="showPassword ? 'password' : 'type'"
            @click:append="showPassword = !showPassword"
            @keyup.enter="logIn"
          ></v-text-field>
        </div>
        <div class="buttons btn-password">
          <v-btn class="btn-cancel">cancel</v-btn>
          <v-btn class="btn-submit">Save</v-btn>
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
export default class Profile extends Vue {
  public userBis = {
    firstname: 'Marc',
    lastname: 'Obrien',
    job: 'Farmer',
    email: 'j.obrien@outlook.com',
    childrenNumber: 2,
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
    statut: 'Married',
    adress: '25 Avenue Victor Hugo',
    city: 'Paris',
    state: 'France',
    zipcode: '75116',
    phone: '+63344556677',
    password: '123456789',
  }

  public newPassword = '';

  public confirmNewPassword = '';

  public showPassword = false;

  public showConfirmPassword = false;
}
</script>

<style lang="scss">
@import '@/assets/_profile.scss';
</style>
