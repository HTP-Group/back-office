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
  background-color: #f8c3d0;
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
