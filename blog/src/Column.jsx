import React from "react";

function Column(){

    const todoList = ['밥먹기','코딩하기','커피마시기'];

    return(
        <>
            {todoList.map((todo, idx)=>(
                <React.Fragment key={idx}>
                <td>{todo}</td>
                <td>{todo}</td>
                <td>{todo}</td>
                </React.Fragment>
            ))}
        </>
    )

}
export default Column;

//테이블을 div형태로 감쌀 수 없다. 에러가 생긴다.
//하지만 Fragment를 사용하면 td를 묶을 수 있다.
//키값을 넣어줘야하는 상황이면 <React.Fragment>를 사용해야한다.
// key값이 없다면 Warning: Each child in a list should have a unique "key" prop. 에러가 생긴다.