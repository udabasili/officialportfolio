import Link from 'next/link';
import React, { useState } from 'react';
import { category } from '../../data/category';
import { portfolioDetails } from '../../data/portfolioDetails';
import Image from 'next/image';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from '../../pages';
import PageHead from '../../components/PageHead';
import PortfolioDetail from '../portfolio/components/PortfolioDetails';
import { useDisclosure } from '../../hook/useDisclosure';

interface PortfolioProps extends InferGetStaticPropsType<typeof getStaticProps> {
	close: () => void;
	isOpen: boolean;
	open: () => void;
}
export const Portfolio = ({ images, isOpen, close, open }: PortfolioProps) => {
	const [selectedId, setSelectedId] = useState(null);

	const setCategories = (name) => {
		return category.filter((item) => item['Project name'] === name)[0].category;
	};

	function setSelectedIdHandler(id: string) {
		setSelectedId(id);
		open();
	}

	return (
		<>
			<PortfolioDetail isOpen={isOpen && selectedId} selectedId={selectedId} close={close} />
			<PageHead title="Portfolio" />
			<section className="portfolios">
				{portfolioDetails.map((item, index) => (
					<div className="portfolio" key={index}>
						<div className="portfolio__image">
							{images && <Image {...images[index]} placeholder="blur" layout="responsive" />}
						</div>
						<h3 className="heading-3">{item['Project name']}</h3>
						<h3 className="heading-3 categories">{setCategories(item['Project name'])}</h3>
						<p
							className="portfolio__link"
							onClick={() => setSelectedIdHandler(item['Project name'].toLowerCase())}
						>
							View &#8594;
						</p>
						{/* <Link href={`/portfolio/${item['Project name'].toLowerCase()}`}>
							<a className="portfolio__link">View &#8594;</a>
						</Link> */}
					</div>
				))}
			</section>
		</>
	);
};
