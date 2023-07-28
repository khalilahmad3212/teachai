import React from 'react'
import Question from './Question'

const FAQ = () => {
    return (
        <div className=' max-w-[1440px] mx-auto'>
            <div className='mx-2 md:mx-5'>

                <h1 className='text-center text-4xl my-10 font-extrabold text-primary'>Frequently Asked Questions</h1>

                <div className=' max-w-[60rem] shadow-2xl bg-secondary shadow-dark px-4 md:px-20 py-20 rounded-lg mx-auto flex flex-col gap-12'>
                    {
                        [
                            {
                                question: 'What is AI Teacher Tool?',
                                answer: 'AI Teacher Tool is an AI-powered educational platform specifically designed to support teachers in their classrooms. Our technology helps streamline tasks, reduce teacher workload, and enhance the teaching and learning experience.'
                            },
                            {
                                question: 'What services does AI Teacher Tool offer?',
                                answer: 'AI Teacher Tool offers a range of tools and services to assist teachers in their educational endeavours. These include curriculum development, lesson planning assistance, classroom management tools, and AI-generated teaching resources.'
                            },
                            {
                                question: 'How does AI Teacher Tool help reduce teacher workload? ',
                                answer: 'AI Teacher Tool reduces teacher workload by automating mundane tasks and providing initial drafts of teaching resources. Our AI engine generates topics for classroom discussions and produces draft materials, saving teachers significant time and effort. It is important to note that teachers review and modify the generated content to ensure accuracy and suitability for their needs.'
                            },
                            {
                                question: 'Is my personal information safe with AI Teacher Tool?',
                                answer: 'Yes, we prioritize the safety and privacy of your personal information. AI Teacher Tool does not share any of your personal information with third parties, including OpenAI. For more details, you can refer to our Privacy Policy.'
                            },
                            {
                                question: 'How does Teach Assist AI work?',
                                answer: 'Teach Assist AI utilizes advanced AI technology to provide teachers with tools and resources for curriculum development, lesson planning, classroom management, and more. Our platform is designed to be intuitive and user-friendly, catering to teachers of all technology comfort levels.',
                            },
                            {
                                question: 'What makes AI Teacher Tool unique compared to other educational platforms?',
                                answer: 'AI Teacher Tool stands out by offering innovative AI-powered solutions specifically designed to address the needs and challenges faced by teachers. Our platform provides personalized support and resources that empower teachers to create engaging and effective learning experiences.',
                            },
                            {
                                question: 'How do I sign up for AI Teacher Tool?',
                                answer: 'Signing up for Teach Assist AI is easy. Simply visit our website and follow the instructions to create your account. From there, you can access our platform and explore the available features and resources.',
                            },
                            {
                                question: 'Does Teach Assist AI offer customer support?',
                                answer: 'Yes, we have a dedicated customer support team ready to assist you with any questions or issues you may have. We provide various support options, including email, phone, and live chat, to ensure you receive the assistance you need.',
                            },
                            {
                                question: 'Can I try Teach Assist AI before committing to a paid plan?',
                                answer: 'Yes, we offer a 7-day free trial period for users to experience the benefits of our platform and explore its features. This allows you to test our AI-powered assistance and determine its suitability for your needs before making a commitment.'
                            },
                            {
                                question: 'How does Teach Assist AI contribute to enhanced student success?',
                                answer: 'Teach Assist AI provide teachers with the necessary tools and resources to create engaging and effective learning experiences. By optimizing teacher workflows and freeing up time for meaningful interactions with students, our platforms contribute to improved learning outcomes and student success.'
                            },
                            {
                                question: 'What are the key features of Teach Assist AI?',
                                answer: 'Teach Assist AI offer various features, including AI-generated lesson plan templates, curriculum development tools, interactive classroom activities, and inclusive education strategies. These features are designed to empower teachers and enhance the educational process.'
                            },
                            {
                                question: 'How does Teach Assist AI ensure data security?',
                                answer: 'We prioritize the security of your data. AI Teacher Tool employ the latest encryption technologies and follow strict data protection protocols to keep your information safe and secure.'
                            },
                            {
                                question: 'Is Teach Assist AI a suitable solution for schools? ',
                                answer: "Absolutely! We offer a dedicated plan designed specifically for schools. With this plan, up to 20 teachers can gain access to Teach Assist AI. Additionally, we provide the option to white-label the tool, allowing you to customize it according to your school's branding and requirements. Our flexible approach ensures that the tool can be tailored to meet your unique needs and preferences.",
                            },
                        ].map((el, i) => (
                            <Question key={i} question={el.question} answer={el.answer} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ