import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import RowItemApp from './RowItemApp';
import WriteForm from './WriteForm';

function OneApp(props) {

    const [board, setBoard]=useState([

        {
            name:'유재석',
            photo:'s1',
            blood:'A',
            today: new Date()
        },
        {
            name:'김영준',
            photo:'s2',
            blood:'B',
            today: new Date()
        },
        {
            name:'영주니햄',
            photo:'s3',
            blood:'O',
            today: new Date()
        },
        {
            name:'에헤이',
            photo:'s4',
            blood:'AB',
            today: new Date()
        }
    ]);


    //데이터 추가하는 함수 이벤트
    //board를 바꾸면 렌더링이 되면서 추가된다
    const datasave=(data)=>{
        setBoard(board.concat({
            // name:data.name,
            // photo:data.photo,
            // blood:data.blood,
            ...data,
            today:new Date() 
        }))
    }

    //삭제 이벤트
    const datadelete=(idx)=>{
        setBoard(board.filter((item,i)=>(i!==idx))); //부모가 props로 보낸 이벤트 호출
    }



    return (
        <div style={{marginLeft:'100px'}}>
            <Alert severity="info">One App_테이블만들기(부모자식간의 통신) &nbsp; <AudiotrackIcon/></Alert>

            <WriteForm onSave={datasave}/>

            <table className='table table-bordered' style={{width:'500px'}}>
                <caption align='top'><b>Board배열 출력</b></caption>
                <thead>
                    <tr className='table-success'>
                        <th width='100'>이름</th>
                        <th width='120'>사진</th>
                        <th width='80'>혈액형</th>
                        <th width='160'>날짜</th>
                        <th width='70'>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //데이터 개수만큼 호출됨..출력은 아직안됨..출력은 RowItemApp에서
                        board.map((row,index)=>(<RowItemApp row={row} idx={index} onDelete={datadelete}/>))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default OneApp;