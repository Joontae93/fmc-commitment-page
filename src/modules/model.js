import { makeRequest } from './utilities';

class Model {
	formData = {};
	constructor() {}
	theData = async function () {
		try {
			const data = await makeRequest();
			this.formData.form = data.Forms[0];
			const fields = await makeRequest('fields');
			this.formData.fields = fields.Fields;
			const entries = await makeRequest('entries');
			this.formData.entries = entries.Entries;
			this.sumDollars(this.formData.entries);
		} catch (err) {
			throw new Error(err);
		}
	};
	sumDollars(entries) {
		let sum = 0;
		entries.forEach((el) => {
			switch (el.Field11) {
				case 'monthly':
					sum += Number(el.Field522) * 12;
					break;
				case 'weekly':
					sum += Number(el.Field522) * 52;
				default:
					sum += Number(el.Field522);
			}
			this.formData.total = sum;
		});
	}
	submitData = async function (data) {
		const postData = {
			Field1: data[0], // first
			Field2: data[1], // last
			Field9: data[2], // email
			Field419: data[3], // cell
			Field527: data[5], // time
			Field528: data[6], // talent
			Field522: data[7].giving, // dollars
			Field11: data[7].freq, // freq
		};
		console.log(JSON.stringify(postData));
		try {
			const res = await makeRequest('entries', 'POST', postData);
			if (res.Success != 1) throw new Error(res);
		} catch (err) {
			console.error(err);
		}
	};
}

export default new Model();
