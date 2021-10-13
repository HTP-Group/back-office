/* eslint-disable */
import Axios from './index';
import { Price } from '../Interfaces/price/Price.interface';

async function addPrice(data: Price): Promise<string> {
  const response = await Axios.post(
    '/addPrice', data,
  );

  return response.data;
}

const priceApi = {
  addPrice
};

export default priceApi;