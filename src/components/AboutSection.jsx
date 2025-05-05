import React from 'react';
import '../styles/AboutSection.css';
import { Handshake, Users } from 'lucide-react';

const AboutSection = () => {
	const aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Mauris at ultricies ligula, ut suscipit nibh. In hac habitasse platea dictumst.
    
    Cras ultrices lectus sem, et interdum turpis convallis vel. Praesent eget sagittis dui, at scelerisque mi. Fusce consectetur imperdiet mi, eu fermentum nulla imperdiet eget. Cras convallis mi eget tempus porta.`;

	return (
		<div className="aboutSection">
			<div className="about__main-container">
				<div className="about__main-content">
					<div className="about__left">
						<div className="about__left-title">
							<h3 className="about__left-titletext">
								A NOKU Finance-ről
							</h3>
						</div>
						<p
							className="about__left-text"
							style={{ whiteSpace: 'pre-line' }}
						>
							{aboutText}
						</p>
						<div className="about__left-emblems-main">
							<p className="about__left-emblem">
								<Handshake className="about__left-icon" />
								<span className="about__left-span">
									Megbízható partner
								</span>
							</p>
							<p className="about__left-emblem">
								<Users className="about__left-icon" />
								<span className="about__left-span">
									Ügyfélközpontú
								</span>
							</p>
						</div>
					</div>
					<div className="about__right">
						<div className="about__right-container">
							<p className="about__right-quote">
								<span>
									Az okos döntések biztos jövőt építenek.
								</span>
								<br />
								<span>
									Az Ön pénzügyi nyugalma a mi
									elkötelezettségünk.
								</span>
								<br />
								<strong className="about__quote-name">
									— NOKU Finance
								</strong>
							</p>
						</div>
					</div>
				</div>
				<div className="about__button-zone">
					<button className="about__button">
						Díjmentes konzultáció
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
