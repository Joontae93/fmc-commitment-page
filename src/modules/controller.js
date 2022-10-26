import model from './model';
import View from './View';

export default async function appController() {
	try {
		// Check if Mobile
		const mobile = View.mobile;
		if (!mobile) {
			// call the Wufoo Data
			await model.theData();

			// Show the Data
			View.showForm(model.formData);
			View.showResponses(model.formData.entries);

			// handle submit
			View.onSubmit(model.formData, model.submitData);
		} else {
			View.mobileRedirect();
		}
	} catch (err) {
		console.error(err);
	}
}
