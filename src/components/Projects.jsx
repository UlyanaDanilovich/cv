import React, { useState } from 'react';
import data_analysis from '../assets/dataAnalysis.gif';
import filterablelist from '../assets/Filterablelist.gif';
import lamoda from '../assets/Lamoda.gif';
import minesweeper from '../assets/Minesweeper.gif';
import redux from '../assets/Notion.gif';
import reactRouter from '../assets/Router.gif';
import ticToe from '../assets/TicToe.gif';
import todo from '../assets/Todo.gif';
import Cards from './Cards';

const Projects = () => {
    const projectJson = [
        {
            title: 'Data analysis',
            desc: 'The project aims to analyze sales data to create a table displaying company purchases, quantities, and product metrics, utilizing pricing information for the goods, and was developed using Node.js and RESTful API technologies.',
            image: data_analysis,
            github: "https://github.com/UlyanaDanilovich/data_analysis"
        },
        {
            title: 'Filterable list',
            desc: 'The project is a web application that utilizes a RESTful API to display a list of posts, enabling users to filter them by title and interact with the data. It was developed using Node.js and modern web technologies for a seamless experience.',
            image: filterablelist,
            github: "https://github.com/UlyanaDanilovich/FilterableList"
        },
        {
            title: 'Lamoda Clone',
            desc: 'The project is an online store clone of Lamoda, which provides users with the ability to filter and sort products according to various criteria, utilizing React and RESTful API technologies for a dynamic user experience.',
            image: lamoda,
            github: "https://github.com/UlyanaDanilovich/Lamoda"
        },
        {
            title: 'Minesweeper game',
            desc: 'A classic Minesweeper game developed with Node.js, featuring an engaging user interface and smooth gameplay, providing players with a nostalgic yet challenging experience.',
            image: minesweeper,
            github: "https://github.com/UlyanaDanilovich/minesweeper"
        },
        {
            title: 'Redux Notion',
            desc: 'This project features a multi-user application for note-taking. Each user can create, delete, and edit their notes, utilizing React, Redux, and RESTful API for a smooth experience.',
            image: redux,
            github: "https://github.com/UlyanaDanilovich/Redux"
        },
        {
            title: 'React Router Project',
            desc: 'This project is a multi-page application built with React Router, using an external API for data. It provides a user list, detailed views for each user, and album pages displaying photos along with the creator username.',
            image: reactRouter,
            github: "https://github.com/UlyanaDanilovich/react-router"
        },
        {
            title: 'Tic Tac Toe',
            desc: 'A simple Tic Tac Toe game built with Node.js, enabling users to play against each other in a classic format. The application features an interactive board, tracks player moves, and determines the winner, providing an engaging experience for users.',
            image: ticToe,
            github: "https://github.com/UlyanaDanilovich/tic-tac-toe"
        },
        {
            title: 'Todo List',
            desc: 'The project is a note-taking application developed with React, allowing users to create, delete, and filter notes easily and efficiently. Each note includes a title and description, with options to view only specific notes based on user-defined criteria, enhancing organization and usability.',
            image: todo,
            github: "https://github.com/UlyanaDanilovich/TODO"
        },
        {
            title: 'TypeScript',
            desc: 'The project is a web application that utilizes a RESTful API to display a list of posts, enabling users to filter them by title and interact with the data. It was developed using Node.js, TypeScript, and modern web technologies for a seamless experience.',
            image: filterablelist,
            github: "https://github.com/UlyanaDanilovich/TypeScript"
        },
    ];
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 6;

    const nextPage = () => {
        if ((currentPage + 1) * projectsPerPage < projectJson.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const displayedProjects = projectJson.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

    return (
        <section id='projects' className='relative bg-purple-700 py-10 px-4'>
            <div className='mb-16 max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold mb-8 text-white border-b border-white w-max pb-4'>My Projects</h2>
                <div className='flex justify-between items-center mb-4'>
                    <button onClick={prevPage} disabled={currentPage === 0} className='text-white bg-purple-400 px-4 py-2 rounded-lg'>
                        &lt; Prev
                    </button>
                    <button onClick={nextPage} disabled={(currentPage + 1) * projectsPerPage >= projectJson.length} className='text-white bg-purple-400 px-4 py-2 rounded-lg'>
                        Next &gt;
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {displayedProjects.map((item, index) => (
                        <Cards key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;