import React, { FC } from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image';

interface Props {
    images: string
}

const MainImage: FC<Props> = ({
    images
}) => {
    const imageList = images.split(',')
    return (
        <div className='main-image'>
            <Slide easing="ease" >
                {
                    imageList.map((slide, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{'backgroundImage': `url(${slide})`}}/>
                        </div>
                    ))
                }
            </Slide>
        </div>
    )
}

export default MainImage