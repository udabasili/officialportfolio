import React from 'react';
import Image from 'next/image';
import PageHead from '../../components/PageHead';
import Button from '../../components/Elements/Button';
import { saveAs } from 'file-saver';

export const About = () => {
	function saveFile() {
		saveAs('/programmingresume_wordpress.pdf', 'portfolio.pdf');
	}

	return (
		<div className="about-page panel" id="about">
			<PageHead title="About me" />
			<div className="about">
				<figure className="user__image-container ">
					<Image src="/images/owner.jpeg" layout="fill" objectFit="cover" priority />
					<figcaption className="user__username">Me</figcaption>
				</figure>
				<div className="user__info">
					<h4 className="heading-4 u-margin-bottom-small">Who am i? </h4>
					<h3 className="heading-3 u-margin-bottom-small">I'm Udendu, a Full Stack Developer</h3>
					<ul>
						<li>
							<span>Client First:</span>
							<span>
								I believe in putting the client first no matter their budget, providing them with the
								highest quality work, and ensuring 100% satisfaction.
							</span>
						</li>
						<li>
							<span>Responsiveness:</span>
							<span>
								I would be available to answer any questions and clear any doubts you have along the way
								to make sure there is no form of miscommunication.
							</span>
						</li>
						<li>
							<span>Passion:</span>
							<span>
								I love everything about freelancing from the freedom of being my boss to being in full
								control of the client's final work.
							</span>
						</li>
						<li>
							<span>Experience:</span>
							<span>
								I have job experience (both as a freelancer and employee) working as a Front-end and
								Back-end Developer using multiple technologies ranging from React to Python. I deal with
								building static websites, dynamic websites, and mobile applications, making use of the
								MERN(MongoDB, Express, React, Node) stack, Firebase, MySQL, and React Native. I also
								find it very important to maintain security in applications I build and stay up-to-date
								with new methods and technology available for mobile and web building.
							</span>
						</li>
					</ul>
					<Button size="lg" onClick={saveFile} variant="primary">
						Download CV
					</Button>
				</div>
			</div>
		</div>
	);
};
