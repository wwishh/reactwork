import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu(props) {
    return (
        <div>
            <ul className='menu'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/about/Lee'>About2</NavLink></li>
                <li><NavLink to='/food/s3/s4'>점심메뉴</NavLink></li>
                <li><NavLink to='/food/s5/s6'>저녁메뉴</NavLink></li>
                
            </ul>
        </div>
    );
}

export default Menu;