import React, { useState } from 'react';

function FiveApp(props) {

    const [name,setName]=useState('');
    const [java,setJava]=useState(0);
    const [react,setReact]=useState(0);
    const [total,setTotal]=useState(0);
    const [avg,setAvg]=useState(0);
    const [check,setCheck]=useState(false);

    return (
        <div>
            <h2 className='alert alert-danger'>FifthApp</h2>
            <div className='inp'>
                이름: <input type='text' style={{width:'100px'}} onChange={(e)=>{setName(e.target.value);}}/>
                <span style={{marginLeft:'10px'}}>{name}</span><br/><br/>
                자바점수: <input type='text' style={{width:'100px'}} onChange={(e)=>{setJava(e.target.value);}}/>
                <span style={{marginLeft:'10px'}}>{java}</span><br/><br/>
                리액트점수: <input type='text' style={{width:'100px'}} onChange={(e)=>{setReact(e.target.value);}}/>
                <span style={{marginLeft:'10px'}}>{react}</span><br/><br/>
                <button type='button' className='btn btn-outline-info' onClick={(e)=>{
                    setTotal(Number(java)+Number(react));
                    setAvg((Number(java)+Number(react))/2);
                    setCheck(true);
                }}>결과보기</button>
            </div>
            {check && <div className='result'>
                이름: <span>{name}</span><br/>
                자바: <span>{java}</span><br/>
                리액트: <span>{react}</span><br/>
                총점: <span>{total}</span><br/>
                평균: <span>{avg}</span>
            </div>}
        </div>
    );
}

export default FiveApp;