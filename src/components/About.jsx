import React from 'react'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import typescript from '..//assets/typescript.png'
import figma from '..//assets/Figma.png'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-purple-700 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                        A Full-Stack Developer with a strong background in web development and WordPress, adept at leveraging various modern technologies to create engaging and efficient web applications.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-3xl font-semibold text-gray-900'>My Journey</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                I began my path in web development driven by a desire to create intuitive and scalable applications. Proficient in various technologies, I have developed projects like a Lamoda clone and a note-taking app, showcasing my ability to integrate powerful backend solutions with sleek, user-friendly frontend designs.
                                My experience in these projects has deepened my understanding of full-stack development and enhanced my problem-solving skills.
                                </p>
                               
                            </div>
                            <div className='border border-purple-500 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-purple-700'>
                                <h3 className='text-2xl font-semibold text-purple-700'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={ReduxLogo} alt="" className='w-8' />
                                        <span className='font-semibold'>Redux</span>
                                    </div>
                                    <div className='border border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={Bootstrap} alt="" className='w-10' />
                                        <span className='font-semibold'>Bootstrap</span>
                                    </div>
                                    <div className='border border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={NodeLogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Node Js</span>
                                    </div>
                                    <div className='border  border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={typescript} alt="" className='w-10'/>
                                        <span className='font-semibold'>TypeScript</span>
                                    </div>
                                    <div className='border  border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-700'>
                                        <img src={figma} alt="" className='w-10'/>
                                        <span className='font-semibold'>Figma</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-3xl font-semibold text-gray-900 mt-4'>More About Me</h3>
                        <h1 className='text-2xl font-semibold text-gray-900 mt-4'>Education</h1>
                        <p className='mt-4 text-lg text-gray-600'>
                        I studied at Belarusian State University, majoring in Mechanics and Mathematics, which provided me with a strong analytical foundation.
                        </p>
                        <h1 className='text-2xl font-semibold text-gray-900 mt-6'>Freelance Experience</h1>
                        <p className='mt-4 text-lg text-gray-600'>
                        In addition to my studies, I have gained valuable experience working as a freelancer, allowing me to refine my skills and tackle diverse projects.
                        </p>
                        <h1 className='text-2xl font-semibold text-gray-900 mt-6'>Languages</h1>
                        <p className='mt-4 text-lg text-gray-600'>
                        Russian: Native<br />
                        English: B2
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About