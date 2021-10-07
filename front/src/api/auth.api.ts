import Axios from './index';
import { User } from '../Interfaces/user/User';

async function register(data: User): Promise<string> {
	const response = await Axios.post(
		'/register', data,
	);

	return response.data;
}

async function signIn(data: { email: string; password: string }): Promise<string> {
	const response = await Axios.post(
		'/signIn', data,
	);

	return response.data;
}

async function user(): Promise<User> {
	const response = await Axios.get<User>(
		'/user',
	);

	return response.data;
}

const authApi = {
	signIn,
	register,
	user,
};
export default authApi;
