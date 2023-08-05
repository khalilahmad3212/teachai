import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { backend_url } from '../../../util/variables';

import Cross from '../../SVGs/Cross'
import Edit from '../../SVGs/Edit'
import Chatbots from './Chatbots';
import { Route, Routes } from 'react-router-dom';
import History from './History';



const Check = () => {
  return (
    <h1>Hello Khalil</h1>
  );
}
const ChatHistory = () => {

  const [posts, setPosts] = useState(null)
  const [post, setPost] = useState(null)


  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [image, setImage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();


    const putData = {
      title,
      shortDescription,
      longDescription,
      image
    };

    try {
      console.log('check');
      let word = /data:image/
      if (!word.test(image)) {
        putData.image = post.image
      }
      console.log('Put Data: ', putData);
      const res = await axios.put((backend_url ? backend_url : '') + `/admin/post/${post._id}`, putData)
      console.log('CHeck the data: ', res);
      if (res.data.success) {
        console.log('Blog post updated successfully');
        alert('Hello updated post')
        // Reset form fields if needed
        setTitle('');
        setShortDescription('');
        setLongDescription('');
        setImage('');
        // setWhich('allposts')
        setPost(null)
        fetchPosts()
      }

    } catch (error) {
      alert('Error')
      console.error('Error creating blog post:', error);
    }
  };


  const fetchPosts = async () => {
    const { data } = await axios.get((backend_url ? backend_url : '') + '/posts')
    setPosts(data.posts)
    console.log('Data: ', data);
  }

  const deletePost = async (id) => {
    try {
      console.log('Going to delete: ', id);
      const { data } = await axios.delete(`http://localhost:4000/api/v1/admin/post/${id}`);
      console.log('Data: ', data);
      if (data.success) {
        let temp = posts.filter((el) => el._id !== id)
        setPosts(temp)
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      // Handle the error (e.g., display an error message)
    }
  };

  useEffect(() => {

    fetchPosts()

  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Chatbots />} />
        <Route path='/:chatbot/*' element={<History />} />
      </Routes>
    </div>
  )
  return (
    <div>
      {
        post ? (
          <div>
            <h1 className='text-center text-4xl font-semibold mb-10'>Create Blog Post</h1>
            <form onSubmit={handleSubmit} className='shadow-2xl max-w-[40rem] mx-auto p-12'>
              <div className='flex flex-col gap-2 mb-6'>
                <label htmlFor="title" className='text-xl'>Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className='rounded-lg h-10 px-2 bg-gray-300'
                />
              </div>
              <div className='flex flex-col gap-2 mb-6'>
                <label htmlFor="shortDescription" className='text-xl'>Short Description:</label>
                <input
                  type="text"
                  id="shortDescription"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  required
                  className='rounded-lg h-10 px-2 bg-gray-300'
                />
              </div>
              <div className='flex flex-col gap-2 mb-6'>
                <label htmlFor="longDescription" className='text-xl'>Long Description:</label>
                <textarea
                  id="longDescription"
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                  required
                  className='rounded-lg px-2 py-2 h-32 bg-gray-300'
                />
              </div>

              <div className='mt-10 flex justify-end'>
                <button type="submit" className='border-2 border-secondary px-5 py-3 bg-transparent hover:bg-primary hover:text-white'>Update Post</button>
              </div>
            </form>
          </div>
        ) : (
          <div className='flex flex-col gap-5'>

            {
              posts?.map((post) => (
                <div className='flex gap-5'>
                  <div className='flex-1 h-28 overflow-hidden bg-cover'>
                    <img src={post.image.url} alt="post" className=' w-full h-full' />
                  </div>
                  <div style={{ flex: 3 }}>
                    <h3 className='text-2xl font-semibold tracking-widest'>{post.title}</h3>
                    <p>{post.shortDescription}</p>
                  </div>
                  <div className='flex-1 flex gap-2'>
                    <div onClick={() => deletePost(post._id)} className=' cursor-pointer'>
                      <Cross />
                    </div>
                    <div onClick={() => {
                      setPost(post);
                      setTitle(post.title);
                      setShortDescription(post.shortDescription);
                      setLongDescription(post.longDescription);
                      setImage(post.image.url)
                    }} className=' cursor-pointer'>
                      <Edit />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default ChatHistory