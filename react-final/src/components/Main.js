import React from 'react';
import mainimg1 from '../image/05.png';
import mainimg2 from '../image/06.png';
import mainimg3 from '../image/07.png';
import mainimg4 from '../image/08.png';


function Main(props) {
    return (
        <div>
            <img src={mainimg1} className='main'/>
            <img src={mainimg2} className='main'/>
            <br/><br/>
            <img src={mainimg3} className='main'/>
            <img src={mainimg4} className='main'/>
        </div>
    );
}

export default Main;