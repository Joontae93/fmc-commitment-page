import { makeRequest, select } from './utilities';
export default async function engagement() {
	handleActiveClass();
	try {
		theForm();
	} catch (err) {
		console.error(err);
	}
}
const form = {};

async function theForm() {
	try {
		const data = await makeRequest();
		form.form = data.Forms[0];
		const fields = await makeRequest('fields');
		form.fields = fields.Fields;
		const entries = await makeRequest('entries');
		form.entries = entries.Entries;
		sumDollars(form.entries);
		displayData();
	} catch (err) {
		throw new Error(err);
	}
}
function handleActiveClass() {
	const inputs = select('form input', true);
	const textAreas = select('form textarea', true);
	let allInputs = [];
	inputs.forEach((el) => allInputs.push(el));
	textAreas.forEach((el) => allInputs.push(el));
	allInputs.forEach((el) => {
		el.addEventListener('focusin', (ev) => {
			if (!el.closest('.section').classList.contains('active'))
				el.closest('.section').classList.add('active');
		});
		el.addEventListener('focusout', (ev) => {
			if (el.closest('.section').classList.contains('active'))
				el.closest('.section').classList.remove('active');
		});
	});
}

function sumDollars(entries) {
	entries.forEach((el) => {
		let sum = 0;
		console.log(el.Field11);
		sum += Number(el.Field522);
		form.total = sum;
	});
}
function displayData() {
	const description = select('.form-header__description');
	description.innerHTML = form.form.Description;
	const subs = select('.goals__counter--submission');
	subs.innerHTML = form.entries.length;
}
