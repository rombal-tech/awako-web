import axios, { AxiosInstance } from 'axios';
import Auth from './group/auth/Auth';

class APIClass {
	private readonly axios: AxiosInstance;

	public readonly auth: Auth;
	// public readonly scheme: Scheme;

	constructor() {
		this.axios = axios.create({
			baseURL: 'http://localhost:25500/api/',
			withCredentials: true,
		});

		this.auth = new Auth(this.axios);
	}
}

const API = new APIClass();

export default API;
