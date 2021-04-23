import Axios from './index';
import { User } from '../Interfaces/user/User';

async function getMe(): Promise<User> {
  const response = await Axios.get<User>(
    '/user/profile',
  );

  return response.data;
}
// Promise c'est ce que l'on retourne
async function updateMe(data: User): Promise<User> {
  const response = await Axios.put<User>('/user/update_parent/', data);

  return response.data;
}

async function updatePassword(data:
  { id: string; password: string; currentPassword: string}): Promise<User> {
  const response = await Axios.put<User>(`/user/update_parent_password/${data.id}`, data);

  return response.data;
}

const profileApi = {
  getMe,
  updateMe,
  updatePassword,
};

export default profileApi;
