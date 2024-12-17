/* eslint-disable react/prop-types */
import React from 'react';
import Github from '../assets/Github.png';

const Cards = ({ item }) => {
    
    if (!item) {
        return null; 
    }

    
    const image = item.image || 'defaultImagePath'; 
    const title = item.title || 'Без названия';
    const desc = item.desc || 'Описание недоступно.';
    const githubLink = item.github || '#'; 

    return (
        <div className='border border-purple-700 rounded-lg w-[350px] lg:w-[400px] bg-purple-100'>
            <img src={image} alt={title} className='rounded-lg w-full h-[200px] object-cover' /> {/* Установлен фиксированный размер */}
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{title}</h1>
                <p>{desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a 
                            href={githubLink} 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            className='flex gap-1'
                        >
                            <img src={Github} alt="GitHub" className='w-6' />
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;