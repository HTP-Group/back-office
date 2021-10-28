<template>
  <td class="td">
    <th class="nature">{{price.nature}}</th>
    <th class="label">{{price.label}}</th>
    <th class="price">{{price.amount}}</th>
    <th class="comments">{{price.comments}}</th>
  </td>
</template>

<script lang='ts'>
/* eslint-disable */
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { Price } from '../../../Interfaces/price/Price.interface';

@Component({
  components: {},
})
export default class Service extends Vue {
@Prop() price!: Price;
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
