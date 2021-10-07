<template>
	<div class="pricing">
    <div class="title">
      <h2>Nos prestations de services</h2>
    </div>
    <div class="btns">
       <router-link
        class="btn accountability"
        to="/pricing/accountability">
        Comptabilite</router-link>
      <router-link class="btn social" to="/pricing/social">Social</router-link>
      <router-link class="btn fiscal" to="/pricing/fiscal">Fiscal</router-link>
      <router-link class="btn legal" to="/pricing/legal">Juridique</router-link>
      <router-link class="btn consulting" to="/pricing/consulting">Conseil</router-link>
    </div>
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
            </table>
    </table>
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
export default class PricingAdmin extends Vue {
	// public booleanName = false;
	// @Prop() public propsName!: boolean;
	public field = [
		'comptabilité',
		'Social',
		'Juridique',
		'Audit',

	]
}
</script>

<style lang='scss' scoped>
    /*
         @import '@/assets/scss/_base.scss';
         @import '@/assets/scss/layout/_layout.scss';
    */
	.pricing {
		display: grid;
		grid-template-rows: 5% 5% 80%;
		grid-gap: 2em;
		margin: .5em;
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
}
.btns {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 1em;
	text-align: center;
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
  background-color: #f8c3d0;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.28),
  -4px -2px 16px #ffffff;
}
.btn:hover {
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.68),
  -4px -2px 16px #ffffff;
}
.table-one {
  grid-row-start: 3;
  background-color: #f8c3d0;
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
  max-height: 55vh;
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
