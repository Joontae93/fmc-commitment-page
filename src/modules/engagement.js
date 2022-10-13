import { makeRequest, select } from './utilities';
export default function engagement() {
	console.log(`Hi there!`);
	displayForm();
}
const form = {};

async function displayForm() {
	const data = await makeRequest();
	form.form = data.Forms[0];
	// const wufoo = Object.values(data.Forms);
	// form.form = wufoo;
	const fields = await makeRequest('fields');
	form.fields = Object.values(fields.Fields);
	console.log(form);
	const container = select('.commitmentForm');
	const description = select('.form-header__description');
	description.innerHTML = form.Description;
}
