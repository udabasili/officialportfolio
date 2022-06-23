import Head from 'next/head';
import Navigation from './Navigation';
import React, { FC, useEffect } from 'react';
import { Nav } from './Nav';

interface IProps {
	title: string;
	close: () => void;
	isOpen: boolean;
}
const Layout: FC<IProps> = ({ children, title, close, isOpen }) => {
	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);

	return (
		<>
			<Head>
				<title>{title} Page | Udendu Portfolio</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Bangers&family=Quicksand:wght@300;400;500;600&display=swap"
					rel="stylesheet"
				/>
				<meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
			</Head>
			<Nav close={close} isOpen={isOpen} />
			<main className="main">{children}</main>
		</>
	);
};

export default Layout;
