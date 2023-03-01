import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';

const Discover: NextPage = () => {
  const router = useRouter();
  const { topic } = router.query;

  const activeTopicStyle = 'xl:border-2 hover:bg-primary xl:border-[#00afff] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#00afff]';
  const nonActiveTopicStyle = 'xl:border-2 hover:bg-primary xl:border-[#496e96] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black';

  return (
    <div className='pb-6'>
      <p className='text-[#496e96] font-semibold m-3 mt-4 hidden xl:block'>
        Popular Topics
      </p>
      <div className='flex gap-3 flex-wrap'>
        {topics?.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={topic === item.name ? activeTopicStyle : nonActiveTopicStyle}>
              <span className='font-bold text-2xl xl:text-md '>
                {item.icon}
              </span>
              <span className={`font-medium text-md hidden xl:block capitalize`}>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
