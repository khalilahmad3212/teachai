import React, { useState } from 'react'
import api from '../../../util/api';
import { useContext } from 'react';
import { UsageContext } from '../../../context/UsageContext'
import { toast } from 'react-toastify';
import { ChatbotContext } from '../../../context/ChatbotContext';

const ChatForm = ({ setAnswer, setPlagAnswer, setLoading, chatID, setChatID, plag, setPlag, detect, setDetect }) => {

    const [data, setData] = useState({ language: "English" })


    const [selectedFile, setSelectedFile] = useState(null);


    const { fetchUsage, usage } = useContext(UsageContext)
    const { setLanguage } = useContext(ChatbotContext)

    const handleFileChange = (e) => {
        console.log('File selected: ', e.target.files[0]);
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!detect && !plag) {
            toast("Select the options SetectAI/Plagirism")
            return;
        }
        console.log(data);
        setLoading(true)


        const formData = new FormData();
        console.log('File Selected: ', selectedFile);
        formData.append('file', selectedFile);
        // console.log(data);
        formData.append('body', JSON.stringify(data));
        // console.log(formData.get('body'));

        // Override the Content-Type for this request
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the desired Content-Type
            },
        };

        let detectAnswer = ''
        let plagAnswer = ''

        try {
            for (var pair of formData.entries()) {
                console.log(pair[0]);
                console.log(pair[1]);
            }
            console.log(formData);
            if (detect) {
                if (chatID) {
                    formData.append('chat_id', chatID)
                }
                let { data } = await api.post(`/chatbot/detectai`, formData, config)
                setChatID(data.chat_id)
                detectAnswer = data.answer;
                console.log('Detect Answer: ', data.answer);
                if (!plag) {
                    setAnswer((prev) => [...prev, { answer: data.answer }])
                    setLoading(false)
                    fetchUsage();
                    return;
                }
            }



            if (plag) {
                try {
                    if (chatID) {
                        formData.append('chat_id', chatID)
                    }
                    let { data } = await api.post(`/chatbot/plagirism`, formData, config)
                    setChatID(data.chat_id)
                    plagAnswer = data.answer[0]
                    console.log('Plag Data: ', data.answer[0]);
                    console.log('Number Check: ', data.answer[0].match(/d+/)[0]);
                    alert('Here is data for plag')

                } catch (error) {
                    alert('error')
                }
            } else {
                alert("plag is: ", plag)
                return;
            }

            setAnswer((prev) => [...prev, { answer: detectAnswer }])
            setPlagAnswer((prev) => [...prev, { answer: plagAnswer }])

            setLoading(false)
            fetchUsage();
        } catch (error) {

            if (error?.response?.status === 429) {
                toast(error?.response?.data?.error)
            }
            console.log('Error: ', error);
            setLoading(false)

        }

    }

    const generateRubric = async () => {

        let _body = {
            body: {
                essay_question: data.question,
                grade: data.grade
            }
        }

        try {
            let res = await api.post(`/gradeEssay/rubric`, _body)

            if (res.statusText === 'OK') {

                console.log('Response from ChatFrom/Rubric: ', res);
                console.log('Here is the Rubric: ', res.data.rubric);
                // setChatID(res.data.chat_id)
                // setAnswer([{ answer: res.data.answer }])
            }
        } catch (error) {
            console.log('Erro While Rubric Generation');
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

                {/* <div className='flex flex-col mb-5'>
                    <label htmlFor="gradeLevel" className='font-medium'>
                        Grade Level
                    </label>
                    <input
                        type="text"
                        id='grade'
                        name='grade'
                        onChange={handleChange}
                        className='px-2 h-8 rounded border  bg-white outline-none'
                    />
                </div> */}

                {/* <div className='flex flex-col mb-5'>
                    <label htmlFor="question" className='font-medium'>
                        Question
                    </label>
                    <input
                        type="text"
                        id='question'
                        placeholder='Type here'
                        name='question'
                        onChange={handleChange}
                        className='px-2 h-8 rounded border  bg-white outline-none'
                    />
                </div> */}


                <div className='flex flex-col mb-5'>

                    <label
                        htmlFor="essayContent"
                        className="block mb-2 text-sm font-medium text-gray-900">
                        Content
                    </label>
                    <textarea
                        id="essayContent"
                        rows="4"
                        name='text'
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Add content here or attach file"
                        onChange={handleChange}
                    >
                    </textarea>
                    {
                        (usage?.noOfFilesUploaded !== usage?.noOfFilesUploadedLimit) ? (
                            <input class="block mt-2 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"
                                accept='.pdf, .doc, .docx'
                                onChange={handleFileChange}
                            />
                        ) : (
                            <input class="block mt-2 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"
                                disabled
                            />
                        )
                    }
                    {/* <input class="block mt-2 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"
                        accept='.pdf'
                        onChange={handleFileChange}
                    /> */}
                </div>

                {/* <div className='flex flex-col mb-5'>
                    <label
                        htmlFor="essayContent"
                        className="block mb-2 text-sm font-medium text-gray-900">
                        Rubric
                    </label>
                    <textarea
                        id="essayContent"
                        rows="4"
                        name='rubric'
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                        onChange={handleChange}
                    >
                    </textarea>
            */}
                <div className=' flex flex-col gap-1 mb-5'>
                    <label htmlFor="detectai" className='flex gap-2 cursor-pointer'>
                        <input type="checkbox" id='detectai' onChange={(e) => {
                            if (e.target.checked) {
                                setDetect(true)
                            } else {
                                setDetect(false)
                            }
                        }} />
                        Detect AI
                    </label>
                    <label htmlFor="plagirism" className='flex gap-2 cursor-pointer'>
                        <input type="checkbox" id='plagirism' onChange={(e) => {
                            if (e.target.checked) {
                                setPlag(true)
                            } else {
                                setPlag(false)
                            }
                        }} />
                        Plagirism
                    </label>
                </div>

                {/* </div> */}


                {/* <div className='flex flex-col mb-5'>
                    <label htmlFor="rubric" className='font-medium'>
                        Custom Rubric
                    </label>
                    <input
                        type="text"
                        id='rubric'
                        name='rubric'
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
            {/* <button className=' bg-blue-300 max-w-max px-2 py-2' onClick={generateRubric}>Generate Rubric</button> */}
        </div>
    )
}

export default ChatForm