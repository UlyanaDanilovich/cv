import React from 'react';
import github from '../assets/Github.png';
import telegram from '../assets/telegram.png';

const Contact = () => {
    return (
        <section id='contact' className='z-50 bg-gray-100 relative py-10 px-5 md:px-0'>
            <div className='mb-16 max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
                        <h2 className='text-3xl font-bold mb-3 text-purple-700'>Get in Touch</h2>
                        <p className='mb-4 text-gray-500'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
                        <div className='flex space-x-4'>
                        <button className='bg-black text-white p-2 rounded-full flex items-center justify-center'>
                                <a href="https://t.me/Danilovich_Uliana" target='_blank'>
                                    <img src={telegram} alt="telegram" className='h-6 w-6' />
                                </a>
                            </button>
                            <button className='bg-black text-white p-2 rounded-full flex items-center justify-center'>
                                <a href="https://github.com/UlyanaDanilovich" target='_blank'>
                                    <img src={github} alt="Github" className='h-6 w-6' />
                                </a>
                            </button>
                        </div>
                    </div>
                    <form className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-purple-500 shadow-lg shadow-purple-700 p-10'> 
                        <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                            <input type="text" id='name' placeholder='Full Name' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                            <input type="email" id='email' placeholder='Email' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                            <textarea id='message' placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
                        </div>
                        <button type="submit" className='bg-purple-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;