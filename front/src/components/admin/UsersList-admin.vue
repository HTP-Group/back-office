<template>
  <div class="user-admin-page">
    <div class="title-page">
      <h1>Users List Admin</h1>
    </div>
    <div class="main-admin-page">
      <!-- v-for -->
      <!-- <v-table>
      </v-table> -->
      <div class="column firstname">
        <div class="column-title">
          <h3>Prénom</h3>
        </div>
        <div class="column-content">
          <p>Loremp ipsos</p>
        </div>
      </div>
      <div class="column lastname">
        <div class="column-title">
          <h3>Nom</h3>
        </div>
        <div class="column-content">
          <p>Loremp ipsos</p>
        </div>
      </div>
      <div class="column email">
        <div class="column-title">
          <h3>Email</h3>
        </div>
        <div class="column-content">
          <p>Loremp ipsos</p>
        </div>
      </div>
      <div class="column password">
        <div class="column-title">
          <h3>Mot de pass</h3>
        </div>
        <div class="column-content">
          <p>Loremp ipsos</p>
        </div>
      </div>
      <div class="column isAdmin">
        <div class="column-title">
          <h3>Role</h3>
        </div>
        <div class="column-content">
          <p>Loremp ipsos</p>
        </div>
      </div>
      <div class="column city">
        <div class="column-title">
          <h3>Cabinet</h3>
        </div>
        <div class="column-content">
          <p>Loremp ipsos</p>
        </div>
      </div>
      <div class="column job">
        <div class="column-title">
          <h3>Poste</h3>
        </div>
        <div class="column-content">
          <p>Loremp ipsos</p>
        </div>
      </div>
      <div class="column actions">
        <div class="column-title action-title">
          <h3>Actions</h3>
        </div>
        <div class="content">
          <div class="column-content">
            <button class="btn update" type="submit">Modifier</button>
          </div>
          <div class="column-content">
            <button class="btn delete" type="submit">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
    <div class="addCollab">
      <button class="btn add" type="submit" @click="addCollab()">Ajouter un collab</button>
    </div>
    <div v-if="addCollabForm" class="addCollabForm">
      <v-text-field
        label="first name"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        label="last name"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        type="email"
        label="email"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        :type="hideNewPassword ? 'password' : 'type'"
        label="password"
        :append-icon="hideNewPassword ? 'fa-eye-slash' : 'fa-eye'"
        class="user-input"
      ></v-text-field>
      <v-text-field
        :type="hideNewConfirmPassword ? 'password' : 'type'"
        label="confirmation"
        :append-icon="hideNewConfirmPassword ? 'fa-eye-slash' : 'fa-eye'"
        class="user-input"
      ></v-text-field>
      <v-text-field
        label="city"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
      <v-text-field
        label="job"
        append-icon="fa-pen"
        class="user-input"
      ></v-text-field>
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
// import componentNameImported from '';

@Component({
	components: {},
})
export default class UsersListAdmin extends Vue {
	// public booleanName = false;
	// @Prop() public propsName!: boolean;

  public addCollabForm = false;

  public addCollab() {
  	this.addCollabForm = !this.addCollabForm;
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
    .delete {
      background-color: #e21726;
      color: #fff;
    }
    .addCollabForm {
      margin: .5em;
      width: 30%;
      justify-self: center;
    }
  }
</style>
