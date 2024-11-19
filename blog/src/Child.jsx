import { memo } from "react";

function Child({name}){
    console.log('자녀 컴포넌트가 렌더링이 되었습니다.');
    return(
        <div style={
            {
                border: '2px solid powderblue',
                padding: '10px'
            }
        }>
            <h3>자녀</h3>
            <p>성: {name.lastName}</p>
            <p>이름: {name.firstName}</p>
        </div>
    )
}
export default memo(Child);

//부모 컴포넌트가 렌더링될 때, 자식 컴포넌트는 렌더링이 되지 않도록 해준다.
//React.memo는 Child 컴포넌트의 prop을 체크하여 props에 변화가 없다면 이전 렌더링을 재사용한다.
