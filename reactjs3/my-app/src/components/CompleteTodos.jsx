import React from "react";

export const CompleteTodos = (props) => {
    const {arrTodo, funcPermanentlyDelete} = props;

    return(
      <div className='complete-area default-space'>
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