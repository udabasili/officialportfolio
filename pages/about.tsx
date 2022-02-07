import React from 'react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import Image from 'next/image'

function About() {
  return (
  <Layout title="About">
    <PageHead title="About me"/>
    <div className="about-page">
      <div className='about'>
          <figure className='user__image-container'>
              <Image
                src="/images/owner.jpeg"
                layout='fill'
              />
              <figcaption className='user__username'>
                  Me
              </figcaption>
          </figure>
          <div className='user__info'>
              <h3 className='heading-3 u-margin-bottom-small'>Passion, dedication, and a lot of coffee.</h3>
              <p className='paragraph'>
                  I am a creative web developer that has more than a year of experience dedicated to building and optimizing the performance of user-centric, high-impact websites. I created this business because I noticed that there is a scarcity of great websites that can be built for clients to match their budgets especially those with low income. 

                  My websites are very creative and provide a great user interaction experience.
                  I deal with building static websites,  dynamic websites, and mobile applications, making use of the MERN(MongoDB, Express, React, Node) stack, Firebase, MySQL, and React Native. 

                  I also find it very important to maintain security in applications I build and stay up-to-date with new methods and technology available for mobile and web building. Outside my work, I am a lover of good music, old school cinema (Thrillers, Crime, and Action mainly), hiking, salsa dancing, and kickboxing
              </p>
          </div>

      </div>

    </div>
    
  </Layout>
  )
}

export default About