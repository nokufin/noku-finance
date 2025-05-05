import React from 'react';
import '../styles/ServicesSection.css';
import {
	Shield,
	Building,
	Car,
	Heart,
	PiggyBank,
	LineChart,
} from 'lucide-react';

const ServicesSection = () => {
	const serviceCategories = [
		{
			title: 'Nem-Élet biztosítás',
			icon: Shield,
			services: [
				'Vagyonbiztosítás',
				'Utazási biztosítás',
				'Jogi védelem',
				'Csónakbiztosítás',
				'Elektronikai biztosítás',
			],
		},
		{
			title: 'Vállalati biztosítás',
			icon: Building,

			services: [
				'Felelősségbiztosítás',
				'Környezetbiztosítás',
				'IT biztosítás',
				'Építési biztosítás',
				'Mezőgazdasági biztosítás',
				'Közlekedési biztosítás',
			],
		},
		{
			title: 'Gépjármű biztosítás',
			icon: Car,
			services: [
				'Külső biztosítás',
				'Casco biztosítás',
				'GAP biztosítás',
				'Üzleti flották',
			],
		},
		{
			title: 'Életbiztosítás',
			icon: Heart,
			services: [
				'Határidős életbiztosítás',
				'Egészség és baleset',
				'Unit-linked Insurance',
				'Nyugdíjas tervek',
				'Temetési tervek',
			],
		},
		{
			title: 'Hitelek és megtakarítások',
			icon: PiggyBank,
			services: [
				'Személyi kölcsönök',
				'Vállalati hitelek',
				'Támogatási tanácsadás',
				'Lakásmegtakarítási tervek (LTP)',
			],
		},
		{
			title: 'Tőkepiacok',
			icon: LineChart,
			services: ['Arany befektetések', 'Értékpapírok'],
		},
	];

	return (
		<div className="servicesSection">
			<div className="services__main-container">
				<div className="services__intro">
					<h2 className="services__intro-title">Szolgáltatások</h2>
					<h3 className="services__intro-text">
						A NOKU Finance-nél átfogó pénzügyi szolgáltatásokat
						kínálunk, amelyek célja a jövője biztosítása és
						befektetései maximalizálása.
					</h3>
				</div>
				<div className="services__cards-container">
					<div className="services__container">
						{serviceCategories.map((item, index) => (
							<div key={index} className="services__card">
								<div className="services__card-title">
									<item.icon className="services__card-title-icon" />
									<h3 className="services__card-title-text">
										{item.title}
									</h3>
								</div>
								<ul className="services__card-list-element">
									{item.services.map((service, i) => (
										<li key={i}>{service}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
