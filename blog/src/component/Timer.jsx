import { useEffect } from "react"


export default function Timer(props){

    useEffect(function(){
        const timer = setInterval(function(){
        console.log('타이머 돌아가는중....');
        }, 500);

        return function(){
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        }
     }, []);

    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    );

}

//setInterval은 주어진 콜백 함수를 지정된 간격(밀리초 단위)마다 실행하는 데 사용됩니다. 
//React 컴포넌트에서도 반복적으로 어떤 작업을 수행할 때 유용합니다.