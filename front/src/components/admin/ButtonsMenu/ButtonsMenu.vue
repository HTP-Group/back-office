<template>
  <div class="buttons">
		<button type="submit" class="btn add" @click="openAddForm">Ajouter</button>
		<button type="submit" class="btn update">Modifier</button>
		<button type="submit" class="btn delete">Supprimer</button>
	</div>
</template>

<script lang='ts'>
/* eslint-disable */
import {
  Component,
  Vue,
} from 'vue-property-decorator';
//import componentNameImported from '';

@Component({
    components: {},
})
export default class ButtonsMenu extends Vue {
	public isAddPriceFormOpen = false;
    
	public openAddForm() {
		this.$emit('isAddPriceFormOpen');
	}
}
</script>

<style lang='scss' scoped>
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
</style>
