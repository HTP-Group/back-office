<template>
	<div class="pricing">
    <div class="title">
      <h2>Nos prestations de services</h2>
    </div>
    <div class="btns">
      <router-link class="btn accountability" to="/comptabilite-pricing-admin">
        <div class="title-btn">
          <h3>Comptabilité</h3>
        </div>
      </router-link>
      <router-link class="btn social" to="/social-pricing-admin">
        <div class="title-btn">
          <h3>Social</h3>
        </div>
      </router-link>
      <router-link class="btn fiscal" to="/fiscal-pricing-admin">
        <div class="title-btn">
          <h3>Fiscal</h3>
        </div></router-link>
      <router-link class="btn legal" to="/legal-pricing-admin">
        <div class="title-btn">
          <h3>Juridique</h3>
        </div>
      </router-link>
      <router-link class="btn consulting" to="/consulting-pricing-admin">
        <div class="title-btn">
          <h3>Conseil</h3>
        </div>
      </router-link>
      <div class=" btn add-price" @click="openAddForm">
          <v-icon size="68" color="#00dffc">fa-plus</v-icon>
      </div>
    </div>
    <div v-if="isAddPriceFormOpen && isSignInAsAdmin" class="add-price-form">
        <v-text-field
            class="user-input"
            label="nature"
        ></v-text-field>
        <v-text-field
            class="user-input"
            label="title"
        ></v-text-field>
        <v-text-field
            class="user-input"
            label="price"
        ></v-text-field>
        <v-text-field
            class="user-input"
            label="comments"
        ></v-text-field>
    </div>
  </div>
</template>

<script lang='ts'>
import {
	Component,
	Vue,
} from 'vue-property-decorator';
/* eslint-disable */
import {
	IS_SIGNED,
	JWT_ACCESS,
} from '../../../constants';
import UserApi from '../../../api/auth.api';

@Component({
	components: {},
})
export default class PricingAdmin extends Vue {
	public field = [
		'comptabilité',
		'Social',
		'Juridique',
		'Audit',
	]

    public currentUserBis = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAdmin: false,
        city: '',
        job: '',
    }

    public isSignInAsAdmin = false;

    public isAddPriceFormOpen = false;

     public async mounted() {
        // récupère le token
        localStorage.getItem(`${JWT_ACCESS}`);

        const user = await UserApi.user();
        if (user.isAdmin && localStorage.getItem(IS_SIGNED)) {
            this.currentUserBis.isAdmin = true;
            this.isSignInAsAdmin = true;
        } else {
            this.currentUserBis.isAdmin = false;
        }
    }

    public openAddForm() {
    	this.isAddPriceFormOpen = !this.isAddPriceFormOpen;
    }
}
</script>

<style lang='scss' scoped>
    /*
         @import '@/assets/scss/_base.scss';
         @import '@/assets/scss/layout/_layout.scss';
    */
	.pricing {
		display: grid;
		grid-template-rows: 3em 2fr;
		grid-gap: 2em;
		margin: .5em;
        height: 69vh;
		.title {
			margin: 1em;
			grid-row-start: 1;
			text-align: center;
		}
	}
a {
  text-decoration: none;
  color: black;
  padding: 1em;
  font-weight: 600;
  text-align: center;
  justify-self: center;
}
.btns {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 1em;
	text-align: center;
  height: 100%;
  width: 100%;
  .social {
    background-color: #f8c3d0;
  }
  .legal {
    background-color: #fce5cd;
  }
  .consulting {
    background-color: #cfe2f3;
  }
  .fiscal {
    background-color: #bdf7fe;
  }
  .accountability {
    background-color: #00dffc;
    color: #fff;
  }
}
.btn {
	justify-self: center;
  text-align: center;
  border-radius: 18px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.68),
  -4px -2px 16px #ffffff;
  display: grid;
  .title-btn {
    display: grid;
    h3 {
      align-self: center;
    }
  }
}
.btn:hover {
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.98),
  -4px -2px 16px #ffffff;
}
.add-price {
    display: grid;
    border: 5px solid #00dffc;
  }
.add-price-form {
    justify-self: center;
}
.user-input {
    width: 80%;
}

::-webkit-scrollbar {
  width: 10px;
  padding: 0 0.5em;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 12px rgb(136, 165, 191);
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background: rgb(136, 165, 191);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(136, 165, 191);
}
</style>
