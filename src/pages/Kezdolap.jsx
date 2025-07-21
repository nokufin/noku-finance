import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<ContactSection />
			<Footer />
		</>
	);
};

export default Home;
