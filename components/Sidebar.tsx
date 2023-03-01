import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {FaHome} from 'react-icons/fa'
import {GiCancel} from 'react-icons/gi'
import {FcExpand} from 'react-icons/fc'

import SuggestedAccounts from './SuggestedAccounts';
import Discover from './Discover';
import useAuthStore from '../store/authStore';
const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  const { pathname } = useRouter();
  const { fetchAllUsers, allUsers }: any = useAuthStore();

  const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#00afff] rounded';

  const notActiveLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';

  return (
    <div>
      <div
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <GiCancel /> : <FcExpand/>}
      </div>
      {showSidebar && (
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-[#9db4cc] xl:border-0 p-3 '>
          <div className='xl:pb-4'>
            <Link href='/'>
              <div className={pathname === '/' ? activeLink : notActiveLink}>
                <p className='text-2xl'>
                  <FaHome/>
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>
          </div>
          
          <Discover />
          <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
