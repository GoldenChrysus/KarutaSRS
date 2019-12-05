import Base from 'ember-simple-auth/authenticators/base';

export default class SimpleAuthenticator extends Base {
	restore(data) {
		return (data.data.success) ? Promise.resolve(data) : Promise.reject();
	}

	authenticate(/*args*/) {
		return new Promise((resolve, reject) => {
			let data = {
				data : {
					success: true
				}
			};

			resolve(data);
		});
	}
}