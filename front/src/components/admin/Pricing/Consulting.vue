<template>
	<div class="pricing">
    <div class="title">
      <h2>Nos prestations de services</h2>
      <router-link to="/pricing-admin">
        <v-icon>fa-undo-alt</v-icon>
      </router-link>
    </div>
    <FieldMenu />
    <table class="table-one">
      <tr class="tr">
        <th class="nature nature-tr">Nature de la mission</th>
        <th class="label label-tr">Intitulé de la prestation</th>
        <th class="price price-tr">Prix - €</th>
        <th class="comments comments-tr">Commentaires</th>
      </tr>
      <table class="table-two">
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
          <td class="td">
              <th class="nature">Social</th>
              <th class="label">paramétrage des variables sociales</th>
              <th class="price">50 </th>
              <th class="comments">Attention de bien....</th>
          </td>
      </table>
    </table>
    <Menu v-if="isSignIn || user.isAdmin" @isAddPriceFormOpen="openAddForm"/>
    <AddForm v-if="isAddPriceFormOpen" @cancelDisplayForm="openAddForm"/>
  </div>
</template>

<script lang='ts'>
import {
	Component,
	Vue,
} from 'vue-property-decorator';
/* eslint-disable */
import UserApi from '../../../api/auth.api';
import { User } from '../../../Interfaces/user/User.interface';
import Menu from '../ButtonsMenu/ButtonsMenu.vue';
import FieldMenu from '../ButtonsMenu/FieldMenu.vue';
import AddForm from './AddForm.vue';

@Component({
	components: {
    FieldMenu,
    Menu,
    AddForm,
  },
})
export default class ConsultingPricingAdmin extends Vue {
	public field = [
		'comptabilité',
		'Social',
		'Juridique',
		'Audit',
	]

	public user: User = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		confirmPassword: '',
		isAdmin: false,
		city: '',
		job: '',
	}

	public isSignIn = false;

  public isAddPriceFormOpen = false;
  
  public openAddForm() {
    this.isAddPriceFormOpen = !this.isAddPriceFormOpen;
  }

	public async mounted() {
		const userFetched = await UserApi.user();
		this.user = userFetched;
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
		grid-template-rows: 3em 3em 80%;
		grid-gap: 2em;
		margin: .5em;
    height: 69vh;
		.title {
            display: grid;
            grid-template-columns: 98% 2%;
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
}
.btns {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 1em;
  text-align: center;
  height: 3em;
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
  border-radius: 18px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.28),
  -4px -2px 16px #ffffff;
}
.btn:hover {
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.68),
  -4px -2px 16px #ffffff;
}
.table-one {
  grid-row-start: 3;
  background-color: #cfe2f3;
  display: grid;
  border-radius: 18px;
  .tr {
    padding: 1em 1em 0 1em;
    border-top-right-radius: 18px;
    border-top-left-radius: 18px;
  }
  .nature {
    background-color: #fff;
    padding: 1.5em;
    width: 470px;
  }
  .nature-tr {
    border-top-left-radius: 18px;
  }
  .label {
    background-color: #fff;
    width: 470px;
  }
  .price {
    background-color: #fff;
    width: 450px;
  }
  .comments {
    background-color: #fff;
    width: 450px;
  }
  .comments-tr {
    border-top-right-radius: 18px;
  }
}
.table-two {
  display: grid;
  overflow-y: scroll;
  /* max-height: 55vh; */
  grid-gap: .5em;
  .td {
    padding: 0 1em 1em 1em;
    border-radius: 18px;
  }
  .nature {
    background-color: #fff;
    padding: 1.5em;
    width: 470px;
  }
  .nature-tr {
    border-top-left-radius: 18px;
  }
  .label {
    background-color: #fff;
    width: 470px;
  }
  .price {
    background-color: #fff;
    width: 450px;
  }
  .comments {
    background-color: #fff;
    width: 450px;
  }
  .comments-tr {
    border-top-right-radius: 18px;
  }
}
.buttons {
	height: 3em;
	width: 50%;
	justify-self: center;
	background-color: rgba(209, 230, 248, 0.5);
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
