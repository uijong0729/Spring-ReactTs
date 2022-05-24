import React from "react";

export const InputTodo = (props) => {
    // props로부터 분할대입
    const {todoText, onChange, onClick, disabled} = props;

    return (
      <div className='input-area default-space'>
        <input disabled={disabled} placeholder='TODO를 입력' value={todoText} onChange={onChange}></input>
        <button disabled={disabled} onClick={onClick}>추가</button>
      </div>
    )
};