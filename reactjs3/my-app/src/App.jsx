import './App.css';
import React, { useEffect, useState } from 'react';

export const App = () => {
  // 미완료 TODO useState 분할대입
  // - 간단하게 생각하면 state는 변수이다. 
  // - state는 일반 변수와 다르게 값이 변하게 되면 렌더링이 일어난다. 
  // - 값이 변하게 되면 연관있는 컴포넌트들이 다시 렌더링이되어 화면이 바뀌게 된다.
  const [incompleteTodos, setIncompleteTodos] = useState(['아아아아', '이이이이']);
  const [completeTodos, setCompleteTodos] = useState(['오오오오오', '에에에']);

  return (
  <>
  <div className='input-area default-space'>
    <input placeholder='TODO를 입력'></input>
    <button>추가</button>
  </div>

  <div className='imcomplete-area default-space'>
    <p className='title'>미완료 TODO</p>
    
    <ul>
      {/* map으로 리스트 반복처리 */}
      { incompleteTodos.map((todo) => {
        return (
            // 루프로 렌더링하는 경우 요소를 특정하기 위해 key를 지정해두어야한다.
            <li key={todo}>{todo}<button>완료</button><button>삭제</button></li>
          );
        }) 
      }
    </ul>
  </div>
  <div className='complete-area default-space'>
    <p className='title'>완료TODO</p>
    <ul>
      { completeTodos.map((todo) => {
          return (
            <li key={todo}>{todo}<button>삭제</button></li>
          );
        }) 
      }
    </ul>
  </div>
  </>);
}
