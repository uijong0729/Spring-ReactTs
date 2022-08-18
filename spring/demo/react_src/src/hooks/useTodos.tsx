// 커스텀 훅은 접두어에 use를 붙이는 것이 관례

import axios from "axios";
import { useState } from "react";
import { TodoEntity } from "./TodoEntity"

// 모든 유저 일람을 취득하는 커스텀 훅
export const useTodos = () => {
    const [todoEntities, setTodoEntities] = useState<Array<TodoEntity>>([]);
        
    // curl -X POST http://localhost:8080/putTodo -H "Content-Type: application/json" -d "{ \"text\": \"johnny\" }"
    const addTodo = () => {
      axios.post("http://localhost:8080/putTodo", {
          text: 'john'
      })
      // 취득 결과 확인
      .then((response) => {
        console.log(response);
        console.log(response.data);
        const res :TodoEntity = {
          id: response.data.id,
          text: response.data.text,
          status: response.data.status
        };
        
        todoEntities.push(res);
        setTodoEntities([...todoEntities]);
      })
      // 에러가 발생할 경우
      .catch((error)=>{
        console.log(error);
      })
    }


    const getAllTodos = () => {
        axios.get<Array<TodoEntity>>("http://localhost:8080/getTodo")
        .then((response) => {
          console.log(response);
          console.log(response.data);
          const res :Array<TodoEntity> = response.data.map((todo :TodoEntity) => ({
            id: todo.id,
            text: todo.text,
            status: todo.status
          }));

          setTodoEntities(res);
        })
        .catch((error)=>{
          console.log(error);
        })
    }

    // 다른 곳에서 사용할 수 있도록 반환
    return {
      getAllTodos, todoEntities, addTodo
    };
};