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
2. 

useState 
<button onClinck={함수} />
<input value={현재상태} onChange={함수} />

useEffect




3.useRef

