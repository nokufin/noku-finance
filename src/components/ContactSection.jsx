import React, { useState } from 'react';
import '../styles/ContactSection.css';
import { FilePen } from 'lucide-react';

function ContactSection() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		serviceType: '',
		message: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		alert(
			'Köszönjük a megkeresést! Hamarosan felvesszük Önnel a kapcsolatot.'
		);
	};

	return (
		<section className="contact">
			<div className="contact__container">
				<div className="contact__header">
					<FilePen className="contact__icon" />
					<h2 className="contact__title">
						Lépjen velünk kapcsolatba
					</h2>
					<p className="contact__description">
						Kérdése van, vagy személyre szabott tanácsadásra van
						szüksége? Töltse ki az alábbi űrlapot, és munkatársunk
						hamarosan keresni fogja.
					</p>
				</div>

				<form onSubmit={handleSubmit} className="contact__form">
					<div className="contact__form-row">
						<div className="contact__field">
							<label htmlFor="name">Teljes név</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="contact__field">
							<label htmlFor="email">Email cím</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
					</div>

					<div className="contact__form-row">
						<div className="contact__field">
							<label htmlFor="phone">Telefonszám</label>
							<input
								type="text"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="contact__field">
							<label htmlFor="serviceType">
								Szolgáltatás típusa
							</label>
							<select
								id="serviceType"
								name="serviceType"
								value={formData.serviceType}
								onChange={handleChange}
								required
							>
								<option value="">Kérlek válassz</option>
								<option value="non-life">
									Nem életbiztosítás
								</option>
								<option value="corporate">
									Vállalati biztosítás
								</option>
								<option value="motor">
									Gépjármű biztosítás
								</option>
								<option value="life">Életbiztosítás</option>
								<option value="loans">
									Hitelek és megtakarítások
								</option>
								<option value="capital">Tőkepiacok</option>
							</select>
						</div>
					</div>

					<div className="contact__field">
						<label htmlFor="message">Üzenet</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="5"
							placeholder="Miben segíthetünk?"
							required
						></textarea>
					</div>

					<div className="contact__submit">
						<button type="submit">Üzenet küldése</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContactSection;
