import { PriceModel } from '../models/pricing.js';
import payload_user from '../helper/sessionHelper.js';

const PRICE = new PriceModel()

async function addPrice(req, res) {
  try {
    const payload = payload_user(req);
    let price = await PRICE.findPriceByLabel(req.body.label);
    if (price) return res.status(400).send('price already exists');

    price = await PRICE.createPrice(req.body)

    console.log('**** NEW PRICE ****', price)
    price.save();
  }
  catch(err) {
    console.error(err)
  }
}

async function prices(req, res) {
  try {
    const payload = payload_user(req)
    let prices = await PRICE.getPrices({})
    console.log(prices, '***prices***')

    if(!prices) res.status(400).send('Invalid request or no prices yet')

    return res.send(prices)
  }
  catch(err) {
    console.error(err);
  }
}

const priceController = {
  addPrice,
  prices
}

export default priceController