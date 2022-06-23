import React, { FC } from 'react';

interface IProps {
	title: string;
	technologies: string;
	github: string;
	link: string;
}

const Summary: FC<IProps> = ({ title, technologies = '', github, link }) => {
	let techList = technologies.split(',').map((tech) => tech);
	return (
		<div className="summary">
			<div className="summary__title">
				<h2 className="heading-2">{title}</h2>
				<p className="type">Project</p>
			</div>
			<div className="summary__details">
				<ul className="detail__list">
					<li className="detail__item">
						<span className="label">Tech</span>
						<span className="value">
							{techList.length > 0 && (
								<ul className="tech__list">
									{techList.map((tech) => (
										<li className="tech__item" key={tech}>
											{tech}
										</li>
									))}
								</ul>
							)}
						</span>
					</li>
					<li className="detail__item">
						<span className="label">GitHub</span>
						<span className="value">
							<a href={github} target="_blank" rel="noopener noreferrer">
								Code Link
							</a>
						</span>
					</li>
					<li className="detail__item">
						<span className="label">Link</span>
						<span className="value">
							<a href={link} target="_blank" rel="noopener noreferrer">
								App Link
							</a>
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Summary;
