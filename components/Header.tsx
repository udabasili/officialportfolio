import Image from 'next/image';
import vercel from '../public/images/mr.png';

const Header = () => {
	return (
		<header className="header" id="home">
			<div className="header__background" />
			<div className="header__content">
				<div className="avatar">
					<Image alt="Vercel logo" src={vercel} layout="fill" objectFit="cover" priority />
				</div>
				<div className="text-box">
					<h3 className="heading-3 u-text-center">Hello, I am</h3>
					<h1 className="heading-1 u-text-center">Udendu</h1>
					<h3 className="heading-3 u-text-center">A Web Developer</h3>
					<p className="paragraph">
						A trusted full stack developer focused on ability to writing quality code, making responsive and
						user-friendly websites, and most of all ensuring .
					</p>
					{/* <Button size="lg" variant="primary">
						<a href="/#portfolio">See My Works</a>
					</Button> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
