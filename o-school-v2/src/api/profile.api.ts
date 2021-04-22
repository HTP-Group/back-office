import Axios from './index';
import { User } from '../Interfaces/user/User';
import { Parent } from '../Interfaces/user/parent/Parent.interface';
import { Teacher } from '../Interfaces/user/teacher/Teacher.interface';

async function getMe(): Promise<User> {
  const response = await Axios.get<User>(
    '/user/profile',
  );

  return response.data;
}
// Promise c'est ce que l'on retourne
async function updateParent(data: Parent): Promise<Parent> {
  const response = await Axios.put<Parent>('', data);

  return response.data;
}

async function updateTeacher(data: Teacher): Promise<Teacher> {
  const response = await Axios.put<Teacher>('/', data);

  return response.data;
}

async function updatePassword(data:
  { id: string; password: string; currentPassword: string}): Promise<User> {
  const response = await Axios.put<User>('/', data);

  return response.data;
}

const profileApi = {
  getMe,
  updateParent,
  updateTeacher,
  updatePassword,
};

export default profileApi;
