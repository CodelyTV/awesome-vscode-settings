import "./assets/css/normalize.css";

import { getUsers } from "./users";

export async function printUsers(): Promise<HTMLElement> {
	const users = await getUsers();
	debugger;
	const element = document.createElement("div");
	element.innerHTML = `<h2>Current users</h2>
    ${users.map((user) => `<div>${user.name}</div>`).join("")}`;

	return element;
}

printUsers()
	.then((element) => {
		document.body.appendChild(element);
	})
	.catch(() => console.error("Something went wrong"));