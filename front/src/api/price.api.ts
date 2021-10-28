/* eslint-disable */
import Axios from './index';
import { Price } from '../Interfaces/price/Price.interface';

async function addPrice(data: Price): Promise<Price> {
  const response = await Axios.post<Price>(
    '/addPrice', data,
  );

  return response.data;
}

async function prices():Promise<Price[]> {
  const response = await Axios.get<Price[]>(
    '/prices'
  )

  return response.data;
}

const priceApi = {
  addPrice,
  prices
};

export default priceApi;