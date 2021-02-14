<template>
  <div class="profile-page">
    <div class="profile-page-title">
      <h2 class="profile-page-title-h2">
        {{userBis.children[1].firstname}}
        {{userBis.children[1].lastname}}
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
        <v-img src="" alt="photo"></v-img>
        </v-avatar>
      </div>
        <v-list-item-content class="parent-infos">
          <v-list-item-title class="title">
            <h2 class="name">
              {{userBis.children[1].firstname}}
              {{userBis.children[1].lastname}}
            </h2>
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-label>Birthday: </v-label>{{userBis.children[1].birthday}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Level: </v-label>{{userBis.children[1].level}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Health: </v-label>{{userBis.children[1].healthIndications}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Parents: </v-label>
             <router-link to="/profile/:id" class="b-link">
              {{ userBis.firstname }} {{userBis.lastname}},
             </router-link>
             <router-link to="/profile/:id" class="b-link">
               {{userBis.partner.firstname}} {{userBis.partner.lastname}}
             </router-link>
          </v-list-item-subtitle>
           <v-list-item-subtitle>
            <v-label>Brotherhood: </v-label>
             <router-link to="/profile/:id" class="b-link">
              {{userBis.children[0].firstname}} {{userBis.children[0].lastname}},
             </router-link>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Adress: </v-label>
            {{userBis.adress}} - {{userBis.city}} - {{userBis.zipcode}} - {{userBis.state}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-label>Phone: </v-label>{{userBis.phone}}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <router-link to="/dashboard" class="b-link b-edit">
              <v-btn class="edit-btn">EDIT</v-btn>
            </router-link>
          </v-list-item-subtitle>
        </v-list-item-content>
    </div>
    <div class="profile-right-bloc children-board">
      <div class="events-bloc">
        <v-icon
        style="font-size: medium; color: #434f8d !important">
        fa-exclamation-circle
      </v-icon>
      <p class="events">Events :</p>
      </div>
      <div class="dashbord-student">
        <div class="disciplines">
            <v-select
              v-model="disciplines"
              :items="disciplines"
              label="Disciplines"
            ></v-select>
        </div>
        <div class="sections">
          <div class="marks-bloc bloc">
            <v-btn class="sub-section">Marks</v-btn>
          </div>
          <div class="comments-bloc bloc">
            <v-btn class="sub-section">Comments</v-btn>
          </div>
          <div class="graphs-bloc bloc">
            <v-btn class="sub-section">Graph</v-btn>
          </div>
        </div>
      </div>
      <div class="components">
        <Marks />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Marks from './childrenProfile/Marks.vue';

@Component({
  components: {
    Marks,
  },
})
export default class Profile extends Vue {
  // renommé le typage de l'objet avec le nom de l'interface créé IUser
  public userBis: object = {
    firstname: 'Marc',
    lastname: 'Obrien',
    job: 'Farmer',
    email: 'j.obrien@outlook.com',
    childrenNumber: 2,
    children: [
      {
        firstname: 'Karl',
        lastname: 'Obrien',
        level: '1',
        healthIndications: '',
        birthday: '12/02/2007',
      },
      {
        firstname: 'Betty',
        lastname: 'Obrien',
        level: '3',
        healthIndications: 'do not drink milk',
        birthday: '12/02/2009',
      },
    ],
    statut: 'Married',
    partner: {
      profileId: '..',
      firstname: 'Sam',
      lastname: 'Obrien',
    },
    adress: '25 Avenue Victor Hugo',
    city: 'Paris',
    state: 'France',
    zipcode: '75116',
    phone: '+63344556677',
    password: '123456789',
  }

  public disciplines: object = [
    {
      id: 0,
      name: 'French',
    },
    {
      id: 1,
      name: 'Maths',
    },
    {
      id: 2,
      name: 'Other Languages',
    },
    {
      id: 3,
      name: 'Sport Education',
    },
    {
      id: 4,
      name: 'Art',
    },
    {
      id: 5,
      name: 'Civic Education',
    },
    {
      id: 6,
      name: 'World Questionning',
    },
  ]

  public newPassword = '';

  public confirmNewPassword = '';

  public showPassword = false;

  public showConfirmPassword = false;
}
</script>

<style lang="scss">
@import '@/assets/_profile.scss';
</style>
