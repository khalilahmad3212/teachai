import axios from 'axios';
import React, { useState } from 'react'
import api from '../../../util/api';
import { useContext } from 'react';
import { UsageContext } from '../../../context/UsageContext';
import { toast } from 'react-toastify';
import { ChatbotContext } from '../../../context/ChatbotContext';


const ChatForm = ({ setAnswer, setLoading, setChatID }) => {

    const [data, setData] = useState({ language: 'English' })

    const { fetchUsage } = useContext(UsageContext);
    const { videoUrl, setVideoURL, setLanguage } = useContext(ChatbotContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        setLoading(true)
        let _body = {
            body: data
        }

        try {
            let res = await api.post(`/chatbot/video/summarize`, _body)

            console.log('Response from chatform: ', res);
            console.log('Here is the answer: ', res.data.answer);
            setChatID(res.data.chat_id)
            setAnswer([{ answer: res.data.answer }])
            setLoading(false)
            fetchUsage();

        } catch (error) {

            if (error?.response?.status === 429) {
                toast(error?.response?.data?.error)
            }
            if (error?.response?.status === 504) {
                toast("Gateway Timeout, Try Again")
            }
            console.log('Error: ', error);
            setLoading(false)

        }

    }

    const handleChange = (e) => {

        const { name, value } = e.target

        setData({
            ...data,
            [name]: value
        })
    }
    return (
        <div className='mr-4'>
            <form onSubmit={handleSubmit} className='mt-10'>

                <div className='flex flex-col mb-5'>
                    <label htmlFor="summary" className='font-medium'>
                        Video URL
                    </label>
                    <input
                        type="text"
                        id='summary'
                        placeholder='Add Youtube video link here'
                        name='url'
                        onChange={(e) => {
                            handleChange(e);
                            setVideoURL(e.target.value)
                        }}
                        value={videoUrl}
                        className='px-2 h-8 rounded border  bg-white outline-none'
                    />
                </div>

                {/* <div className='flex flex-col mb-5'>
                    <label htmlFor="gradeLevel" className='font-medium'>
                        Grade Level
                    </label>
                    <input
                        type="text"
                        id='gradeLevel'
                        name='gradeLevel'
                        onChange={handleChange}
                        className='px-2 h-8 rounded border  bg-white outline-none'
                    />
                </div> */}

                {/* <div className='flex flex-col mb-5'>
                    <label htmlFor="lessonDuration" className='font-medium'>
                        Lesson Duration
                    </label>
                    <input
                        type="text"
                        id='lessonDuration'
                        name='lessonDuration'
                        onChange={handleChange}
                        className='px-2 h-8 rounded border  bg-white outline-none'
                    />
                </div> */}

                {/* <div className='flex flex-col mb-5'>
                    <label htmlFor="subject" className='font-medium'>
                        Subject
                    </label>
                    <input
                        type="text"
                        id='subject'
                        name='subject'
                        onChange={handleChange}
                        className='px-2 h-8 rounded border  bg-white outline-none'
                    />
                </div> */}

                {/* <div className='flex flex-col mb-5'>
                    <label htmlFor="keyLearning" className='font-medium'>
                        Key Learning Intention
                    </label>
                    <input
                        type="text"
                        id='keyLearning'
                        name='keyLearning'
                        onChange={handleChange}
                        className='px-2 h-8 rounded border  bg-white outline-none'
                    />
                </div> */}

                <div className='flex flex-col mb-5'>
                    <label htmlFor="language" className='font-medium'>
                        Language
                    </label>
                    <input
                        type="text"
                        id='language'
                        name='language'
                        placeholder='English'
                        value={data?.language}
                        onChange={(e) => {
                            handleChange(e);
                            setLanguage(e.target.value)
                        }}
                        className='px-2 h-8 rounded border  bg-white outline-none'
                    />
                </div>

                <div>
                    <button className='px-5 py-2 rounded-lg bg-secondary text-white'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default ChatForm