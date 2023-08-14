import React from 'react'
import Grid from './Grid'
// import Desktop from '../SVGs/Desktop'
// import Data from '../SVGs/Data'
// import Control from '../SVGs/Control'
// import Together from '../SVGs/Together'
// import Circle from '../SVGs/Circle'
// import Managment from '../SVGs/Managment'

import bot1 from '../../images/bots/1.Lesson Planning - Lisa.png'
import bot2 from '../../images/bots/2.Quiz - Qasim.png'
import bot3 from '../../images/bots/3.Automated Essay Scoring and Feedback - Elsa.png'
import bot4 from '../../images/bots/4.Comprehension Lesson Generator - Cara.png'
import bot5 from '../../images/bots/5.Maths Quiz - Matthew.png'
import bot6 from '../../images/bots/6.Math Lesson Planner - Lucy .png'

import history from '../../images/history.jpg'

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const data = [
    { title: 'General Assistant', description: '4,729 curated designresources to energize your creative workflow', icon: bot1 },
    { title: 'Super Smart Search', description: "4,729 curated design resources to energize your creative workflow", icon: bot2 },
    { title: "Control everything in one place", description: '4,729 curated designresources to energize your creative workflow', icon: bot3 },
    { title: "Work better together", description: '4,729 curated designresources to energize your creative workflow', icon: bot4 },

    { title: "24/7 Live Customer Support", description: '4,729 curated designresources to energize your creative workflow', icon: bot5 },

    { title: 'Project Management', description: '4,729 curated designresources to energize your creative workflow', icon: bot6 },
    // { title: 'Protect Your Data', description: '4,729 curated designresources to energize your creative workflow', icon: <Desktop /> },
    // { title: 'Protect Your Data', description: '4,729 curated designresources to energize your creative workflow', icon: <Desktop /> },
]

const Teachers = () => {
    return (
        <div className=' max-w-[1440px] mx-auto'>

            <Helmet>
                <meta charSet="utf-8" />
                <title>AI Teachers | Teach Assist AI</title>
            </Helmet>
            <div className='flex flex-col-reverse md:flex-row items-center mt-5 md:py-20 px-3 md:px-10 rounded-2xl'>
                <div className='flex-1'>
                    <div className='md:mx-8 pt-8 md:pt-0'>

                        <h1 className=' text-center md:text-start text-3xl md:text-4xl mb-6 mt-2  font-extrabold text-secondary md:leading-[3.4rem]'>
                            How can these AI Teachers help you?
                        </h1>

                        <p className='text-gray-700 text-md md:text-xl md:pr-32 text-justify'>
                            Our AI teachers revolutionize the process of creating outstanding classroom materials, freeing you from the burden of extensive research and design. Simply provide the desired topic, and our app will generate a diverse range of resources, including lesson plans, activities, worksheets, and more. With AI teachers at your disposal, preparing engaging materials has never been easier.
                        </p>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={history} alt="History" className='rounded-[1rem]' />
                </div>
            </div>

            <div>
                <Grid
                    title="Lesson Planning"
                    data={data}
                    description={"With our AI teachers, lesson planning is effortless. Just give us the topic, and we'll generate engaging lesson plans, activities, and worksheets. Spend less time on research and design, and more on delivering impactful instruction. Experience the revolution in lesson planning with AI."}
                />
                <Grid
                    title="Communication & Professional Learning"
                    data={data}
                    description={"AI teachers also greatly benefit communication and professional learning. These intelligent bots facilitate seamless collaboration among educators, eliminating communication barriers and enabling efficient sharing of ideas and resources. Additionally, AI-powered platforms offer personalized professional development opportunities, providing tailored learning materials and insights for continuous growth. With these AI teachers, educators can enhance communication channels and engage in targeted professional learning, fostering a culture of collaboration and ongoing professional advancement."}
                />
                <Grid
                    title="Special Education & Inclusive Practice"
                    data={data}
                />
                <Grid
                    title="Student Engagement & Activity Ideas"
                    data={data}
                    description={"With our AI teachers, special education and English as a second language (ESL) instruction are revolutionized. These intelligent bots provide personalized support and resources to meet the unique needs of students in these areas. With our AI teachers, educators gain access to specialized strategies, adaptive materials, and personalized interventions, enhancing their ability to support students with special education requirements or those learning English as a second language. Leveraging AI technology, special education and ESL instruction become more effective and accessible, ensuring every student receives the necessary support for academic success."}
                />
                <Grid
                    title="Digital Learning & Teaching Tools"
                    data={data}
                    description={"Our AI teachers revolutionize digital learning and teaching tools. With their advanced capabilities, educators gain access to a wide range of interactive resources and platforms. From virtual simulations to personalized learning tools, AI teachers enhance engagement and cater to diverse learning needs. Experience the transformative power of AI in education."}
                />
                <Grid
                    title="Assessment & Progress Monitoring"
                    data={data}
                    description={"With our AI teachers, assessment and progress monitoring are transformed. These advanced bots offer efficient and accurate assessment tools, automated grading systems, and personalized feedback. Educators can track student progress effectively and make data-driven decisions to support growth. Embrace the power of AI teachers for streamlined assessment and monitoring of progress."}
                />

                <div className='flex justify-center'>
                    <Link to='/pricing'>
                        <button
                            className='bg-primary px-6 py-3 rounded-md border-2 text-white border-primary font-semibold'>
                            Start Your 7-Day Free Trial
                        </button>
                    </Link>
                </div>
                <h4 className='text-center  my-7 font-semibold text-xl text-primary'>
                    No payment information needed, Change Plans Anytime. Cancel at any time
                </h4>
            </div>
        </div>
    )
}

export default Teachers