import Image from 'next/image';
import React from 'react';
import cloudappImg from '../public/assets/projects/cloudapp.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const CloudApp = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cloudappImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Cloud App</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This application was meticulously crafted using a combination of cutting-edge technologies,
            including React JS, JavaScript, and Tailwind CSS. This exciting project provided me with a 
            unique opportunity to delve into the world of web development, where I not only gained 
            proficiency in these foundational technologies but also explored the capabilities of React 
            Router DOM for the very first time.

            Through this endeavor, I had the chance to conceptualize and develop a multi-page website, allowing me 
            to apply my newfound knowledge in a practical and impactful manner. As a result, I honed my skills in 
            front-end development, expanded my understanding of React's component-based architecture, and enhanced 
            my ability to create dynamic and engaging user interfaces.

            In summary, this project was a pivotal step in my journey as a developer, enabling me to harness the 
            power of React, JavaScript, and Tailwind CSS to construct a feature-rich, multi-page website while also 
            acquainting myself with the versatile React Router DOM library.
          </p>
          <a
            href='https://github.com/shamkapable/cloud.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://cloud-sable.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default CloudApp;
