import "./modal.js";

import { renderContact } from "./contact-list.js";
import { getContacts } from "./services.js";

async function loadContacts() {
	const response = await getContacts();
	const object = await response.json();

	Object.values(object.data).forEach((contact) => {
		renderContact(contact);
	});
}

loadContacts();
