import React from 'react';
import Footer from '../components/Footer';
import '../styles/nonLife.css';

const NemEletBiztositas = () => {
	const nonLifeLakossagi = [
		{
			title: 'Egyéni lakásbiztosítás',
			description: 'Otthonod védelme tűz, betörés vagy viharkár esetén',
		},
		{
			title: 'Lakáskampány 2025',
			description:
				'Kedvezményes lakásbiztosítási csomagok a kampány keretében',
		},
		{
			title: 'MFO Lakásbiztosítások',
			description: 'Többféle lakástulajdonos számára szabott megoldások',
		},
		{
			title: 'Társasház biztosítás',
			description: 'Közös helyiségek és épületrészek komplex védelme',
		},
		{
			title: 'Jogvédelem biztosítás',
			description:
				'Ügyvédi költségek és jogi eljárások fedezése jogviták során',
		},
		{
			title: 'Hajó felelősség és casco biztosítás',
			description: 'Hajókra vonatkozó felelősségi és eszközvédelem',
		},
		{
			title: 'Utasbiztosítás',
			description:
				'Egészségügyi, poggyász és utazási kockázatok fedezése',
		},
		{
			title: 'Elektronikus gépbiztosítás',
			description:
				'Számítástechnikai eszközök váratlan károsodásának védelme',
		},
	];

	const nonlifeVallalati = [
		{
			title: 'Vezető tisztségviselők felelősségbiztosítása (D&O)',
			description:
				'Cégvezetők döntéseiből fakadó személyes felelősség fedezése',
		},
		{
			title: 'Termékfelelősség biztosítás',
			description:
				'Termékhibákból eredő harmadik fél általi károk fedezése',
		},
		{
			title: 'Általános felelősségbiztosítás',
			description:
				'Harmadik félnek okozott személyi vagy anyagi károkra vonatkozó biztosítás',
		},
		{
			title: 'Szakmai felelősségbiztosítás',
			description:
				'Szellemi szolgáltatást végzők szakmai hibáira nyújt fedezetet',
		},
		{
			title: 'Vagyon- és felelősségbiztosítás',
			description:
				'A vállalat eszközeinek és felelősségi kockázatainak kombinált védelme',
		},
		{
			title: 'Mezőgazdasági növénybiztosítás',
			description:
				'Időjárási és természeti kockázatok elleni védelem gazdálkodóknak',
		},
		{
			title: 'Szállítmánybiztosítás',
			description: 'Árufuvarozás során bekövetkezett károk megtérítése',
		},
		{
			title: 'IT felelősségbiztosítás',
			description:
				'Szoftver- és technológiai hibákból eredő károk védelme',
		},
		{
			title: 'Környezetvédelmi felelősségbiztosítás',
			description:
				'Környezeti károk és szennyezés jogi és anyagi következményeinek fedezése',
		},
		{
			title: 'Gépek összkockázatú vagyon- és géptörés biztosítás',
			description:
				'Termelőeszközök és ipari gépek hibáira, törésére kiterjedő biztosítás',
		},
		{
			title: 'Építés-szerelés biztosítás',
			description: 'Építkezések és szerelési munkák teljes körű védelme',
		},
		{
			title: 'Vállalati utasbiztosítás',
			description:
				'Üzleti utazások során fellépő egészségügyi és logisztikai kockázatokra nyújt fedezetet',
		},
		{
			title: 'Elektronikus gépbiztosítás',
			description:
				'Informatikai és elektronikai eszközök komplex biztosítása vállalati használatra',
		},
	];

	return (
		<div className="nonlife">
			<div className="nonlife__main">
				<div className="nonlife-insurance__container">
					<h2 className="nonlife__maintitle">Nem-Élet Biztosítás</h2>
					<div className="nonlife-insurance__category">
						<h3 className="nonlife__listtitle">
							Lakossági Vagyon- és Felelősségbiztosítás
						</h3>
						<ul className="nonlife__list-block nonlife__list-block-left">
							{nonLifeLakossagi.map((item, index) => {
								return (
									<li key={index}>
										<p className="nonlife__list-p">
											{item.title}
										</p>
										<span className="nonlife__list-span">
											{item.description}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="nonlife-insurance__category">
						<h3 className="nonlife__listtitle">
							Vállalati Vagyon- és Felelősségbiztosítás
						</h3>
						<ul className="nonlife__list-block nonlife__list-block-right">
							{nonlifeVallalati.map((item, index) => {
								return (
									<li key={index}>
										<p className="nonlife__list-p">
											{item.title}
										</p>
										<span className="nonlife__list-span">
											{item.description}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default NemEletBiztositas;
