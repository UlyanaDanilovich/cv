import React, { useEffect, useState } from 'react';
import hero from '../assets/Hero.jpg';
import telegram from '../assets/telegram.png';
import Github from '../assets/Github.png';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Full-Stack Developer ";

    useEffect(() => {
        let index = 0;
        const typingDelay = 100; 

        const typeText = () => {
            if (index < fullText.length) {
                setDisplayedText(fullText.substring(0, index + 1)); 
                index++;
                setTimeout(typeText, typingDelay); 
            }
        };

        typeText(); 

        return () => {
            setDisplayedText(''); 
        };
    }, [fullText]); 

    return (
        <section className='relative'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
                    <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
                        <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
                            Hi, It's <span className='text-purple-700'>Ulyana</span>
                        </h1>
                        <p className='md:text-2xl text-xl font-bold mb-4 flex items-center'>
                            <span>I'm a&nbsp; </span>
                            <span className='text-purple-700'>{displayedText}</span>
                        </p>
                        <p className='mb-4'>
                        I am a web developer focused on utilizing modern web technologies to create engaging and functional websites. I strive to deliver solutions that effectively address real-world challenges while ensuring an excellent user experience.
                        </p>
                        <div className='flex space-x-4'>
                            <button className='bg-black text-white px-3 py-2 w-max rounded-md'>
                                <a href="/Resume.pdf" download target='_blank'>Download CV</a>
                            </button>
                            <button className='bg-black text-white px-3 py-2 w-max rounded-md'>
                                <a href="#contact">Contact me</a> 
                            </button>
                        </div>
                        <div className='flex space-x-4'>
                            <button className='bg-black text-white p-2 rounded-full flex items-center justify-center'>
                                <a href="https://t.me/Danilovich_Uliana" target='_blank'>
                                    <img src={telegram} alt="telegram" className='h-6 w-6' />
                                </a>
                            </button>
                            <button className='bg-black text-white p-2 rounded-full flex items-center justify-center'>
                                <a href="https://github.com/UlyanaDanilovich" target='_blank'>
                                    <img src={Github} alt="Github" className='h-6 w-6' />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className='md:w-1/2 relative flex justify-center items-end'>
                        <img src={hero} alt="Hero" className='hero-image' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;