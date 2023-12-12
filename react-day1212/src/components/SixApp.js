import React, { useState } from 'react';
import SixSubApp from './SixSubApp';
import SixSubApp2 from './SixSubApp2';
import SixSubApp3 from './SixSubApp3';

function SixApp(props) {

    const [number,setNumber]=useState(10);

    //증가
    const numberIncre=()=>{
        setNumber(number+1);
    }
    //감소
    const numberDecre=()=>{
        setNumber(number-1);
    }

    return (
        <div>
            <h3 className='alert alert-danger'>SixApp_부모자식간 컴포넌트통신</h3>
            <SixSubApp name='진평' age='23'/>
            <SixSubApp name='희찬' age='22'/>
            <SixSubApp name='형준' age='24'/>
            {/* props라는 변수로 name,age전달가능 */}
            <br/>
            <SixSubApp2 flower='수국' price='25000' linecolor='purple'/>
            <SixSubApp2 flower='튤립' price='35000' linecolor='red'/>
            <SixSubApp2 flower='매화' price='10000' linecolor='aqua'/>
            <br/>
            <div className='number'>{number}</div>
            <SixSubApp3 incre={numberIncre} decre={numberDecre}/>
        </div>
    );
}

export default SixApp;