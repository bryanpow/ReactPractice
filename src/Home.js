import Footer from './Footer'
import React, {useState, useRef} from 'react';


const Home = () => {
    //Holding data for the cards im making later using .map .
    let projects = {
        clicker : {
            image: 'https://cdn-icons-png.flaticon.com/512/67/67754.png',
            name: 'Clicker.js',
            desc: 'A simple click counter',
            practice: 'useState',
        },
        toDo : {
            image : 'https://cdn-icons-png.flaticon.com/512/1950/1950715.png',
            name: 'ToDo.js',
            desc: 'A simple To-do list app',
            practice: 'useState'
        },
        blog: {
            image : 'https://cdn-icons-png.flaticon.com/512/2125/2125457.png',
            name: 'Blog.js',
            desc: 'A simple blog app',
            practice: 'useState, forms, keys'
        },
       weather: {
        image : 'https://freepngimg.com/save/23523-weather-file/512x512',
        name: 'Weather.js',
        desc: 'A working weather app',
        practice: 'useState, effectState, APIs'
    },
    }
      //useStates for hovering
    const [hoverIndex, setHoverIndex] = useState(false);
    // Everytime I hover I want to know the index of the item im hovering over. This will make more sense later.
    const handleHover = (index) => {
        console.log(true)
        setHoverIndex(index)
    }
    // I also want to make sure I know when Im not hovering on anything, so im setting null
    const handleHoverOff = () => {
        console.log(false)
        setHoverIndex(null)
    }

    return (
        <div id='home'>
            <div id='welcome'>
            <h1>Welcome</h1>
            <p>Embark on a journey through my world as a Software Engineering student. Welcome to <strong>ReactPractice</strong>, a space built entirely with React. My name is Bryan Ramos, and this is my exploration of React's wonders. Each page reveals a new project—a product of curiosity and the desire to bring ideas to life. Join me in this adventure, where, project by project, I unravel the intricacies of React, transforming concepts into reality with enthusiasm and dedication. Let's dive in together and discover the art of React.</p>
            </div>
            <div id='projects'>
                <h2>Projects</h2>
                <div id='cards' >
                     {/* Thanks to React, I can use the data from the Objects I declared earlier to create several cards at once with the same template*/}
                     {/* Im mapping over the values array of the projects object I made before, because each value in that object is the object thats giving me my data (go back and check and you'll understand). */}
                    {Object.values(projects).map((project, index) => {
                        // Also note that im grabbing the index while mapping so I can use it to declare which card im activating the animation on.
                        // This is neccesary since I mapped to make these cards, and if I just activate the functions on the class, all of them will go up at once when I hover over one .
                       return (
                        //Im activating the handler functions for my animations on MouseOn and MouseOff. These are the animations you can see when you hover over the cards.
                        <div className='card' onMouseLeave={() => handleHoverOff(index)} onMouseEnter={() => handleHover(index)} >
                            {/* If the index of the card im hovering over matches the index of the current card im making, im changing the styles, thus animating the card. */}
                            <div className= {hoverIndex === index? 'animatePic' : 'picture'}>
                            <img className='e' src={project.image} width='100px'></img>
                            </div>
                            <div id={hoverIndex === index? 'animateInfo' : 'info'}>
                            <h3>{project.name}</h3>
                            <p className='desc'>{project.desc}</p>
                            <div className='grey'>
                                <img src='https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-2048x1822-f7kq7hho.png' width='35px' height='30px'></img>
                            </div>
                            </div>
                        </div>
                       )
                    })}
                </div>
            </div>
        </div>
    )

}

export default Home