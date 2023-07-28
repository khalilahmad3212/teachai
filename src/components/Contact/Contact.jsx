import React from 'react'
import Form from './Form'

const Contact = () => {
    return (
        <section className=" max-w-[1440px] mx-auto">
            <div className="py-8 lg:py-16 px-3 md:px-4 mx-auto max-w-screen-md">

                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">
                    Contact Us
                </h2>

                <p className="mb-8 lg:mb-16 text-center sm:text-xl text-secondary">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our business plan? Let us know.
                </p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 md:gap-12 items-center mx-4 md:mx-16 mb-16'>
                <div className='flex-1'>
                    <div className='md:mx-12'>

                        <h1 className=' text-3xl md:text-5xl text-center md:text-start mb-8 font-semibold'>
                            Got a question? Let's chat!
                        </h1>

                        {
                            [
                                "Our support team is here to help you with any questions or concerns you may have, whether it's about using our tool, learning more about our plans or anything else.",

                                "We want to make sure we fully understand your question, so when you fill out this form, don't be afraid to give specifics and any relevant media files. Our support team will get back to you within 24 hours, and we're excited to help you get the most out of Teach Assist AI."
                            ].map((el, i) => (
                                <>
                                    <p className='text-lg text-justify text-secondary'>{el}</p>
                                    <br />
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="flex-1">
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact