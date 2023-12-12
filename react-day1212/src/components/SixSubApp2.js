import React from 'react';

function SixSubApp2({flower,price,linecolor}) {
    return (
        <div>
            <h3 className='alert alert-danger'>SixApp의 둘째입니다</h3>
            <h3 className='line' style={{borderColor:linecolor}}>{flower} 한 묶음의 가격은 {price}원 입니다.</h3>
        </div>
    );
}

export default SixSubApp2;