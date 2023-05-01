import { AxiosResponse } from 'axios';
import APIGroup from '../../APIGroup';
import APIAuthorizationRequest from './APIAuthorizationRequest';
import APIAuthorizationResponse from './APIAuthorizationResponse';

class Auth extends APIGroup {
	private readonly AUTHORIZATION_URI = '/auth/authorization';

	public authorization = (body: APIAuthorizationRequest): Promise<APIAuthorizationResponse> => this.axios({
		method: 'post',
		url: this.AUTHORIZATION_URI,
		data: body,
	})
		.then((response: AxiosResponse<APIAuthorizationResponse>) => response.data);
}

export default Auth;
