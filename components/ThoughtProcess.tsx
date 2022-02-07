import React, { FC } from 'react'
interface Props {
    text: string
}

const Description: FC<Props> = ({
    text
}) => {
    return (
        <div className="thought-process">
             <h3 className="heading-3 u-margin-bottom-small">Thought Process</h3>
            <p className="paragraph">
                {text}
            </p>
        </div>
    )
}

export default Description