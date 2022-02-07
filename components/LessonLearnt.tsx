import React, { FC } from 'react';

interface Props {
    text: string
}

const LessonLearnt: FC<Props> = ({
    text
}) => {
    return (
        <div className="lesson-learned">
            <h3 className="heading-3 u-margin-bottom-small">Lesson Learned</h3>
            <p className="paragraph">
                {text}
            </p>
        </div>
    )
}

export default LessonLearnt