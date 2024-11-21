import React from "react";

function Column(){

    return(
        <>
        <td>밥먹기</td>
        <td>코딩하기</td>
        <td>커피 마시기</td>
        </>
    )

}

export default Column;

//테이블을 div형태로 감쌀 수 없다. 하지만 Fragment를 사용하면 td를 묶을 수 있다.