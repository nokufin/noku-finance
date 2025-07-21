import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import '../styles/contact.css';

const Contact = () => {
	return (
		<div className="contact__page">
			<div className="contact__page-left">
				<h2>Elérhetőségek</h2>
				<p className="contact__page-text">
					Kérdései vannak, vagy készen áll arra, hogy megbeszéljük
					pénzügyi igényeit? Töltse ki az űrlapot, és szakértő
					tanácsadóink egyike hamarosan felveszi Önnel a kapcsolatot.
				</p>
				<ul className="contact__page-details">
					<li className="contact__page-list-item">
						<Phone className="contact__page-icon" />{' '}
						<div className="contact__page-list-block">
							<h4 className="contact__page-title">Telefon</h4>
							<span className="contact__page-list-span">
								+36 30 303 03 03
							</span>
						</div>
					</li>
					<li className="contact__page-list-item">
						<Mail className="contact__page-icon" />
						<div className="contact__page-list-block">
							<h4 className="contact__page-title">E-mail</h4>
							<span className="contact__page-list-span">
								email@email.com
							</span>
						</div>
					</li>
					<li className="contact__page-list-item">
						<MapPin className="contact__page-icon" />
						<div className="contact__page-list-block">
							<h4 className="contact__page-title">Cím</h4>
							<span className="contact__page-list-span">
								1234 Város, Utca neve 10.
							</span>
						</div>
					</li>
					<li className="contact__page-list-item">
						<Clock className="contact__page-icon" />
						<div className="contact__page-list-block">
							<h4 className="contact__page-title">
								Nyitvatartás
							</h4>
							<span className="contact__page-list-span">
								Hétfő – Péntek: 9:00 - 17:00
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className="contact__page-right">
				<ContactSection variant="contactPage" />
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
