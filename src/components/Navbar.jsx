import React from 'react';
import logo from '../assets/logo/logo.png';
import '../styles/Navbar.css';
import { useState, useRef, useEffect } from 'react';

function Navbar() {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [isClosing, setIsClosing] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const timeoutRef = useRef(null);

	const menuItems = ['Szolgáltatások', 'Rólunk', 'Kapcsolat'];
	const servicesDropdown = [
		{
			title: 'Nem-Élet biztosítás',
			description: 'Ingatlan, utazás, jogi védelem és egyebek',
			link: '#',
		},
		{
			title: 'Gépjármű biztosítás',
			description: 'Személyes és flottajármű-lefedettségi megoldások',
			link: '#',
		},
		{
			title: 'Hitelek és megtakarítások',
			description: 'Személyi és vállalati hitelek és megtakarítások',
			link: '#',
		},
		{
			title: 'Vállalati biztosítás',
			description:
				'Felelősség, környezetvédelmi, informatikai és iparág-specifikus lefedettség',
			link: '#',
		},
		{
			title: 'Életbiztosítás',
			description: 'Lejáratú, egészségügyi, nyugdíjas és temetési tervek',
			link: '#',
		},
		{
			title: 'Befektetések',
			description: 'Arany, értékpapírok és befektetési eszközök',
			link: '#',
		},
	];

	const handleMouseEnter = item => {
		clearTimeout(timeoutRef.current);
		setActiveDropdown(item);
	};

	const handleMouseLeave = () => {
		if (activeDropdown) {
			setIsClosing(true);
			timeoutRef.current = setTimeout(() => {
				setIsClosing(false);
				setActiveDropdown(null);
			}, 400);
		}
	};
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
			<div className="navbar__left">
				<img className="navbar__logo" src={logo} alt="NOKU logo" />
				<span className="navbar__company-name">NOKU Finance</span>
			</div>
			<div className="navbar__right">
				<ul className="navbar__menu">
					{menuItems.map((item, index) => (
						<li
							key={index}
							className={`navbar__menu-item ${
								item === 'Szolgáltatások' ? 'has-dropdown' : ''
							}`}
							onMouseEnter={() =>
								item === 'Szolgáltatások' &&
								handleMouseEnter(item)
							}
							onMouseLeave={handleMouseLeave}
						>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<a
								href="#"
								className={`navbar__menu-link ${
									item === 'Szolgáltatások' &&
									activeDropdown === 'Szolgáltatások'
										? 'active-submenu'
										: ''
								} ${isScrolled ? 'scrolled-link' : ''}`}
							>
								{item}
							</a>
							{item === 'Szolgáltatások' && (
								<div
									className={`mega-dropdown ${
										activeDropdown === 'Szolgáltatások'
											? isClosing
												? 'closing'
												: 'active'
											: ''
									}`}
									onMouseEnter={() =>
										handleMouseEnter('Szolgáltatások')
									}
									onMouseLeave={handleMouseLeave}
								>
									{servicesDropdown.map((service, i) => (
										<div key={i} className="dropdown__item">
											<a href={service.link}>
												<strong className="dropdown__title">
													{service.title}
												</strong>
												<p className="dropdown__description">
													{service.description}
												</p>
											</a>
										</div>
									))}
								</div>
							)}
						</li>
					))}
				</ul>
				<button className="navbar__cta-button">Ajánlat kérése</button>
			</div>
		</nav>
	);
}

export default Navbar;
