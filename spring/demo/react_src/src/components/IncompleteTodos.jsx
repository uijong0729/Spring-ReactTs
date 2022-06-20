import React from "react";
import { BlueButton } from "./button/BlueButton";

export const IncompleteTodos = (props) => {
    const {arrTodo, funcComplete, funcDelete} = props;
    console.log(funcComplete)
    return(
      <div className='imcomplete-area default-space'>
        <p className='title'>미완료 TODO</p>
        
        <ul>
          {/* map으로 배열요소 반복처리 */}
          { arrTodo.map((todo, i) => {
            return (
                // 루프로 렌더링하는 경우 요소를 특정하기 위해 key를 지정해두어야한다.
                <li key={i}>
                  {todo}
                  <BlueButton onClick={() => funcComplete(i)}>완료</BlueButton>
                  <BlueButton onClick={() => funcDelete(i)}>삭제</BlueButton>
                </li>
              );
            }) 
          }
        </ul>
      </div>
    )
};