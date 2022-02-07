import React, { FC } from 'react'
interface Props {
    text: string
}

const Description: FC<Props> = ({
    text
}) => {
    return (
        <div className="description">
            <p className="paragraph">
                {text}
            </p>
        </div>
    )
}

export default Description
