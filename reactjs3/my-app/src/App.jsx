import './App.css';
import React, { useEffect, useState } from 'react';

export const App = () => {
  // TODO를 입력하는 input 부분에 대해서도 키보드를 누를 때마다 상태가 변하기 때문에 추가
  const [todoText, setTodoText] = useState('');
  const onChangeText = (event) => setTodoText(event.target.value);

  // 미완료 TODO useState 분할대입
  // - 간단하게 생각하면 state는 변수이다. 
  // - state는 일반 변수와 다르게 값이 변하게 되면 렌더링이 일어난다. 
  // - 값이 변하게 되면 연관있는 컴포넌트들이 다시 렌더링이되어 화면이 바뀌게 된다.
  const [incompleteTodos, setIncompleteTodos] = useState(['아아아아', '이이이이']);
  const [completeTodos, setCompleteTodos] = useState(['오오오오오', '에에에']);

  // 입력 후 TODO를 추가하는 이벤트
  const onClickAdd = () => {
    // 입력이 없을경우 추가하지 않음
    if (todoText == '') return;
    // 새로운 배열 생성 (incompleteTodos복사본 + 입력한TODO)
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // input요소를 초기화
    setTodoText('');
  }

  // TODO를 삭제하는 이벤트
  const onClickDelete = (i) => {
    // 새로운 배열을 카피
    const newTodos = [...incompleteTodos];
    // i번째 요소부터 연속되는 1개를 삭제
    newTodos.splice(i, 1);
    // 배열의 변화를 반영(useState)
    setIncompleteTodos(newTodos);
  }

  return (
  <>
  <div className='input-area default-space'>
    <input placeholder='TODO를 입력' value={todoText} onChange={onChangeText}></input>
    <button onClick={onClickAdd}>추가</button>
  </div>

  <div className='imcomplete-area default-space'>
    <p className='title'>미완료 TODO</p>
    
    <ul>
      {/* map으로 배열요소 반복처리 */}
      { incompleteTodos.map((todo, i) => {
        return (
            // 루프로 렌더링하는 경우 요소를 특정하기 위해 key를 지정해두어야한다.
            <li key={i}>
              {todo}
              <button>완료</button>
              <button onClick={() => onClickDelete(i)}>삭제</button>
            </li>
          );
        }) 
      }
    </ul>
  </div>
  <div className='complete-area default-space'>
    <p className='title'>완료TODO</p>
    <ul>
      { completeTodos.map((todo, i) => {
          return (
            <li key={todo}>{todo}<button>삭제</button></li>
          );
        }) 
      }
    </ul>
  </div>
  </>);
}
