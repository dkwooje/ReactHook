import { memo } from "react";

function Child({name, tellMe}){
    console.log('자녀 컴포넌트가 렌더링이 되었습니다.');
    return(
        <div style={
            {
                border: '2px solid powderblue',
                padding: '10px'
            }
        }>
            <h3>자녀</h3>
            <p>이름: {name}</p>
            <button onClick={tellMe}>넌 누구야?</button>
        </div>
    )
}
export default memo(Child);
