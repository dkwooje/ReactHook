리액트 설치 순서 visual studio code 와 node.js를 설치후 다음과 같은 명령어를 터미널에 입력한다.

npx create-react-app blog
npm init -y
package.json에 다음과 같은 코드를 입력 { "name": "hookpractice", "version": "1.0.0", "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview" }, "dependencies": { "react": "^18.0.0", "react-dom": "^18.0.0" }, "devDependencies": { "vite": "^4.0.0", "@vitejs/plugin-react": "^3.0.0" } }
git을 활용해서 원하는 자료를 꺼내 보자.

'git log --oneline' 명령어를 사용해서 commit을 찾기 (q를 눌러 빠져나온다.)
'git checkout <커밋 해시 숫자> .' 원하는 commit 실행 (.을 반드시 넣기)
'git checkout main' 원래 브랜치로 이동
