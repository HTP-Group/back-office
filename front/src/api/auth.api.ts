import Axios from './index';
import { User } from '../Interfaces/user/User';

async function register(data: User): Promise<string> {
	const response = await Axios.post(
		'/register', data,
	);

	return response.data;
}

async function login(data: { email: string; password: string }): Promise<string> {
	const response = await Axios.post(
		'user/signIn', data,
	);

	return response.data;
}

const authApi = {
	login,
	register,
};
export default authApi;
