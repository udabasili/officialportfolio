import Header from '../components/Header'
import { InferGetStaticPropsType } from 'next/types'
import { getPlaiceholder } from 'plaiceholder';
import Layout from '../components/Layout';

export const getStaticProps = async () => {
	const { base64, img } = await getPlaiceholder(
		"/images/owner.jpeg",
	);
  
	return {
	  props: {
		imageProps: {
		  ...img,
		  blurDataURL: base64,
		},
	  },
	};
};

const Home: React.FC<
    InferGetStaticPropsType<typeof getStaticProps>
  > = ({ imageProps }) => {
    return (
      <Layout title="Home">
        <Header imageProps={imageProps}/>
      </Layout>
    )
}
export default Home

