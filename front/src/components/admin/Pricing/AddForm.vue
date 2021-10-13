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
	justify-self: center;
	border: 30px solid #cfe2f3;
  background-color: #a3d4ff;
  border-radius: 12px;
  position: fixed;
  top: 15em;
  padding: .5em;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.28),
		-4px -2px 16px #ffffff;
	width: 30%;
	right: 25em;
}
.validation-form {
	justify-self: center;
	display: grid;
}
.form {
	justify-self: center;
	width: 80%;
}
	.btn {
		background-color: #cfe2f3;
		justify-self: center;
		border-radius: 18px;
		margin-bottom: 1.5em;
		height: 3em;
		width: 50%;
	}
	.btn:hover {
		box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.68),
		-4px -2px 16px #cfe2f3;
	}
	.icon {
		position: fixed;
		right: 19em;
		padding: .5em;
		top: 11em;
	}
	.icon:hover {
		background-color: #ffffff;
		padding: .5em;
		border-radius: 50%;
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
