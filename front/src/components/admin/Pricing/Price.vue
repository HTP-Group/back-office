<template>
  <td class="td">
    <th class="nature">Spéciale</th>
    <th class="label">paramétrage des variables sociales</th>
    <th class="price">50</th>
    <th class="comments">Attention de bien....</th>
  </td>
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
export default class Price extends Vue {

}
</script>

<style lang='scss' scoped>
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
</style>
