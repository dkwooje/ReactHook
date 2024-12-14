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
<button onClinck={함수} />
<input value={현재상태} onChange={함수} />

useEffect




3.useRef

