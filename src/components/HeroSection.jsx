import React from 'react';
import '../styles/HeroSection.css';
import logo from '../assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
	const navigate = useNavigate();

	const contactClick = () => {
		navigate('/kapcsolat');
	};

	return (
		<div className="heroSection">
			<div className="hero__background"></div>
			<div className="hero__main">
				<img className="hero__logo" src={logo} alt="NOKU logo" />
				<div className="hero__title">
					<h1>Okos pénzügyi megoldások a jövődért</h1>
				</div>
				<div className="hero__subtitle">
					<p className="hero__subtitle-p">
						Átfogó pénzügyi közvetítői szolgáltatások magánszemélyek
						és vállalkozások számára
						<br />
						Szakértői tanácsadás az Ön egyedi igényeire szabva
					</p>
				</div>
				<div className="hero__buttons">
					<button
						className="hero__button hero__button--primary"
						onClick={contactClick}
					>
						Portfólió Felülvizsgálat
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
