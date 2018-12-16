export const saveToken = token => {
	localStorage.setItem('token', token);
};

export const getToken = () => {
	const token = localStorage.getItem('token');
	return token;
};

export const removeToken = () => {
	const token = localStorage.removeItem('token');
	return token;
};

export const saveLanguage = lng => {
	localStorage.setItem('i18nextLng', lng);
};