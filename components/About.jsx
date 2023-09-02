import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in crafting mobile-responsive front-end UI applications that
            seamlessly interact with APIs and backend technologies.
            My passion for learning drives me to explore new technologies,
            embracing the understanding that versatility often yields multiple
            paths to task accomplishment. While my expertise lies in constructing
            front-end applications using HTML, CSS, JavaScript, and React, I also possess
            the agility to swiftly adapt to and master new tech stacks as required.
            My belief centers on the notion that true development excellence lies not in
            tethering to a single language, but in adroitly selecting the optimal tool for every unique task.
          </p>
          <p className='py-2 text-gray-600'>
            With a robust background that encompasses a dynamic blend of professional domains,
             I bring forth a comprehensive skill set honed through diverse experiences. Having 
             navigated the realms of management consulting and accrued valuable years within the 
             marketing landscape, I&#39;ve garnered a deep understanding of strategic analysis and 
             effective communication.

            Furthermore, my journey extends into the commodities sector, where I&#39;ve been intricately
             engaged since 2019. During this time, I&#39;ve had the privilege of serving as a dedicated
              Personal Executive Assistant, directly supporting the CEO of a distinguished commodities 
              company. This role has afforded me invaluable insights into the intricate workings of an 
              industry leader, refining my ability to seamlessly align executive priorities with 
              operational excellence.

            In combining my varied experiences, I&#39;ve developed a unique perspective 
            that blends strategic insight with operational finesse. This fusion not only 
            enhances my ability to drive optimal outcomes but also positions me as a versatile
             professional equipped to thrive in multifaceted environments.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
