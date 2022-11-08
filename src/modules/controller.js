import model from './model';
import { timeout } from './utilities';
import View from './View';

export default async function appController() {
	try {
		// Check if Mobile
		if (!View.mobile) {
			// call the Wufoo Data
			await Promise.race([model.theData(), timeout()]);

			// Show the Data
			View.showForm(model.formData);
			View.showResponses(model.formData.entries);

			// handle submit
			View.onSubmit(model.formData, model.submitData);
		} else {
			View.mobileRedirect();
		}
	} catch (err) {
		View.showError(err);
		console.error(err);
	}
}
