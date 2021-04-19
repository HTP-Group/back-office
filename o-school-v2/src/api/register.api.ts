import Axios from './index';
import { User } from '../Interfaces/user/User';

async function register(data: User): Promise<string> {
  const response = await Axios.post(
    '/user/register', data,
  );
  return response.data;
}

async function getMe(): Promise<User> {
  const response = await Axios.get<User>(
    '/user/profile',
  );

  return response.data;
}
const registerApi = {
  register,
  getMe,
};
export default registerApi;
