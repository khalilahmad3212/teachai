import React from 'react'

const Categories = ({ data, setChatbots }) => {

    const handleClick = (category) => {
        if (category === 'All') {
            setChatbots(data)
            return
        }

        let temp = data.filter((e) => e.category?.toLowerCase() === category.toLowerCase())
        setChatbots(temp)
    }

    return (
        <div className='my-5'>
            <div className='flex flex-row gap-4 flex-wrap'>
                {
                    [
                        "All",
                        "Lesson Planning",
                        "Student Engagement & Activity Ideas",
                        "Special Education & Inclusive Practice",
                        "Communication & Professional Learning",
                        "Digital Learning & Teaching Tools",
                        "Assessment & Progress Monitoring"
                    ].map((el, i) => (
                        <div
                            className=' min-w-min border border-secondary rounded-full px-3 cursor-pointer'
                            onClick={() => handleClick(el)}
                        >
                            {el}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories