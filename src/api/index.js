import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000/',
});

function registerUser(userData) {
	// 보통의 방법
	//const url = 'http://localhost:3000/signup';
	//return axios.post(url, userData);
	// axios.create로 쓰는 방법.
	return instance.post('signup', userData);
}

export { registerUser };
