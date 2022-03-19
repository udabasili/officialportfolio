import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { category } from '../data/category';
import { portfolioDetails } from '../data/portfolioDetails';
import Image from 'next/image'
import { getPlaiceholder } from "plaiceholder";
import type { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
    const images = await Promise.all(
    imagePaths.map(async (src) => {
      const { base64, img } = await getPlaiceholder(src);
      return {
        ...img,
        alt: "Paint Splashes",
        title: "Photo from Unsplash",
        blurDataURL: base64,
      };
    })
  ).then((values) => values);

  return {
    props: {
      images
    },
  };
};

const imagePaths = [
  'https://user-images.githubusercontent.com/33573587/110267661-aa111400-7f96-11eb-9877-0200d6c88777.png',
  "https://user-images.githubusercontent.com/33573587/158959267-cdf9c6a0-b8c6-4b3f-949b-12c55319034f.png",
  'https://user-images.githubusercontent.com/33573587/159110238-ff564830-98ca-478a-bb7c-34f6df64fc98.png',
  'https://user-images.githubusercontent.com/33573587/104382903-5be71380-5505-11eb-99fe-17696b197499.png',
  "https://user-images.githubusercontent.com/33573587/123635362-fa380e80-d7f1-11eb-9a9f-86319fd42e33.png",
]


const Portfolio: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  images
}) => {

  const setCategories = (name) => {
    return category.filter(item => item['Project name'] === name)[0].category
  }
  return (
    <Layout title="Portfolio" >
      <PageHead title="Portfolio"/>
      <section className='portfolios'>
          {
              portfolioDetails.map((item, index) =>(
              <div className='portfolio' key={index}>
                  <div className='portfolio__image'>

                    {
                      images && (
                        <Image {...images[index]} placeholder="blur" layout="responsive"/>
                      )}
                  </div>
                  <h3 className='heading-3'>{item['Project name']}</h3>
                  <h3 className='heading-3 categories'>{setCategories(item['Project name'])}</h3>
                  <Link 
                      href={`/portfolio/${item['Project name'].toLowerCase()}`}
                      >
                      <a className='portfolio__link'>View &#8594;</a>
                    </Link>
                  </div>
              ))
          }
      </section>
    </Layout>
  )
}

export default Portfolio;
