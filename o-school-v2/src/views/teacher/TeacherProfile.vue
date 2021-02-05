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
        <v-list-item-content class="teacher-infos">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TeacherProfil extends Vue {

}
</script>

<style lang="scss">

</style>
