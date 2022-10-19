import model from './model';
import View from './View';

export default async function appController() {
	try {
		// call the Wufoo Data
		await model.theData();

		// Show the Data
		View.showForm(model.formData);
		// View.displayPledgeDollars(model.formData);

		// handle submit
		View.onSubmit(model.formData, model.submitData);
	} catch (err) {
		console.error(err);
	}
}
