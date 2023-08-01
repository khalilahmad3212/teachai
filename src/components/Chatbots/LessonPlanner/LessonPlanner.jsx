import React, { useContext, useState } from 'react'

import ChatForm from './ChatForm'
import axios from 'axios'

import Loading from './Loading'
import { backend_url } from '../../../util/variables'
import Header from '../Header'

const LessonPlanner = () => {


    const [answer, setAnswer] = useState([])
    const [prompt, setPrompt] = useState(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        let data = {
            prompt
        }

        setPrompt('')

        try {
            let res = await axios.post(`${backend_url}/lessonplanner`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (res.statusText === 'OK') {

                console.log('Here is the answer: ', res.data.answer);

                setAnswer([...answer, res.data.answer])



                setLoading(false)

                // alert('Here is your response with modification')
            }
        } catch (error) {
            console.log("error: ", error?.response?.data);
            alert('Error While fetching response for LessonPlanner!')
            setLoading(false)
        }

    }

    return (
        <div className='border-b-2 border-black pb-24'>
            <div className=' flex flex-col md:flex-row gap-5'>

                <div className='border-r border-secondary max-w-[350px]'>
                    <Header
                        heading={'General Lesson Planner'}
                        desc={'Which teachers assistance would you like?'}
                    />

                    <hr className='h-[2px] bg-secondary' />

                    <ChatForm setAnswer={setAnswer} setLoading={setLoading} setMessage={setMessage} />

                </div>

                <div className='max-h-[90vh] pb-5 flex flex-1 gap-3'>
                    <div className={`flex-[2] ${answer.length > 0 ? 'border-r border-black' : ''}`}>
                        <div className=' border-b-2 flex gap-3'>
                            <button className=' bg-slate-300 px-4 py-2'>Output</button>
                            <button className=' px-4 py-2'>History</button>
                        </div>
                        {
                            (answer.length > 0) ? (
                                <div>
                                    <div className='relative'>

                                        <div className='overflow-y-scroll h-[70vh] pr-4 pt-4'>
                                            {
                                                answer.map((el, i) => (
                                                    <>
                                                        <div key={i} dangerouslySetInnerHTML={{ __html: el }} />
                                                        {
                                                            ((i !== answer.length - 1) && (answer.length > 1)) && <h4 className='mt-20 mb-3 text-xl font-bold'>{`Modification(${i})`}</h4>
                                                        }
                                                    </>
                                                ))
                                            }
                                        </div>
                                        {
                                            loading && (
                                                <Loading message={message} />
                                            )
                                        }
                                    </div>

                                    <form
                                        onSubmit={handleSubmit}
                                        className='flex gap-4 mt-10'
                                    >
                                        <input
                                            type="text"
                                            className='w-full px-3 h-10'
                                            name='prompt'
                                            placeholder='Write your prompt...'
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)} />
                                        <button
                                            className='px-3 py-1 rounded-md border-2 text-white bg-[#ed7742]'
                                            disabled={prompt ? false : true}
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            )
                                : (
                                    <div className=' flex justify-center items-center w-full h-full relative'>
                                        <p>Try variaty of inputs and input lengths to get the best results</p>
                                        {
                                            loading && <Loading message={message} />
                                        }
                                    </div>
                                )

                        }
                    </div>
                    {
                        (answer.length > 0) && (
                            <div className='flex-[0.75]'>
                                <h2 className=' text-2xl font-bold mb-5'>
                                    Follow Up Prompts
                                </h2>
                                <div className='flex items-center'>
                                    <div className=' bg-gray-300 px-8 py-5'>
                                        {
                                            [
                                                'Thanks for the lesson plan! Can you suggest some additional hands-on activities to help students better understand? ',
                                                'Teacher: I appreciate the lesson plan. Can you recommend other videos or multimedia resources that I can use to supplement the lesson? ',
                                                "Thank you for the lesson plan. I'd like to include a short assessment at the end of the lesson to check my students' understanding of the water cycle. Can you provide some sample questions or ideas for the assessment?"
                                            ].map((item, i) => (
                                                <div className=' mb-1'>
                                                    <h4 className=' font-bold'>Example {i + 1}</h4>
                                                    <p className='text-xs'>Teacher: {item}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* <div className='max-w-[1440px] mx-auto overflow-hidden pl-10'>
                <div className=' bg-gray-300 mt-20 px-8 py-5 w-8/12'>
                    {
                        [
                            'Thanks for the lesson plan! Can you suggest some additional hands-on activities to help students better understand? ',
                            'Teacher: I appreciate the lesson plan. Can you recommend other videos or multimedia resources that I can use to supplement the lesson? ',
                            "Thank you for the lesson plan. I'd like to include a short assessment at the end of the lesson to check my students' understanding of the water cycle. Can you provide some sample questions or ideas for the assessment?"
                        ].map((item, i) => (
                            <div className=' mb-4'>
                                <h4 className=' font-bold text-xl'>Example {i + 1}</h4>
                                <p className='text-lg'>Teacher: {item}</p>
                            </div>
                        ))
                    }
                </div>
            </div> */}
        </div>
    )
}

export default LessonPlanner