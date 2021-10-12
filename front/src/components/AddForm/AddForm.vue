<template>
    <div class="add-form">
			<v-icon class="icon" @click="cancelDisplayForm">fa-times</v-icon>
			<div class="form">
				<v-text-field
					label="Filière métier"
					placeholder="ex: comptabilité"
				></v-text-field>
				<v-text-field
					label="nature"
				></v-text-field>
				<v-text-field
					label="libellé mission"
				></v-text-field>
				<v-text-field
					label="prix"
				></v-text-field>
				<v-text-field
					label="commentaires"
				></v-text-field>
			</div>
			<div class="validation-form">
				<button class="btn" type=submit>Ajouter une prestation</button>
			</div>
		</div>
</template>

<script lang='ts'>
import {
	Component,
	Vue,
} from 'vue-property-decorator';

@Component({
	components: {},
})
export default class AddForm extends Vue {
	public cancelDisplayForm() {
  	this.$emit('cancelDisplayForm');
	}
}
</script>

<style lang='scss' scoped>
.add-form {
	display: grid;
}
.validation-form {
	justify-self: center;
	width: 50%;
	display: grid;
}
.form {
	justify-self: center;
	width: 50%;
}
	.btn {
		place-self: center;
		background-color: #cfe2f3;
		justify-self: center;
		border-radius: 18px;
		box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.28),
		-4px -2px 16px #ffffff;
		margin-bottom: 1.5em;
		height: 3em;
	}
	.btn:hover {
		box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.68),
		-4px -2px 16px #ffffff;
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
