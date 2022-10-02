// 커스텀 훅은 접두어에 use를 붙이는 것이 관례
import axios from "axios";
import { FC, useState } from "react";
import { Constants } from "../utils/Constants";
import { TodoEntity } from "./api/TodoEntity";

// 모든 유저 일람을 취득하는 커스텀 훅
export const useTodos = () => {
    const [todoEntities, setTodoEntities] = useState<Array<TodoEntity>>([]);

    // curl -X POST http://localhost:8080/putTodo -H "Content-Type: application/json" -d "{ \"text\": \"johnny\" }"
    const addTodo = async (text :string, deadline :Date) => {
      await axios.post(`${Constants.ENV}/putTodo`, {
          text: text,
          deadline: deadline,
          assignedUserId: "self",
          registrantId: "self"
      })
      // 취득 결과 확인
      .then((response) => {
        console.log(response);
        getAllTodos();
      })
      // 에러가 발생할 경우
      .catch((error)=>{
        console.log(error);
      })
    }

    const getAllTodos = async () => {
      console.log("GetAllTodos")
        await axios({
          url: `${Constants.ENV}/getTodo`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
            const res :Array<TodoEntity> = response.data.map((todo :TodoEntity) => ({
              id: todo.id,
              text: todo.text,
              status: todo.status,
              deadline: todo.deadline,
              assignedUserId: todo.assignedUserId,
              registrantId: todo.registrantId
            }));
            setTodoEntities(res);
        })
        .catch((error)=>{
            console.log(error);
        })
 
    }

    // 다른 곳에서 사용할 수 있도록 반환
    return {
      getAllTodos, todoEntities, addTodo, setTodoEntities
    };
};