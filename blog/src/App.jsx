
function App() {

  const users = [
    {name: "김철수", age: "16"},
    {name: "이영희", age: "24"},
    {name: "김민수", age: "46"},
    {name: "홍길동", age: "35"},
    {name: "홍민영", age: "12"},
    {name: "김영지", age: "15"},
    {name: "윤동지", age: "100"},
  ]

  return (
     <div className="container">
      <div className="search-container">
        <input placeholder="여기다 검색하세요" />
        <ul>
          {users.map((user)=>(  
             <li key={user.name}>
            <span>{user.name}</span>
            <span>{user.age}세</span>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//함수가 너무 많아(특히 서버비에 부담이 되는 함수) 문제가 될때 
//Debounce와 Throttle을 사용한다. 이 기능은 함수가 너무 자주 호출되는것을 방지한다.
//Debounce: 특정 이벤트가 연속적으로 발생할 때, 제일 마지막 이벤트가 발생한 후
//일정 시간이 지난 후에 함수를 호출함