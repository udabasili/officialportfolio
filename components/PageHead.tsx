import React, { FC } from 'react'

interface Props {
    title: string
}

const PageHead:FC<Props> = ({title}) => {
    return (
        <div className="page-title">
            <h1 
                className=" heading-1 page-title__header u-text-center">
                {title}
            </h1>
        </div>
    )
}

export default PageHead