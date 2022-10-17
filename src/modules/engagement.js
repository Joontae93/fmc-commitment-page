import showForm from './View';
import renderSpinner from './spinner';
import { makeRequest, select } from './utilities';
import View from './View';

const formData = {};
export default async function engagement() {
	try {
		// call the Form View w/ spinner
		const theWufooForm = new View();

		// call the Wufoo Data
		await theData();
		sumDollars(formData.entries);

		// Show the Data
		theWufooForm.showForm(formData);
		theWufooForm.displayData(formData);
		console.log(formData.form.RedirectMessage);

		// handle submit
		theWufooForm.onSubmit(formData.form.RedirectMessage);
	} catch (err) {
		console.error(err);
	}
}

async function theData() {
	try {
		const data = await makeRequest();
		formData.form = data.Forms[0];
		const fields = await makeRequest('fields');
		formData.fields = fields.Fields;
		const entries = await makeRequest('entries');
		formData.entries = entries.Entries;
	} catch (err) {
		throw new Error(err);
	}
}

function sumDollars(entries) {
	entries.forEach((el) => {
		let sum = 0;
		console.log(el.Field11);
		switch (el.Field11) {
			case 'monthly':
				sum += Number(el.Field522) * 12;
				break;
			default:
				sum += Number(el.Field522);
		}
		formData.total = sum.toFixed(2);
	});
}
