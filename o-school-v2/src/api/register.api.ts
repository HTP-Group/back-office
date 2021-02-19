import Axios from './index';
import { IUser } from '../Interfaces/user/IUser';

async function register(data: IUser): Promise<string> {
  const response = await Axios.post('/user/register', data);
  return response.data;
}

const registerApi = {
  register,
};
export default registerApi;
