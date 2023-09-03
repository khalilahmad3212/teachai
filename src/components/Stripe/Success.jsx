import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Success = () => {

  // useEffect(() => {
  //   toast("Payment is Successful!")


  // }, [])

  return (
    <div className=' h-screen w-full relative flex justify-center items-center'>

      <div className=' absolute left-0 top-0 right-0 bottom-0 bg-black opacity-25'></div>

      <div className=' flex flex-col px-5 py-8 justify-between z-10 w-[700px] h-[400px] bg-white shadow-lg rounded-lg '>
        <div>
          <h3 className=' text-4xl font-bold mb-4'>Your Payment is Successful!</h3>
          <p >Thank You!</p>
        </div>
        <div className='flex gap-5 justify-end'>
          <Link to="/" >
            <button className='bg-primary px-6 py-3 rounded-md border-2 text-white border-primary'>
              Go To Home
            </button>
          </Link>

          <Link to="/user/dashboard/chatbots" >
            <button className='px-6 py-3 rounded-md border-2 text-white bg-[#ed7742]'>
              Go To Dashboard
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Success