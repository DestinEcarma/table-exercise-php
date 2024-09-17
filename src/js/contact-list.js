import { deleteContact } from "./services.js";

const modal = document.getElementById("modal");
const modalForm = document.getElementById("modal-form");

const list = document.getElementById("list");

export const renderContact = (contact) => {
	const row = document.createElement("tr");

	row.id = `contact-${contact.id}`;
	row.innerHTML = `
		<td>${contact.id}</td>
		<td class="first-name">${contact.firstName}</td>
		<td class="last-name">${contact.lastName}</td>
		<td class="email-address">${contact.email}</td>
		<td class="contact-number">${contact.number}</td>
		<td>
			<div class="flex gap-4 justify-center">
				<button class="edit hover:drop-shadow-glow transition">
					<span class="material-symbols-rounded">edit</span>
				</button>
				<button class="delete hover:drop-shadow-glow transition">
					<span class="material-symbols-rounded">delete</span>
				</button>
			</div>
		</td>
	`;

	row.querySelector(".edit").addEventListener("click", () => {
		modalForm.dataset.edit = contact.id;
		modalForm.dataset.onEdit = "true";
		modalForm.dataset.editEmail = row.querySelector(".email-address").textContent;

		modalForm["first-name"].value = row.querySelector(".first-name").textContent;
		modalForm["last-name"].value = row.querySelector(".last-name").textContent;
		modalForm["email-address"].value = row.querySelector(".email-address").textContent;
		modalForm["contact-number"].value = row.querySelector(".contact-number").textContent;

		modal.dataset.active = "true";
	});

	row.querySelector(".delete").addEventListener("click", () => {
		if (confirm("Are you sure you want to delete this contact?")) {
			deleteContact({ id: contact.id })
				.then((response) => {
					if (response.status === 400) {
						return alert("An error occurred. Please try again.");
					}

					row.remove();
				})
				.catch(() => {
					alert("An error occurred. Please try again.");
				});
		}
	});

	list.appendChild(row);
};

export const reRenderContact = (contact) => {
	const row = document.getElementById(`contact-${contact.id}`);

	row.querySelector(".first-name").textContent = contact.firstName;
	row.querySelector(".last-name").textContent = contact.lastName;
	row.querySelector(".email-address").textContent = contact.email;
	row.querySelector(".contact-number").textContent = contact.number;
};
