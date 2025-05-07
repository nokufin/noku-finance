import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
	return (
		<div className="App">
			<Navbar />
			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<ContactSection />
		</div>
	);
}

export default App;
