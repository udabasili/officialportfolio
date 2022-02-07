import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { portfolioDetails } from '../../data/portfolioDetails';
import Description from '../../components/Description';
import Goal from '../../components/Goal';
import Summary from '../../components/Summary';
import WebStack from '../../components/TechnologyIcons';
import MainImage from '../../components/MainImage';
import Authentication from '../../components/Authentication';
import LessonLearnt from '../../components/LessonLearnt';
import ThoughtProcess from '../../components/ThoughtProcess';
import Layout from '../../components/Layout';

const PortfolioDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    let eachItem = null
    const router = useRouter()
    const { pid } = router.query

    if (pid) {
        eachItem = portfolioDetails.find(item => item["Project name"].toLowerCase() === pid)
    }

    return (
        <Layout title={'Project Details'}>
            {
                eachItem && (
                    <div className='details-page'  >
                        <Summary
                            title={eachItem["Project name"]}
                            github={eachItem["GitHub Link"]}
                            link={eachItem["Project Link"]}
                            technologies={eachItem["Tech Stack"]}
                        />
                        <Description
                            text={eachItem.Summary}
                        />
                        <MainImage
                            images={eachItem["Screenshots or animated GIFs"]}
                        />
                        <Authentication 
                            data={eachItem["Sample Login Details"]}
                        />
                        <Goal
                            text={eachItem["Project Purpose and Goal"]}
                        />
                        <WebStack
                            tech={eachItem["Tech Stack"]}
                            info={eachItem["Web Stack and Explanation"]}
                        />
                        <ThoughtProcess
                            text={eachItem["Problems and Thought Process"]}
                        />
                        <LessonLearnt
                            text={eachItem["Lesson Learned"]}
                        />
                    </div>
                )
            }
            
        </Layout>
        
    )
};

export default PortfolioDetail;
