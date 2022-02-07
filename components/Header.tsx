import { InferGetStaticPropsType } from 'next/types';
import { getStaticProps } from '../pages';
import Avatar from './Avatar';

const Header: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
  > = ({ imageProps }) => {
  return (
    <header className="header">
        <div className="header__background"/>
        <div className="header__content">
			<Avatar imageProps={imageProps} />
			<div className="text-box">
				<h3 className="heading-3 u-text-center">
					Hello, I am
				</h3>
				<h1 className="heading-1 u-text-center">
					Udendu
				</h1>
				<h3  className="heading-3 u-text-center">A Web Developer</h3>
			</div>
		</div>
    </header>
  )
}

export default Header;
