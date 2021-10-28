/* eslint-disable */
import Axios from './index';
import { Service } from '../Interfaces/price/Service.interface';

async function addPrice(data: Service): Promise<Service> {
  const response = await Axios.post<Service>(
    '/addPrice', data,
  );

  return response.data;
}

async function prices():Promise<Service> {
  const response = await Axios.get<Service>(
    '/prices'
  )

  return response.data;
}

const priceApi = {
  addPrice,
  prices
};

export default priceApi;