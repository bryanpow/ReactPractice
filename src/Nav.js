import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
    let pages = {
            1: {
                name:'Clicker.js',
                link: '/Clicker'
                },
            2: {
                name: 'ToDo.js',
                link: '/ToDo'
            },
            3: {
                name : 'Blogs.js',
                link: '/Blogs'
            },
            4: {
                name: 'Weather.js',
                link: '/Weather'
            }
            }
    return (
        <div id="navbar">
            <div id='logo'>
            <a href='/' style={{color: 'black', textDecoration: 'none'}}><h2>ReactPractice</h2></a>
            <img id='pic1' src='https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-2048x1822-f7kq7hho.png' width='35px' height='30px'></img>
            </div>
            <ul id='pages'>
                {Object.values(pages).map((page,index) => {
                   return (
                    <a href={page.link} style={{textDecoration: 'none', color: 'black'}}><li className='pageItems' key='index'>{page.name}</li></a>
                   )
                })}
            </ul>
        </div>
    )
}

export default Nav