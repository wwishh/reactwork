import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import TwoSubApp from './TwoSubApp';
import TwoSubApp2 from './TwoSubApp2';

function TwoApp(props) {

    const [color, setColor]=useState("purple");
    const [message, setMessage]=useState("오늘은 수요일^^");
    const [photo, setPhoto]=useState("s5");

    //app2
    const [likeColor, setLikeColor] = useState(['purple', 'gray', 'pink']);

    //3개의 이벤트를 만들어 전달
    const changeMessage=(msg)=>{
        setMessage(msg);
    }

    const changeColor=(c)=>{
        setColor(c);
    }

    const changePhoto=(p)=>{
        setPhoto(p);
    }

    //sub2_색상추가
    const addColorEvent=(co)=>{
        setLikeColor(likeColor.concat(co));
    }

    //색상 삭제 이벤트
    const deleteLikeColor=(idx)=>{
        setLikeColor(likeColor.filter((a,i)=>(i!==idx))); //부모가 props로 보낸 이벤트 호출
    }

    return (
        <div>
            <Alert severity="info">Two App &nbsp; <AudiotrackIcon/></Alert>
            <br/>
            <h1 style={{color:color}}>{message}</h1>
            <img src={`../image/${photo}.jpg`} style={{width:'250px'}}/>
            <br/>
            {
                likeColor.map((co,idx)=>(<div className='box' style={{backgroundColor:co}}
                onDoubleClick={()=>{
                    deleteLikeColor(idx);
                }}>{idx}</div>))
            }

            <br/>
            <TwoSubApp onMessage={changeMessage} onColor={changeColor} onPhoto={changePhoto}/>
            <br/>
            <TwoSubApp2 onAddColor={addColorEvent}/>
        </div>
    );
}

export default TwoApp;