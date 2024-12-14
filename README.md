리액트 설치 순서 visual studio code 와 node.js를 설치후 다음과 같은 명령어를 터미널에 입력한다.
1.Get-ExecutionPolicy 
2.Set-ExecutionPolicy RemoteSigned
3.npx create-react-app blog
4.npm install
5.npm start (서버실행)


git을 활용해서 원하는 자료를 꺼내 보자.

1. 'git log --oneline' 명령어를 사용해서 commit을 찾기 (q를 눌러 빠져나온다.)
2. 'git checkout <커밋 해시 숫자> .' 원하는 commit 실행 (.을 반드시 넣기)
3. 'git checkout main' 원래 브랜치로 이동


이 레포지토리는 React에서 사용하는 여러 기술을 정리해보았습니다..

알아두면 좋은 기술.

1. e.target.value: 사용자가 입력한 값 출력
   e: 이벤트 객체.
   e.target: 이벤트가 발생한 HTML 요소.
   e.target.value: 해당 요소의 현재 값 (주로 input, textarea, select에서 사용).
2. e.target.checked: 체크박스나 라디오 버튼의 선택 상태를 확인할 때 사용합니다.
3. e.preventDefault(): 이벤트의 기본 동작(예: 폼 제출, 링크 이동 등)을 막습니다.
4. e.stopPropagation(): 이벤트 버블링을 중단시킵니다. 부모 요소로 이벤트가 전파되지 않도록 합니다.
5. setTimeout과 setInterval: 상태를 일정 시간 후 변경하거나, 주기적으로 작업을 수행할 때 사용합니다.
6. debounce와 throttle: 입력 이벤트를 제어하여 성능을 최적화합니다.


useState 
useState는 React의 함수형 컴포넌트에서 상태 관리를 위해 사용되는 Hook입니다.
예시 :
<button onClinck={함수} />
<input value={현재상태} onChange={함수} /> 함수(){setState(e.target.value)}



useEffect
useEffect는 React의 Hook 중 하나로, 컴포넌트의 생명주기와 관련된 작업을 처리하기 위해 사용됩니다. 함수형 컴포넌트에서 사이드 이펙트(외부 시스템과의 상호작용, 비동기 작업 등)를 관리할 수 있도록 도와줍니다.
예시:

useEffect(() => {
  // 실행할 코드
  return () => {
    // 정리(cleanup) 작업
  };
}, [dependencies]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

사용 목적:
컴포넌트가 처음 렌더링될 때 실행
의존성 값이 변경될 때 실행
컴포넌트가 언마운트되거나 업데이트 전에 정리 작업 실행

    useEffect(()=>{
        const timer = setInterval(()=>{  //타이머 설정
        console.log('타이머 돌아가는중....');
        }, 500);

        return () =>{
            clearInterval(timer);  //타이머 종료
            console.log('타이머가 종료되었습니다.');
        }
     }, []);

     function PollingExample() {
  const [data, setData] = useState(null);
  
실사용 예시:

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // 매 초 상태 업데이트
    }, 1000);

    return () => clearInterval(timer); // 언마운트 시 타이머 해제
  }, []);

  return <div>현재 시간: {time.toLocaleTimeString()}</div>;
}

function PollingExample() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const timer = setInterval(() => {
      fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, 5000); // 5초마다 데이터 가져오기

    return () => clearInterval(timer); // 타이머 정리
  }, []);

  return <div>{data ? JSON.stringify(data) : "로딩 중..."}</div>;
}

요약
setInterval: 지정한 간격으로 반복 작업을 수행하는 함수.
React에서 useEffect와 함께 사용하여 타이머 설정 및 정리를 관리.
clearInterval: 타이머를 중지하고 메모리 누수를 방지.
사용 예시: 실시간 시계, 주기적인 데이터 갱신, 애니메이션 효과 등.

3.useRef

useRef의 특징:
1.React 렌더링 사이클에 영향을 주지 않음
useRef로 저장된 값은 변경되어도 컴포넌트를 다시 렌더링하지 않습니다.

초기값 설정 가능
2.useRef(initialValue)를 사용해 초기값을 설정할 수 있습니다.

3.current 속성
반환된 객체는 { current: initialValue } 형태로, 참조하려는 값은 current 속성을 통해 접근합니다.

1. DOM 요소 참조
useRef는 DOM 요소를 참조할 때 가장 자주 사용됩니다. React에서는 보통 DOM을 직접 조작하지 않지만, 예외적으로 포커스 설정, 스크롤 위치, 캔버스 작업 등에서 유용합니다.

예제: 입력 필드에 포커스 설정
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null); // DOM 요소를 참조하기 위한 ref 생성

  const handleFocus = () => {
    inputRef.current.focus(); // input 요소에 포커스 설정
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="포커스할 입력 필드" />
      <button onClick={handleFocus}>포커스</button>
    </div>
  );
}

export default FocusInput;
작동 과정:
useRef(null)로 초기 ref 객체 생성.
ref 속성을 통해 DOM 요소를 inputRef에 연결.
버튼 클릭 시 inputRef.current.focus()로 입력 필드에 포커스 설정.


2. 렌더링 간 상태 유지
React의 상태(useState)는 값이 변경되면 컴포넌트를 다시 렌더링하지만, useRef는 값을 유지하면서도 렌더링을 트리거하지 않습니다.

예제: 렌더링 횟수 추적
import React, { useState, useRef } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // 렌더링 횟수 추적

  renderCount.current++; // 렌더링될 때마다 증가

  return (
    <div>
      <p>카운트: {count}</p>
      <p>렌더링 횟수: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
}

export default RenderCounter;
작동 과정:
renderCount는 렌더링 횟수를 추적하지만, 컴포넌트를 다시 렌더링하지 않습니다.
버튼 클릭 시 setCount로 상태가 변경되고, renderCount.current가 증가.
화면에 renderCount.current의 값이 출력.


3. 이전 상태 값 저장
useRef를 사용하면 이전 상태 값을 저장하고 비교할 수 있습니다.

예제: 이전 값 추적
import React, { useState, useRef, useEffect } from "react";

function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0); // 이전 값을 저장하는 ref

  useEffect(() => {
    prevCount.current = count; // 렌더링 후 이전 값 업데이트
  });

  return (
    <div>
      <p>현재 값: {count}</p>
      <p>이전 값: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
}

export default PreviousValueTracker;
작동 과정:
prevCount는 컴포넌트가 렌더링될 때마다 useEffect를 통해 업데이트.
현재 값과 이전 값을 화면에 표시.
