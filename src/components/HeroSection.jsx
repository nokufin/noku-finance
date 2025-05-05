import React from 'react';
import '../styles/HeroSection.css';
import logo from '../assets/logo/logo.png';

const HeroSection = () => {
	return (
		<div className="heroSection">
			<div className="hero__background"></div>
			<div className="hero__main">
				<img className="hero__logo" src={logo} alt="NOKU logo" />
				<div className="hero__title">
					<h1>Okos pénzügyi megoldások a jövődért</h1>
				</div>
				<div className="hero__subtitle">
					<p className='hero__subtitle-p'>
						Átfogó pénzügyi közvetítői szolgáltatások magánszemélyek
						és vállalkozások számára
						<br />
						Szakértői tanácsadás az Ön egyedi igényeire szabva
					</p>
				</div>
				<div className="hero__buttons">
					<button className="hero__button hero__button--primary">
						Portfólió Felülvizsgálat
					</button>
					<button className="hero__button hero__button--secondary">
						Kapcsolat
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
