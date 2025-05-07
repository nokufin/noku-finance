import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo/logo.png';
import { Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const fastLinkItems = [
		'Otthon',
		'Nem életbiztosítás',
		'Vállalati biztosítás',
		'Gépjármű-biztosítás',
		'Életbiztosítás',
		'Kölcsönök és megtakarítások',
		'Tőkepiacok',
		'Érintkezés',
	];

	const contacts = [
		{ label: 'E-mail', value: 'contact@nokufinance.com', type: 'email' },
		{ label: 'Telefon', value: '+36 30 792 61 40', type: 'tel' },
	];

	return (
		<div className="footer">
			<div className="footer__main">
				<div className="footer__columns">
					<div className="footer__column footer__columns-about">
						<div className="footer__about-container">
							<img className="footer__logo" src={logo} alt="" />
							<h4 className="footer__brand-name">NOKU Finance</h4>
						</div>
						<div>
							<p className="footer__description">
								Professzionális pénzügyi közvetítői
								szolgáltatások magánszemélyek és vállalkozások
								számára.
							</p>
						</div>
						<div className="footer__social-icons">
							<div className="footer__icons">
								<a
									href="https://www.linkedin.com/company/nokufinance"
									target="_blank"
									rel="noopener noreferrer"
									className="footer__sm-icon-zone"
								>
									<Linkedin className="footer__sm-icon" />
								</a>
								<a
									href="https://www.facebook.com/nokufinance"
									target="_blank"
									rel="noopener noreferrer"
									className="footer__sm-icon-zone face-ic"
								>
									<Facebook className="footer__sm-icon" />
								</a>
							</div>
						</div>
					</div>
					<div className="footer__column footer__columns-contact">
						<div className="footer__heading">
							<h4 className="footer__title">Elérhetőségek</h4>
						</div>
						<div className="footer__list-contacts">
							<ul className="footer__list">
								{contacts.map((item, index) => {
									const href =
										item.type === 'email'
											? `mailto:${item.value}`
											: item.type === 'tel'
											? `tel:${item.value.replace(
													/\s+/g,
													''
											  )}`
											: '#';
									return (
										<li
											key={index}
											className="footer__list-item"
										>
											<a href={href}>
												{item.label}: {item.value}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="footer__column footer__columns-links">
						<div className="footer__heading">
							<h4 className="footer__title">Gyorslinkek</h4>
						</div>
						<div className="footer__links-container">
							<ul className="footer__list">
								{fastLinkItems.map((item, index) => (
									<li
										key={index}
										className="footer__list-item"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__copyright">
					© {currentYear} NOKU Finance. NOKU Finance. Minden jog
					fenntartva.
				</div>
			</div>
		</div>
	);
};

export default Footer;
