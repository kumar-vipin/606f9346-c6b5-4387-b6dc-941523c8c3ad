import axios from 'axios';
const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime';

export default {
	getAPIResponse() {
		return fetch(DATE_JSON_URL).then(res => res.json());
	}
};
