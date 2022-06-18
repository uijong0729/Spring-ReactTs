import './Todo.css';
import React, { useEffect, useState } from 'react';
import { InputTodo } from '../components/InputTodo'; // TODO를 입력하기 위한 컴포넌트
import { IncompleteTodos } from '../components/IncompleteTodos';
import { CompleteTodos } from '../components/CompleteTodos';
import { Message } from '../components/Message';

export const Todo = () => {
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
    if (todoText === '') return;
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
    const deletedElement = newTodos.splice(i, 1);
    // 배열의 변화를 반영(useState)
    setIncompleteTodos(newTodos);
    return deletedElement;
  }

  // TODO를 완료TODO로 이동시키는 이벤트
  const onClickComplete = (i) => {
    const newCompeteTodos = [...completeTodos, onClickDelete(i)];
    setCompleteTodos(newCompeteTodos);
  }

  // 완료된 TODO는 확인이 끝나면 쓸모없는 정보이기 때문에 완전삭제
  const onClickPermanentlyDelete = (i) => {
    const tempArray = [...completeTodos];
    tempArray.splice(i, 1);
    setCompleteTodos(tempArray);
  }

  return (
  <>
    <InputTodo 
      todoText={todoText} 
      onChange={onChangeText} 
      onClick={onClickAdd}
      disabled={incompleteTodos.length > 4}
      />

    <Message
      todos={incompleteTodos}
    />

    <IncompleteTodos
      arrTodo={incompleteTodos}
      funcComplete={onClickComplete}
      funcDelete={onClickDelete}
    />

    <CompleteTodos
      arrTodo={completeTodos}
      funcPermanentlyDelete={onClickPermanentlyDelete}
      />
  </>
  );
}
