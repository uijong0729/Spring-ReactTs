import './App.css';
import React from 'react';

export const App = () => {
  return (
  <>
  <div className='input-area default-space'>
    <input placeholder='TODO를 입력'></input>
    <button>추가</button>
  </div>

  <div className='imcomplete-area default-space'>
    <p className='title'>미완료 TODO</p>
    <ul>
      <li>아아아1</li>
      <button>완료</button>
      <button>삭제</button>
    </ul>
    <ul>
      <li>아아아2</li>
      <button>완료</button>
      <button>삭제</button>
    </ul>
  </div>
  <div className='complete-area default-space'>
    <p className='title'>완료TODO</p>
    <ul>
      <li>아아아1</li>
      <button>삭제</button>
    </ul>
  </div>
  </>);
}
