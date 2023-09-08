import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cloudappImg from '../public/assets/projects/cloudapp.png';
import abujaImg from '../public/assets/projects/abuja.png'
import dashboardImg from '../public/assets/projects/dashboard.png'
import qouteImg from '../public/assets/projects/qoute.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Cloud App'
            backgroundImg={cloudappImg}
            projectUrl='/cloudapp'
            tech='React JS'
          />
          <ProjectItem
            title='Abuja Vacation Guide'
            backgroundImg={abujaImg}
            projectUrl='/abuja'
            tech='React JS'

          />
          <ProjectItem
            title='Dashboard'
            backgroundImg={dashboardImg}
            projectUrl='/dashboard'
            tech='React JS'

          />
          <ProjectItem
            title='Random Quote App'
            backgroundImg={qouteImg}
            projectUrl='/quote'
            tech='Bootstrap'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
