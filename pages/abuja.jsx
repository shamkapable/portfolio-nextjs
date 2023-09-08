import Image from 'next/image';
import React from 'react';
import abujaImg from '../public/assets/projects/abuja.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const abuja = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={abujaImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Abuja Vacation Guide</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This amazing app brings together React JS and Tailwind CSS to create a powerful digital tool. What makes it special is its ability to be your go-to guide for Abuja, Nigeria's captivating capital.

            Inside this single-page app, you'll discover a treasure trove of leisure and relaxation spots that have been carefully curated to delight visitors. From must-see landmarks to hidden gems, it showcases all the best experiences the city has to offer, promising unforgettable memories at every turn.

            But that's not all – this app goes the extra mile by helping you find great places to stay. It presents a handpicked selection of top-notch hotels known for their world-class service and mouthwatering cuisine. With a variety of options to choose from, you're sure to find the perfect spot, whether you're looking for a peaceful getaway, an exciting city break, or a culinary adventure.

            In summary, this app isn't just a run-of-the-mill digital guide. It's an immersive experience that celebrates Abuja's beauty and culture while also serving as a reliable companion for travelers seeking the perfect blend of relaxation and adventure. Its user-friendly design and rich content make it an essential tool for anyone exploring this captivating city.
          </p>
          <a
            href='https://github.com/shamkapable/Abuja.com.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://abuja-com.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
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

export default abuja;
