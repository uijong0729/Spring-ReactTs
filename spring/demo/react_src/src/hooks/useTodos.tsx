// 커스텀 훅은 접두어에 use를 붙이는 것이 관례

import axios from "axios";
import { useState } from "react";
import { TodoEntity } from "./TodoEntity"

// 모든 유저 일람을 취득하는 커스텀 훅
export const useAllTodos = () => {
    const [todoEntities, setTodoEntities] = useState<Array<TodoEntity>>([]);

    const getAllTodos = () => {
        axios.get<Array<TodoEntity>>("http://localhost:8080/getTodo")
        .then((response) => {
          console.log(response);
          console.log(response.data);
          const res :Array<TodoEntity> = response.data.map((todo) => ({
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
      getAllTodos, todoEntities
    };
};