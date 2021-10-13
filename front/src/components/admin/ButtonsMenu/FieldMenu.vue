<template>
  <div class="btns">
		<router-link
			class="btn accountability"
			to="/comptabilite-pricing-admin">
			Comptabilite</router-link>
		<router-link class="btn social" to="/social-pricing-admin">Social</router-link>
		<router-link class="btn fiscal" to="/fiscal-pricing-admin">Fiscal</router-link>
		<router-link class="btn legal" to="/legal-pricing-admin">Juridique</router-link>
		<router-link class="btn consulting" to="/consulting-pricing-admin">Conseil</router-link>
	</div>
</template>

<script lang='ts'>
/* eslint-disable */
import {
	Component,
	Vue,
} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class componentName extends Vue {
    // public booleanName = false;
    // @Prop() public propsName!: boolean;
}
</script>

<style lang='scss' scoped>
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
		width: 50%;
	}
	.btn:hover {
		box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.68),
		-4px -2px 16px #ffffff;
	}
	a {
		text-decoration: none;
		color: black;
		padding: 1em;
		font-weight: 600;
	}
</style>
