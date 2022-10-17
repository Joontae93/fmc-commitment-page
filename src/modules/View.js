import { select } from './utilities';

export default class View {
	form = select('.commitmentForm');
	constructor() {
		this.renderSpinner();
	}
	renderSpinner() {
		this.form.innerHTML = `<div class="lds-dual-ring"></div>`;
	}
	showForm(formData) {
		console.log(formData);
		this.form.innerHTML = `<header class="form-header section-header">
                <h2 class="form-header__headline section-header__headline">Estimate of Giving for 2023</h2>
                <span class="form-header__description section-header__description">${formData.form.Description}</span>
            </header>
            <form>
                <div class="section contact-info">
                    <div class="contact-info__fields">
                        <h3 class="contact-info__header">Your Name</h3>
                        <div class="contact-info__fields--first">
                            <label for="first">First Name</label>
                            <input type="text" name="first" id="">
                        </div>
                        <div class="contact-info__fields--second">
                            <label for="last">Last Name</label>
                            <input type="text" name="last" id="">
                        </div>
                    </div>
                    <div class="contact-info__fields">
                        <h3 class="contact-info__header">Contact Info</h3>
                        <div class="contact-info__fields--first">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="">
                        </div>
                        <div class="contact-info__fields--second">
                            <label for="cell">Phone</label>
                            <input type="tel" name="phone" id="">
                        </div>
                    </div>
                </div>
                <div class="section time">
                    <div class="section-header">
                        <h2 class="section-header__headline">Time</h2>
                        <span class="section-header__description">description</span>
                    </div>
                    <div class="time__fields">
                        <label for="time-field">Time?</label>
                        <textarea name="time-field" id="time-field" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="section talent">
                    <div class="section-header">
                        <h2 class="section-header__headline">talent</h2>
                        <span class="section-header__description">description</span>
                    </div>
                    <div class="talent__fields">
                        <label for="talent-field">Talent?</label>
                        <textarea name="talent-field" id="talent-field" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="section treasure">
                    <div class="section-header">
                        <h2 class="section-header__headline">treasure</h2>
                        <span class="section-header__description">description</span>
                    </div>
                    <div class="treasure__fields">
                        <div class="treasure__fields--giving">
                            <label for="dollars">Giving</label>
                            <input type="number" name="dollars" id="">
                        </div>
                        <div class="treasure__fields--frequency">
                            <label for="frequency">Frequency</label>
                            <select name="frequency" id="frequency">
                                <option value="1">One-Time</option>
                                <option value="52">Weekly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Annually</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit" id="submit">Submit</button>
                </form>
                `;
	}
	handleActiveClass() {
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
	displayData(formData) {
		const goalsText = select('.goals__display--text');
		goalsText.innerHTML = `$${formData.total} dollars pledged by ${
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
