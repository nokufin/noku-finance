import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
