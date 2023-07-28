import React from 'react'
import { Link } from 'react-router-dom'

const data = [
    {
        title: 'Free',
        subTitle: 'No Credit Payment Needed',
        price: 0,
        teamSize: 1,
        premiumSupport: '6 months',
        freeUpdates: '6 months',
        features: [
            'Access To All Chatbots',
            'Free 5 Chat requests per day',
            '1 member',
            'Write in 30+ languages'
        ]
    },
    {
        title: 'Starter',
        price: 10,
        teamSize: 1,
        premiumSupport: '6 months',
        freeUpdates: '6 months',
        features: [
            'Access to All the Chatbots',
            '60 chat requests per day',
            '1 memeber seat',
            'Write in 30+ languages',
            '24/7 live chat support'
        ]
    },
    {
        title: 'Professional',
        price: 20,
        teamSize: 1,
        premiumSupport: '6 months',
        freeUpdates: '6 months',
        features: [
            'Access to All the Chatbots',
            'Unlimited chat requests per day',
            '1 memeber seat',
            'Write in 30+ languages',
            '24/7 live chat support',
            '2 weeks memory retention of past chats',
            'Extract responses to word document/pdf/google doc/excel'
        ]

    },
    {
        title: 'Enterprise Package',
        price: 99,
        teamSize: 1,
        premiumSupport: '6 months',
        freeUpdates: '6 months',
        features: [
            'Access to All the Chatbots',
            'Unlimited chat requests per day',
            '20 memeber seat',
            'Write in 30+ languages',
            '24/7 live chat support',
            '1 weeks memory retention of past chats',
            'Extract responses to word document/pdf/google doc/excel',
            'Custom bot branding(white labling)'
        ]

    }
]

const Pricing = () => {
    return (
        <div className=' max-w-[1440px] mx-auto'>

            <section class="">

                <div className='my-10'>

                    <h1 className='text-4xl my-8 font-semibold text-center text-secondary'>
                        Ignite Learning, Inspire Excellence!
                    </h1>

                    {
                        [
                            'Welcome to the pricing page for Teach Assist AI, a platform designed specifically for teachers and schools. Our plans are tailored to meet the unique needs of educators at every level, from individual teachers to entire educational institutions. Craft your teaching experience perfectly, analyze student performance effortlessly, and engage with your students authentically using our powerful AI technology.',

                            "We offer a range of plans to accommodate different requirements and budgets. Whether you're a new teacher, an experienced educator, or a school administrator, we have the right plan for you. Additionally, if you have specific needs or require a custom plan, our team is here to collaborate with you and find the best solution. ",

                            "We understand the importance of personalized support in the education sector. If you need any assistance or have questions regarding our plans, please don't hesitate to reach out to us. We're dedicated to helping teachers and schools succeed with Teach Assist AI. "

                            , "Curious about the price? We charge for our Full Access Plan to cover the expenses of providing our AI services. Our API enables us to utilize AI effectively in meeting your teaching requirements. By subscribing to the Full Access Plan, you not only gain unrestricted access to our cutting-edge teaching tools but also contribute to the enhancement of this exceptional service. Your support helps us sustain the API's cost, guaranteeing a reliable and efficient platform for educators. We appreciate your comprehension and backing as we empower teachers and enhance education with Teach Assist AI technology."
                        ].map((el, i) => (
                            <p
                                className='text-lg mx-4 text-justify md:mx-32 mb-5'
                                key={i}>
                                {el}
                            </p>
                        ))
                    }
                </div>

                <div class="py-8 px-4 mx-auto lg:py-16 lg:px-6">

                    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-24">
                        <h2 class="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-primary capitalize">
                            Start your free 7-days trial now!
                        </h2>
                        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            No payment information needed, Change Plans Anytime. Cancel at any time
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-4 md:mx-5 gap-5 gap-y-5">

                        {
                            data.map((el, i) => (
                                <div
                                    class={`flex flex-col py-12 px-4 gap-5 relative md:hover:-top-20 md:hover:shadow-xl md:hover:shadow-gray-400 md:hover:z-10 md:hover:rounded-[2rem] transition-all duration-[2000] max-w-lg text-gray-900 bg-white  rounded-[1.5rem] border-gray-100 border-t border-b`}>

                                    <div className='mb-3 md:mb-12 border-b-2 border-gray-300 pb-1 md:pb-8 relative'>
                                        <h4 className='text-2xl font-semibold opacity-75 '>
                                            {el.title}
                                        </h4>

                                        {
                                            (i === 3) && <h4 className='text-2xl font-semibold opacity-75 md:absolute'>(School)</h4>
                                        }
                                    </div>

                                    <div class="flex items-baseline md:mt-4 mb-2 border-b-2 border-gray-200 pb-6 md:pb-16">
                                        {
                                            (el.price === 0) ? (
                                                <span class="mr-2 text-5xl font-extrabold">
                                                    Free
                                                </span>
                                            ) : (
                                                <>
                                                    <span class="mr-2 text-5xl font-extrabold">
                                                        ${el.price}
                                                    </span>
                                                    <span class="">/month</span>
                                                </>
                                            )
                                        }
                                    </div>



                                    <ul class="mb-8 space-y-4 text-left">
                                        {
                                            el.features.map((el, i) => (
                                                <li class="flex items-start space-x-3">

                                                    <svg class="flex-shrink-0 w-6 h-6 text-white bg-primary rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>{el}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <a href="/" class="text-secondary  font-medium rounded-lg text-sm px-5 py-2.5 text-center border-2 border-secondary hover:bg-secondary hover:text-white">Get started</a>
                                </div>
                            ))
                        }



                    </div>

                    <div className='my-20'>
                        <p className='text-center mb-8 text-primary'>
                            If your desired plan is not shown and you would like to customize a plan, please feel free to contact us
                        </p>
                        <div className='flex justify-center gap-5'>
                            <Link to="/contact">
                                <button className='py-3 px-5 uppercase bg-primary text-white rounded-2xl'>Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing