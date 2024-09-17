const API = "/src/php";

const DEFAULT_OPTIONS = {
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
};

const GET_REQUEST = {
	...DEFAULT_OPTIONS,
	method: "GET",
};

const POST_REQUEST = {
	...DEFAULT_OPTIONS,
	method: "POST",
};

export const addContact = (data) => {
	return fetch(`${API}/add.php`, {
		...POST_REQUEST,
		body: new URLSearchParams(data),
	});
};

export const getContacts = () => {
	return fetch(`${API}/read.php`, GET_REQUEST);
};

export const updateContact = (data) => {
	return fetch(`${API}/edit.php`, {
		...POST_REQUEST,
		body: new URLSearchParams(data),
	});
};

export const deleteContact = (data) => {
	return fetch(`${API}/delete.php`, {
		...POST_REQUEST,
		body: new URLSearchParams(data),
	});
};
