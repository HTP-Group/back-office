import Axios from './index';
// import { User } from '../Interfaces/user/User';

async function login(data: { email: string; password: string }): Promise<string> {
	const response = await Axios.post(
		'user/signIn', data,
	);

	return response.data;
}

const authApi = {
	login,
};
export default authApi;
