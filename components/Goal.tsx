import React, { FC } from 'react'

interface Props {
    text: string
}

const Goal: FC<Props> = ({
    text
}) => {
    
    return (
        <div className="goal">
            <h3 className="heading-3 u-margin-bottom-small">Project Purpose and Goal</h3>
            <p className="paragraph">
                {text}
            </p>
        </div>
    )
}

export default Goal
