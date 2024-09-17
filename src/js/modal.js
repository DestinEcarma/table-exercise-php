import { addContact, updateContact } from "./services.js";
import { renderContact, reRenderContact } from "./contact-list.js";

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const modalForm = document.getElementById("modal-form");

const closeModalForm = () => {
	modalForm.dataset.onEdit = "false";
	modalForm.dataset.editEmail = "";
	modalForm.dataset.edit = "";

	modal.dataset.active = "false";
	modalForm.reset();
};

openModal.addEventListener("click", () => {
	modal.dataset.active = "true";
});

closeModal.addEventListener("click", () => {
	closeModalForm();
});

modalForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const contact = {
		fname: modalForm["first-name"].value,
		lname: modalForm["last-name"].value,
		emailAdd: modalForm["email-address"].value,
		contactNum: modalForm["contact-number"].value,
	};

	if (modalForm.dataset.onEdit !== "true") {
		addContact(contact)
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 400) {
					return alert(data.message);
				}

				renderContact({
					id: data.data,
					firstName: contact.fname,
					lastName: contact.lname,
					email: contact.emailAdd,
					number: contact.contactNum,
				});

				closeModalForm();
			})
			.catch(() => {
				alert("An error occurred. Please try again.");
			});
	} else {
		updateContact({
			...contact,
			id: modalForm.dataset.edit,
			curEmail: modalForm.dataset.editEmail,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 400) {
					return alert(data.message);
				}

				reRenderContact({
					id: modalForm.dataset.edit,
					firstName: contact.fname,
					lastName: contact.lname,
					email: contact.emailAdd,
					number: contact.contactNum,
				});

				closeModalForm();
			})
			.catch(() => {
				alert("An error occurred. Please try again.");
			});
	}
});
