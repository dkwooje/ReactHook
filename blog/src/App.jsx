import { useReducer, useState } from "react";


const ACTION_TYPE = {
    deposit: '예금합니다.',
    withdraw: '출금합니다.'
}

function reducer(state,action){
  console.log("reducer가 일을 합니다.", state, action)
  switch (action.type){
    case ACTION_TYPE.deposit:
      return state + action.payload;
    case ACTION_TYPE.withdraw: 
      return state - action.payload;
    default:
      return state;
  }
}

function App() {

  const [number, setNumber] = useState(0);
  const [money,  dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input 
      type="number"    
      value={number}     
      onChange={(e) => setNumber(parseInt(e.target.value))}
      step="1000"
      />
      <button onClick={()=>
        dispatch({type: ACTION_TYPE.deposit, payload: number})
      }>예금</button>
      <button onClick={()=>
        dispatch({type: ACTION_TYPE.withdraw, payload: number})
      }>출금</button>
    </div>
  );
}

export default App;

// useReducer 핵심 : Reducer, Dispatch, Action
// Reducer: State를 업데이트하는 역활
// Dispatch: State를 업데이트를 요구하는 역활
// Action: State 업데이트 내용을 정의하는 역활
// State를 Dispatch가 Action으로 Reducer한다.
// Dispatch(Action) -> Reducer(State,Action)