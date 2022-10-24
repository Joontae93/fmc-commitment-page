export default function formMarkup(formData) {
	const markup = `
            <form>
                <div class="section contact-info">
                    <div class="contact-info__fields">
                        <h3 class="contact-info__header">Your Name</h3>
                        <div class="contact-info__fields--first">
                            <label for="first">First Name</label>
                            <input required type="text" name="first" id="">
                        </div>
                        <div class="contact-info__fields--second">
                            <label for="last">Last Name</label>
                            <input required type="text" name="last" id="">
                        </div>
                    </div>
                    <div class="contact-info__fields">
                        <h3 class="contact-info__header">Contact Info</h3>
                        <div class="contact-info__fields--first">
                            <label for="email">Email</label>
                            <input required type="email" name="email" id="">
                        </div>
                        <div class="contact-info__fields--second">
                            <label for="cell">Phone</label>
                            <input required type="tel" name="phone" id="phone" inputtype="numeric" >
                        </div>
                    </div>
                </div>
                <div class="section time">
                    <div class="section-header">
                        <h2 class="section-header__headline">Time</h2>
                        <span class="section-header__description">${formData.fields[4].Title}</span>
                    </div>
                    <div class="time__fields">
                        <label for="time-field">Your response</label>
                        <textarea placeholder="&#34;In 2023, I commit to attending worship more often...&#34;&#10;&#34;I&#39;m committing to attend more events...&#34;" name="time-field" id="time-field" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="section talent">
                    <div class="section-header">
                        <h2 class="section-header__headline">talent</h2>
                        <span class="section-header__description">${formData.fields[5].Title}</span>
                    </div>
                    <div class="talent__fields">
                        <label for="talent-field">Your response</label>
                        <textarea name="talent-field" id="talent-field" placeholder="&#34;In 2023, I commit to using my gift of [blank] in ministry...&#34;&#10;&#34;I&#39;d like to grow my talents by volunteering with...&#34;" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="section treasure">
                    <div class="section-header">
                        <h2 class="section-header__headline">treasure</h2>
                    </div>
                    <div class="treasure__fields">
                        <div class="treasure__fields--giving">
                            <label for="dollars">${formData.fields[6].Title}</label>
                            <input type="number" name="dollars" id="dollars" placeholder="85.50" step="0.01">
                        </div>
                        <div class="treasure__fields--frequency">
                            <label for="frequency">Frequency</label>
                            <select name="frequency" id="frequency">
                                <option value="1">One-Time</option>
                                <option value="52">Weekly</option>
                                <option selected value="12">Monthly</option>
                                <option value="1">Annually</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit" id="submit">Submit</button>
                </form>
                `;
	return markup;
}
