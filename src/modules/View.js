import formMarkup from './formMarkup';
import { select } from './utilities';

export default class View {
	form = select('.commitmentForm');
	goalsText = select('.goals__display--text');
	constructor() {
		this.renderSpinner();
	}
	renderSpinner() {
		this.form.innerHTML = `<div class="lds-dual-ring"></div>`;
	}
	showForm(formData) {
		this.form.innerHTML = formMarkup(formData);
		this.#handleActiveClass();
	}
	#handleActiveClass() {
		const inputs = select('form input', true);
		const textAreas = select('form textarea', true);
		let allInputs = [];
		inputs.forEach((el) => allInputs.push(el));
		textAreas.forEach((el) => allInputs.push(el));
		allInputs.forEach((el) => {
			el.addEventListener('focusin', (ev) => {
				console.log(ev);
				if (!el.closest('.section').classList.contains('active'))
					el.closest('.section').classList.add('active');
			});
			el.addEventListener('focusout', (ev) => {
				if (el.closest('.section').classList.contains('active'))
					el.closest('.section').classList.remove('active');
			});
		});
	}
	displayData(formData) {
		this.goalsText.innerHTML = `$${formData.total} pledged by ${
			formData.entries.length
		} ${formData.entries.length > 1 ? 'households' : 'household'}`;
	}
	onSubmit(string) {
		const message = `<div class="thanks"><h2>${string}</h2></div>`;
		this.form.addEventListener('submit', (ev) => {
			ev.preventDefault();
			console.log(ev);
			this.form.insertAdjacentHTML('afterend', message);
		});
	}
}
