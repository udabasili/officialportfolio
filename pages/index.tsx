import Header from '../components/Header';
import { InferGetStaticPropsType } from 'next/types';
import { getPlaiceholder } from 'plaiceholder';
import Layout from '../components/Layout';
import React from 'react';
import { Portfolio } from '../features/misc/Portfolio';
import { About } from '../features/misc/About';
import Contact from '../features/misc/Contact';
import { useDisclosure } from '../hook/useDisclosure';

export const getStaticProps = async () => {
	const images = await Promise.all(
		imagePaths.map(async (src) => {
			const { base64, img } = await getPlaiceholder(src);
			return {
				...img,
				alt: 'Paint Splashes',
				title: 'Photo from Unsplash',
				blurDataURL: base64,
			};
		})
	).then((values) => values);

	return {
		props: {
			images,
		},
	};
};

const imagePaths = [
	'https://user-images.githubusercontent.com/33573587/110267661-aa111400-7f96-11eb-9877-0200d6c88777.png',
	'https://user-images.githubusercontent.com/33573587/158959267-cdf9c6a0-b8c6-4b3f-949b-12c55319034f.png',
	'https://user-images.githubusercontent.com/33573587/159110238-ff564830-98ca-478a-bb7c-34f6df64fc98.png',
	'https://user-images.githubusercontent.com/33573587/113302683-b4dd7100-92d6-11eb-9846-bf9d19cfd632.png',
	'https://user-images.githubusercontent.com/33573587/104382903-5be71380-5505-11eb-99fe-17696b197499.png',
	'https://user-images.githubusercontent.com/33573587/163664526-ba8fceb6-2504-4a2c-af9f-65f0f0c7a56e.png',
];

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ images }) => {
	const { isOpen, open, close } = useDisclosure();

	return (
		<Layout title="Udendu Portfolio" close={close} isOpen={isOpen}>
			{' '}
			<div id="home" className="content">
				<Header />
			</div>
			<div id="portfolio" className="panel">
				<Portfolio images={images} close={close} isOpen={isOpen} open={open} />
			</div>
			<About />
			<div id="contact" className="panel">
				<Contact />
			</div>
		</Layout>
	);
};
export default Home;
