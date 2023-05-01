import { AxiosInstance } from 'axios';

abstract class APIGroup {
	protected axios: AxiosInstance;

	constructor(instance: AxiosInstance) {
		this.axios = instance;
	}
}

export default APIGroup;
