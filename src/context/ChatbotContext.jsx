import { createContext, useState } from "react";


// bots images
import  _1_LessonPlanning from '../images/bots/1.Lesson Planning - Lisa.png'
import _2_Quiz from '../images/bots/2.Quiz - Qasim.png'
import _3_AutomatedEssay from '../images/bots/3.Automated Essay Scoring and Feedback - Elsa.png'
import _4_ComprehensionLesson from '../images/bots/4.Comprehension Lesson Generator - Cara.png'
import _5_MathsQuiz from '../images/bots/5.Maths Quiz - Matthew.png'
import _6_MathLessonPlanner from '../images/bots/6.Math Lesson Planner - Lucy .png'
import _7_VideotoNotes from '../images/bots/7.Video to notes - Vincent .png'
import _8_VideotoQuizBot from '../images/bots/8. Video to Quiz Bot.png'
import _9_DetectAI from '../images/bots/9.Detect AI-Writing & Plagiarism - Ali.png'
import _10_PowerPoint from '../images/bots/10.PowerPoint Presentation - Priyanka .png'


const data = [
    {
        title: 'Lesson Planning',
        description: '4,729 curated designresources to energize your creative workflow',
        icon: _1_LessonPlanning,
        name: 'Lisa',
        url: 'lesson-planner',
        category: 'Lesson Planning'
    },
    {
        title: 'Math Quiz',
        description: "4,729 curated design resources to energize your creative workflow",
        icon: _2_Quiz,
        name: "Qasim",
        url: "quiz",
        category: 'Student Engagement & Activity Ideas'
    },

    {
        title: "Automated Essay Scoring and Feedback",
        description: '4,729 curated designresources to energize your creative workflow',
        icon: _3_AutomatedEssay,
        name: 'Elsa',
        url: 'essay',
        category: 'Assessment & Progress Monitoring'
    },
    {
        title: 'Comprehension Lesson Generator',
        description: '4,729 curated designresources to energize your creative workflow',
        icon: _4_ComprehensionLesson,
        name: 'Cara',
        url: 'lessonComp',
        category: 'Lesson Planning'
    },
    {
        title: 'Maths Quiz',
        description: "4,729 curated design resources to energize your creative workflow",
        icon: _5_MathsQuiz,
        name: 'Matthew',
        url: 'mathquiz',
        category: "Student Engagement & Activity Ideas"
    },
    {
        title: "Math Lesson Planner",
        description: '4,729 curated designresources to energize your creative workflow',
        icon: _6_MathLessonPlanner,
        name: 'Lucy',
        url: 'math-lesson-planner',
        category: 'Lesson Planning'
    },
    {
        title: "Video to notes",
        description: '4,729 curated designresources to energize your creative workflow',
        icon: _7_VideotoNotes,
        name: 'Vincent',
        url: 'video-summarize',
        category: 'Digital Learning & Teaching Tools'
    },
    {
        title: "Video to Quiz",
        description: '4,729 curated designresources to energize your creative workflow',
        icon: _8_VideotoQuizBot,
        name: 'Bot',
        url: 'video-to-quiz',
        category: 'Digital Learning & Teaching Tools'
    },
    {
        title: "Detect AI-Writing & Plagiarism",
        description: '4,729 curated designresources to energize your creative workflow',
        icon: _9_DetectAI,
        name: 'Ali',
        url: 'plagrism',
        category: 'Assessment & Progress Monitoring'
    },
    {
        title: "PowerPoint Presentation",
        description: '4,729 curated designresources to energize your creative workflow',
        icon: _10_PowerPoint,
        name: 'Priyanka',
        url: 'powerpoint-presentation',
        category: 'Digital Learning & Teaching Tools'
    }
]

export const ChatbotContext = createContext()


export const ChatbotProvider = ({ children }) => {

    const [chatbots, setChatbots] = useState(data);
    const [selectedCategory, setSelectedCategory] = useState('');


    const filterChatbots = (category) => {
        setSelectedCategory(category);

        if (category === 'All') {
            setChatbots(data)
            return
        }

        let temp = data.filter((e) => e.category?.toLowerCase() === category.toLowerCase())
        setChatbots(temp)
    }

    return (
        <ChatbotContext.Provider value={{
            data,
            chatbots,
            filterChatbots,
            selectedCategory
        }}>
            {children}
        </ChatbotContext.Provider>
    )
}