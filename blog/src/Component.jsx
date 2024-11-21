import React from "react"


export default function Component(){
    return(
        <> 
            <h1>안녕하세요</h1>
            <p>반가워요</p>
        </> 
    )
}

//엘리먼트들을 <div>로 묶지 않으면 에러가 발생한다.(리엑트의 한 규칙이다.)
//<div>가 많으면 코드가 복잡하고 지저분 하므로, <React.Fragment>를 사용하면 편하다.
//다 쉽게 <>만 써줘도 좋다.