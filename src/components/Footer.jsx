import React from 'react'

import logo from '../images/logo.png'
import facebook from '../images/Icons/facebook.svg'
import insta from '../images/Icons/insta.svg'
import linkedin from '../images/Icons/linkedin.svg'
import twitter from '../images/Icons/twitter.svg'

import { Link } from 'react-router-dom'

import { site } from '../util/variables'

const Footer = () => {

    return (
        <div className='max-w-[1440px] mx-auto md:mt-20 border-t-2 pt-10 pb-5'>
            <footer className=' mx-10 md:mx-20 flex flex-col-reverse md:flex-row justify-between gap-5'>
                <div style={{ flex: 2 }}>
                    <div className=''>
                        <Link to='/'>
                            {/* <div className='text-3xl ml-8 tracking-wider'>Khalil Ahmad</div> */}
                            <img src={logo} className='h-8 ' alt="logo" />
                        </Link>
                        <p
                            className=' mt-10 md:mr-20 text-sm text-justify text-secondary'>
                                Teach Assist AI is your dedicated personal assistant, enhancing your efficiency and productivity as an educator. Our advanced AI engine handles all the mundane tasks, liberating your time to focus on what truly counts – teaching, learning, and fostering authentic connections with your students.
                            Experience the freedom to prioritize what matters most, while Teach Assist AI streamlines your workload and empowers you to create impactful educational experiences.
                        </p>
                        <div className="flex gap-5 my-5">

                            {
                                [facebook, insta, linkedin, twitter].map((el, i) => (
                                    <img src={el} alt="Icon" />
                                ))
                            }
                        </div>
                        <div className='flex-nowrap'>
                            CopyRight 2023 Business Name
                            |
                            <Link
                                className='underline text-blue-600 mx-2'
                                to={(site ? site : '') + "/privacy"}
                            >
                                Privacy
                            </Link>
                            |
                            <Link
                                className='underline text-blue-600 ml-2'
                                to={(site ? site : '') + "/terms"}
                            >
                                Terms
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='flex-1'></div>
                <div className='flex-1'></div>

                <div className='block flex-1'>
                    <div className=''>
                        <h1 className='text-4xl mb-5'>Company</h1>
                        <ul className='pl-2'>
                            <ul className='flex flex-col gap-3'>

                                {
                                    [
                                        { text: 'About Us', url: '/about' },
                                        { text: 'Blogs', url: '/blogs' },
                                        { text: 'FAQ', url: '/faq' },
                                        { text: 'Affliate Program', url: '/affliate' },
                                        { text: 'Pricing', url: '/pricing' },
                                        { text: 'Contact Us', url: '/contact' },
                                    ].map((el, i) => (
                                        <li key={i}><Link to={(site ? site : '') + el.url} className='text-md tracking-wide hover:text-primary hover:border-secondary'>{el.text}</Link></li>
                                    ))
                                }
                            </ul>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer