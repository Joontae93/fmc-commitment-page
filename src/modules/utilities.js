/** Shorthand for Query Selector Function.
 * @param selector {string} CSS Selector. Must include class ('.') marker if needed
 * @param  [all] {boolean} optional to call querySelectorAll.
 * @return {Element} HTML Element
 * */
export function select(selector, all = false) {
	return all === false
		? document.querySelector(selector)
		: document.querySelectorAll(selector);
}

const API_URL = `https://firstchurchcarrollton.wufoo.com/api/v3/forms`;
const FORM_ID = 'rt2tdqd0lcp3yx';
/**
 * Makes AJAX request.
 * @param {string} endpoint accepts 'entries', 'fields' or false to simply GET the form.
 * @param {object} theData Data to POST
 * @param {boolean} returnAll if `true`, returns an Array, else only return the `data`
 * @returns {Array|Object} `data` object or an Array containing [AJAX `res`ponse, The `data`, The `method`]
 */
export async function makeRequest(
	endpoint = false,
	method = false,
	theData = false,
	returnAll = false,
) {
	try {
		const config = {
			headers: {
				Authorization: `Basic ${window.btoa(
					process.env.API_KEY + ':footastic',
				)}`,
			},
			method: `GET`,
			timeout: 5000,
		};
		if (theData) config.body = new URLSearchParams(theData);

		let url;
		switch (endpoint) {
			case 'entries':
				url = `${API_URL}/${FORM_ID}/entries.json/`;
				break;
			case 'fields':
				url = `${API_URL}/${FORM_ID}/fields.json/`;
				break;
			default:
				url = `${API_URL}/${FORM_ID}.json/`;
		}
		if (method) {
			config.method = method;
		}
		const res = await fetch(url, config);
		const data = await res.json();
		if (!res.ok) throw new Error(`${data.message} (${res.status})`);
		return returnAll ? [res, data, method] : data;
	} catch (error) {
		console.error(error);
	}
}

export function timeout() {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error('Request took too long!'));
		}, 7000);
	});
}
