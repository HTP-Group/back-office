import mongoose from 'mongoose';
import Joi from 'joi';
import _ from 'lodash';

const Price = mongoose.model('Pricing', new mongoose.Schema({
  field: {
    type: mongoose.Schema.Types.String,
    ref: 'field' 
  },
  nature: {
    type: mongoose.Schema.Types.String,
    ref: 'nature' 
  },
  label: {
    type: mongoose.Schema.Types.String,
    ref:'label'
  },
  amount: {
    type: mongoose.Schema.Types.Number,
    ref:'price_amount'
  },
  comments: mongoose.Schema.Types.String,
}))
export class PriceModel {
  constructor() {}
  async createPrice(body) {
    const price = await new Price(_.pick(body, ['field','nature', 'label', 'amount', 'comments']));
    return price;
  }
  async findPriceByLabel(label) {
    const price = await Price.findOne({ label: label })
    return price;
  }
  async getPrices() {
    const prices = await Price.find({})
    return prices;
  }
}
