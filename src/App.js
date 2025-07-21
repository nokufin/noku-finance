import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Kezdolap from './pages/Kezdolap';
import Kapcsolat from './pages/Kapcsolat';
import NemEletBiztositas from './pages/NemEletBiztositas';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Kezdolap />} />
				<Route path="/kapcsolat" element={<Kapcsolat />} />
				<Route path='/nemeletbiztositas' element={<NemEletBiztositas />} />
			</Routes>
		</Router>
	);
}

export default App;
