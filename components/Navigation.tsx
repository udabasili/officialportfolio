import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { FaUserCircle, FaRegUserCircle } from 'react-icons/fa';
import { BsBriefcaseFill, BsBriefcase } from 'react-icons/bs';
import { MdMarkEmailUnread, MdOutlineEmail } from 'react-icons/md';
import { saveAs } from 'file-saver';
import Button from './Elements/Button';

function Navigation(props) {
	const router = useRouter();
	const [isMobile, setIsMobile] = useState(true);

	const resizeHandler = () => {
		if (window.innerWidth <= 900) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

	return (
		<nav className="navigation">
			<div className="app-title">
				<span>UD </span>
			</div>
			<input type="checkbox" className="navigation__input" id="nav-toggle" />
			<label htmlFor="nav-toggle" className="navigation__button">
				<span className="navigation__icon">&nbsp;</span>
			</label>
			<ul className="navigation__list">
				{/* <li className="navigation__item">
					<Link href="/">
						<a
							className={`
							navigation__link
							${router.pathname == '/' ? 'active' : ''}
							`}
						>
							{router.pathname == '/' ? <AiFillHome /> : <AiOutlineHome />}
							<span>Home</span>
						</a>
					</Link>
				</li>
				<li className="navigation__item">
					<Link href="/portfolio">
						<a
							className={`
							navigation__link
							${router.pathname.includes('portfolio') ? 'active' : ''}
							`}
						>
							{router.pathname.includes('portfolio') ? <BsBriefcaseFill /> : <BsBriefcase />}
							<span>Portfolio</span>
						</a>
					</Link>
				</li>
				<li className="navigation__item">
					<Link href="/about">
						<a
							className={`
								navigation__link
								${router.pathname == '/about' ? 'active' : ''}
								`}
						>
							{router.pathname == '/about' ? <FaUserCircle /> : <FaRegUserCircle />}
							<span>About Me</span>
						</a>
					</Link>
				</li>
				<li className="navigation__item">
					<Link href="/contact">
						<a
							className={`
								navigation__link
								${router.pathname == '/contact' ? 'active' : ''}
								`}
						>
							{router.pathname == '/contact' ? <MdMarkEmailUnread /> : <MdOutlineEmail />}
							<span>Hire Me</span>
						</a>
					</Link>
				</li>
				<Button size="lg" onClick={saveFile} variant="primary">
					Download CV
				</Button> */}
			</ul>
		</nav>
	);
}

Navigation.propTypes = {};

export default Navigation;
