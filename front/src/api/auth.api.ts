/* eslint-disable */
import Axios from './index';
import { User } from '../Interfaces/user/User.interface';

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

// permet de récupérer les informations de l'utilisateur qui tente de se connecter
async function user(): Promise<User> {
	const response = await Axios.get<User>(
		'/user',
	);

	return response.data;
}
async function userUpdate(data: User): Promise<User> {
	const response = await Axios.put<User>(
		'/user_update', data,
	);

	return response.data;
}
async function users(): Promise<User> {
	const response = await Axios.get<User>(
		'/users',
	);

	return response.data;
}
async function signOut(): Promise<void> {
	await Axios.delete<void>(
		'/sign_out',
	);
}

const authApi = {
	signIn,
	register,
	user,
	userUpdate,
	users,
	signOut,
};
export default authApi;
