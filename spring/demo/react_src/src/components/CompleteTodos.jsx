import React from "react";

// Css in js는 바람직한지 어떤지 아직 논의중인 사항
const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  borderRadius: '8px',
  padding: '8px',
  margin: '8px'
}

export const CompleteTodos = (props) => {
    const {arrTodo, funcPermanentlyDelete} = props;

    return(
      <div style={style}>
        <p className='title'>완료TODO</p>
        <ul>
          { arrTodo.map((todo, i) => {
              return (
                <li key={todo}>
                  {todo}
                  <button onClick={() => funcPermanentlyDelete(i)}>삭제</button>
                </li>
              );
            }) 
          }
        </ul>
      </div>
    )
};