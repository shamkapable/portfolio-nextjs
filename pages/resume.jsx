import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Shammah | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Shammah Barnabas</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/shammah-barnabas/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/shamkapable'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Talented and innovative web development enthusiast with a keen
          analytical acumen and a drive for innovation. Proven experience
          in orchestrating teams, enhancing organizational efficiency, and
          thriving within dynamic and high-pressure contexts. Proficient in
          devising strategic frameworks and propelling streamlined workflows.
          Possesses a versatile range of analytical proficiencies, coupled with
          adeptness in fostering team synergy and forging meaningful connections.
          A consummate professional, motivated leader, and adept communicator,
          equipped with profound problem-solving capabilities. Demonstrates a
          consistent track record of incisive thinking, creative ideation, and
          the fine-tuning of operational effectiveness.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase

          </p>
         
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Freelance 
            </span>
            <span className='px-2'>|</span>Lagos, Nigeria
          </p>
          <p className='py-1 italic'>Front End Web Developer (2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Research and Learning:

            Staying updated with the latest industry trends, technologies, and best practices.
            Learning new skills and tools to enhance expertise and deliver high-quality work.
            </li>
            <li>
            Client Relationship Management:

            Building and maintaining strong relationships with clients.
            Understanding and addressing client needs and concerns.
            Providing excellent customer service to ensure client satisfaction.
            </li>
            <li>
            Marketing and Self-Promotion:

          Creating and maintaining a professional portfolio showcasing past work.
          Promoting services through social media, personal website, and online profiles.
          Networking with potential clients, collaborators, and fellow professionals.
            </li>
            <li>
            Continuous Learning:

            Participating in online courses, workshops, and training to improve skills.
            Engaging with coding challenges or open-source projects to expand knowledge.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        
       

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Right-Vision Premium Consulting, LTD</span>
            <span className='px-2'>|</span>Katsina, Nigeria
          </p>
          <p className='py-1 italic'>Team Lead, Inovation and Marketing (2019 – 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Curating strategic innovation portfolios and crafting roadmaps
             to fuel growth and catalyze investment.
            </li>
            <li>
            Elevating customer experiences by infusing innovation with value and 
            fostering enduring relationships.
            </li>
            <li>
            Orchestrating proactive execution of innovation initiatives through 
            cross-functional teamwork.

            </li>
            <li>
            Nurturing professional growth within the team through dedicated support and mentorship.
            </li>
            <li>
            Sustaining a customer-centric approach, delivering value, and cultivating enduring 
            relationships through innovation.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
