import React, { useContext, useEffect, useState } from 'react'
import Productivity from './components/SideBots/Productivity'
import { Link, useLocation } from 'react-router-dom'

import './Aside.css';
import { UserContext } from '../../context/UserContext';
import AsideCategories from './components/AsideCategories';
import { toast } from 'react-toastify';
import api from '../../util/api';

const Aside = ({ selectedCategory, setSelectedCategory }) => {
    const { pathname } = useLocation();

    const { logout } = useContext(UserContext)

    console.log('PathNam: ', pathname);

    const [usage, setUsage] = useState(null);

    const fetchUsage = async () => {
        try {
            const { data } = await api.get('/getUsage');
            const { usage } = data
            setUsage(usage)
            // console.log('Usage: ', usage);
            // toast("Got the usage Data")
        } catch (error) {

            toast("Error Usage Data")
        }
    }
    useEffect(() => {
        fetchUsage();
    }, [])

    return (
        <aside className="absolute left-0 top-0 right-0 bottom-0 ">
            <div className="">
                <ul className="space-y-2 md:space-y-4 grid grid-cols-1">
                    {/* <li>
                        <Link to="/user/dashboard" className={`flex items-center rounded-xl font-bold text-sm text-yellow-900 py-3 px-4`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-2" viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                            </svg>
                            Dashboard
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/user/dashboard/history" className={`flex rounded-xl font-bold text-sm text-gray-900 py-3 px-4`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-2" viewBox="0 0 16 16">
                                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                            </svg>
                            History (chats)
                        </Link>
                    </li>
                    <li className=''>
                        <Link to="/user/dashboard/chatbots" className={`flex rounded-xl font-bold text-sm text-gray-900 py-3 px-4`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-2" viewBox="0 0 16 16">
                                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                            </svg>
                            Chatbots
                        </Link>
                        {/* {
                            <div className=' pl-3 pr-2 overflow-y-scroll h-[40vh]'>
                                <Productivity />
                            </div>
                        } */}
                        {/* <AsideCategories /> */}
                    </li>

                    <li>
                        <Link to="/user/dashboard" className={`flex items-center rounded-xl font-bold text-sm text-yellow-900 py-3 px-4`}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-2" viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                            </svg>
                            Credits
                        </Link>
                        {/* <br /> */}
                        <div className=' mx-4 mt-2'>
                            <div className="text-end">{usage?.plan}</div>
                            <div className=' h-3 border border-blue-400 rounded-full overflow-hidden'>
                                <div className={`bg-blue-500 h-full w-[${(usage?.usageCount * 100) / usage?.usageLimit}]`}></div>
                            </div>
                            <p className=' text-blue-600 font-bold text-xs mt-2'>
                                { usage?.usageCount === 1 ? "No daily credits used" : `${usage?.usageCount - 1} Credits Used`}
                            </p>
                        </div>
                    </li>

                    <li>
                        <Link to="/user/dashboard" className={`flex items-center rounded-xl font-bold text-sm text-yellow-900 py-3 px-4`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-2" viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                            </svg>
                            Settings
                        </Link>
                    </li>

                    <li>
                        <div onClick={logout} className={`flex items-center rounded-xl font-bold text-sm text-yellow-900 py-3 px-4 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-2" viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                            </svg>
                            Logout
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside