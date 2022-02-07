import React from 'react';
import Image from 'next/image'
import { InferGetStaticPropsType } from 'next/types';
import { getStaticProps } from '../pages';

const Avatar: React.FC<
	InferGetStaticPropsType<typeof getStaticProps>
	> = ({ imageProps }) => {
	return (
		<div className="avatar">
			<div className="avatar__inner">
			<Image
				placeholder='blur'
				width={30}
				height='100%'
				{...imageProps}
			/>
			</div>
		</div>
    )
}

export default Avatar;
