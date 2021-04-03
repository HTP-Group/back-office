<template>
  <div class="classroom-page" @click="$emit('display-class')">
    <div class="classroom-infos">
      <div class="headers">
        <div class="header-lastname">
          <p class="lastname">Last Name</p>
        </div>
        <div class="header-firstname">
          <p class="firstname">First Name</p>
        </div>
        <div class="header-mark">
          <p class="mark">Mark</p>
        </div>
        <div class="header-comments">
          <p class="comments">Comments</p>
        </div>
        <div class="header-suggestions">
          <p class="suggestions">Suggestions</p>
        </div>
        <!-- <div class="header-edit"></div> -->
      </div>
      <!-- Il faut créér un composant Children à réutiliser dans Marks -->
      <div class="classroom-infos-student-content">
        <div class="student">
          <div class="student-lastname">
            <p>Decousus</p>
          </div>
          <div class="student-firstname">
            <p>Thibault</p>
          </div>
            <v-text-field class="student-mark"></v-text-field>
            <v-text-field class="student-comment"></v-text-field>
            <v-text-field class="student-suggestion"></v-text-field>
        </div>
        <div class="student">
          <div class="student-lastname">
            <p>Decousus</p>
          </div>
          <div class="student-firstname">
            <p>Kea</p>
          </div>
            <v-text-field class="student-mark"></v-text-field>
            <v-text-field class="student-comment"></v-text-field>
            <v-text-field class="student-suggestion"></v-text-field>
        </div>
      </div>
    </div>
    <!-- before edit -->
    <div v-if="!edit" class="classroom-settings">
      <v-btn>Edit</v-btn>
      <div></div>
      <v-btn>Delete</v-btn>
    </div>
    <!-- after edit -->
    <div v-else class="classroom-settings">
      <v-btn>Save</v-btn>
      <div></div>
      <v-btn>Delete</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IChildren } from '@/Interfaces/user/parent/IChildren.interface';

@Component({
  components: {},
})

export default class Classroom extends Vue {
  public search = '';

  public edit = false;

  public students: IChildren[] = [
    {
      id: 0,
      lastname: 'Thib',
      firstname: 'Do',
      level: '',
    },
    {
      id: 1,
      lastname: 'Karl',
      firstname: 'uyu',
      level: '',
    },
  ]

  public headers = [
    {
      id: 1,
      name: 'Present',
      discipline: 'French',
      date: '12-02-21',
    },
  ]
}
</script>
<style lang="scss">
.classroom-page {
  display: grid;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 rgba(111, 104, 237, 0.1);
  padding: 1em;
  .classroom-infos {
    display: grid;
    grid-gap: 1em;
    .headers {
      display: grid;
      grid-template-columns: 12% 16% 15% 27% 25%!important;
      grid-template-rows: 1fr;
      border-bottom: 2px solid rgb(111, 104, 237, 0.1);
      padding-bottom: 1em;
      .header-lastname {
        display: grid;
        .lastname {
          color: #262a3e;
          font-weight: 700;
          justify-self: flex-start;
        }
      }
      .header-firstname {
        display: grid;
        .firstname {
          color: #262a3e;
          font-weight: 700;
          align-self: center;
          justify-self: center;
        }
      }
      .header-mark {
        display: grid;
        .mark {
          color: #262a3e;
          font-weight: 700;
          align-self: center;
          justify-self: center;
        }
      }
      .header-comments {
        display: grid;
        .comments {
          color: #262a3e;
          font-weight: 700;
          align-self: center;
          justify-self: center;
        }
      }
      .header-suggestions {
        display: grid;
        .suggestions {
          color: #262a3e;
          font-weight: 700;
          align-self: center;
          justify-self: center;
        }
      }
    }
    .classroom-infos-student-content {
      display: grid;
      grid-gap: 1em;
      .student {
        display: grid;
        grid-template-columns: 15% 15% 15% 27% 25% !important;
        box-shadow: 0 0 4px 0 rgba(111, 104, 237, 0.1);
        height: 3.5em;
        .student-lastname {
            display: grid;
            font-weight: 500;
            align-self: center;
            justify-self: flex-start;
            padding-left: 0.5em;
        }
        .student-firstname {
          display: grid;
          font-weight: 500;
          align-self: center;
          justify-self: flex-start;
        }
      .student-mark {
        display: grid;
        font-weight: 500;
        align-self: start;
        justify-self: flex-start;
      }
      .student-comments {
          display: grid;
          font-weight: 500;
          align-self: start;
          justify-self: center;
        }
      .student-suggestions {
          display: grid;
          font-weight: 500;
          align-self: start;
          justify-self: center;
        }
      }
    }
  }
  .classroom-settings {
    display: grid;
    grid-template-columns: 20% auto 20%;
    margin-top: 2em;
    grid-gap: 1.5em;
  }
  .v-btn {
    border: none;
  }
}

</style>
