import formMarkup from './formMarkup';
import { select } from './utilities';

class View {
	form = select('.commitmentForm');
	goalsText = select('.goals__display--text');
	allInputs = [];
	constructor() {
		this.renderSpinner();
	}
	renderSpinner() {
		this.form.innerHTML = `<div class="lds-dual-ring"></div>`;
	}
	showForm(formData) {
		this.form.innerHTML = formMarkup(formData);
		this.#displayPledgeDollars(formData.total, formData.entries.length);
		this.#handleActiveClass();
	}

	/** Toggles '.active' CSS class to highlight which fields are being edited. */
	#handleActiveClass() {
		const inputs = select('form input', true);
		const textAreas = select('form textarea', true);
		inputs.forEach((el) => this.allInputs.push(el));
		textAreas.forEach((el) => this.allInputs.push(el));
		this.allInputs.forEach((el) => {
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
	/** Updates the text output below the progress bar
	 * @param {number} total the total amount of dollars donated as Number (will be localized)
	 * @param {number} length the total number of entries
	 */
	#displayPledgeDollars(total, length) {
		this.goalsText.innerHTML = `${total.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})} pledged by ${length} ${length > 1 ? 'households' : 'household'}`;
		this.#updateProgress(length);
	}
	/** Updates progress bar based on number of entries received
	 * @param {number} entries the number of entries.
	 */
	#updateProgress(entries) {
		const toGoal = (entries / 200) * 100;
		const barFill = document.getElementById('myBar');
		const count = select('.goals__progress--counter');
		if (entries >= 200) {
			barFill.style.width = '100%';
			count.innerHTML = `We've hit our goal!`;
		}
		if (entries < 200) {
			barFill.style.width = toGoal <= 10 ? '10%' : `${toGoal}%`;
			count.innerHTML = `${toGoal}%`;
		}
	}
	#getPledgeDollars(formData) {
		const dollars = document.getElementById('dollars').value,
			frequency = document.getElementById('frequency'),
			freqVal = frequency.value,
			freqText = frequency.options[frequency.selectedIndex].text;

		const pledge = { giving: dollars, freq: freqText.toLowerCase() };
		const newTotal = formData.total + Number(dollars) * Number(freqVal);

		this.#displayPledgeDollars(newTotal, formData.entries.length + 1);
		return pledge;
	}
	onSubmit(formData, handler) {
		const string = formData.form.RedirectMessage;
		const message = `<div id="thanks"><h2>${string}</h2></div>`;
		this.form.addEventListener('submit', (ev) => {
			ev.preventDefault();
			const data = this.allInputs.map((el) => el.value);
			data.push(this.#getPledgeDollars(formData));
			handler(data);
			this.form.style.border = 'none';
			this.form.innerHTML = message;
		});
	}
}
export default new View();
