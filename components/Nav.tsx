import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { FaUserCircle, FaRegUserCircle } from 'react-icons/fa';
import { BsBriefcaseFill, BsBriefcase } from 'react-icons/bs';
import { MdMarkEmailUnread, MdOutlineEmail } from 'react-icons/md';

type NavProps = {
	close: () => void;
	isOpen: boolean;
};
export const Nav = ({ close, isOpen }: NavProps) => {
	const [currentLink, setCurrentLink] = useState('home');

	function hashLinkChangeListener(ev: HashChangeEvent) {
		setCurrentLink(ev.newURL);
		if (typeof close === 'function') {
			close();
		}
	}

	useEffect(() => {
		window.addEventListener('hashchange', hashLinkChangeListener);

		return () => {
			window.removeEventListener('hashchange', hashLinkChangeListener);
		};
	}, []);

	return (
		<div className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<a
						href="/#home"
						className={`
							nav__link
							${currentLink.match(/.*home.*/) ? 'active' : ''}
							`}
					>
						<span className="icon">
							{' '}
							{currentLink.match(/.*home.*/) ? <AiFillHome /> : <AiOutlineHome />}
						</span>
						<span className="text">Home</span>
					</a>
				</li>
				<li className="nav__item">
					<a
						href="/#portfolio"
						className={`
							nav__link
							${currentLink.match(/.*portfolio.*/) ? 'active' : ''}

							`}
					>
						<span className="icon">
							{currentLink.match(/.*portfolio.*/) ? <BsBriefcaseFill /> : <BsBriefcase />}
						</span>
						<span className="text">Portfolio</span>
					</a>
				</li>
				<li className="nav__item">
					<a
						href="/#about"
						className={`
								nav__link
								${currentLink.match(/.*about.*/) ? 'active' : ''}

								`}
					>
						<span className="icon">
							{currentLink.match(/.*about.*/) ? <FaUserCircle /> : <FaRegUserCircle />}
						</span>
						<span className="text">About Me</span>
					</a>
				</li>
				<li className="nav__item">
					<a
						href="/#contact"
						className={`
								nav__link
								${currentLink.match(/.*contact.*/) ? 'active' : ''}

								`}
					>
						<span className="icon">
							{currentLink.match(/.*contact.*/) ? <MdMarkEmailUnread /> : <MdOutlineEmail />}
						</span>
						<span className="text">Hire Me</span>
					</a>
				</li>
			</ul>
		</div>
	);
};
