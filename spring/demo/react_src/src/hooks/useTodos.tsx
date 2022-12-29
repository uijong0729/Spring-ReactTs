// 커스텀 훅은 접두어에 use를 붙이는 것이 관례
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import BasicCard from "../components/molecules/card/BaseCard";
import { Constants } from "../utils/Constants";
import { TodoEntity, TodoStatus } from "./api/TodoEntity";

// 모든 유저 일람을 취득하는 커스텀 훅
export const useTodos = () => {
  const [todoEntities, setTodoEntities] = useState<Array<TodoEntity>>([]);
  const [runCounter, setRunCounter] = useState<number>(0);

  // curl -X POST http://localhost:8080/putTodo -H "Content-Type: application/json" -d "{ \"text\": \"johnny\" }"
  const addTodo = async (text: string, deadline: Date) => {
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
      .catch((error) => {
        console.log(error);
      })
  }

  const getAllTodos = async () => {
    return await axios({
      url: `${Constants.ENV}/getTodo`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        console.log(`getAllTodos : ${response}`);
        const res: Array<TodoEntity> = response.data.map((todo: TodoEntity) => ({
          id: todo.id,
          text: todo.text,
          status: todo.status,
          deadline: todo.deadline,
          assignedUserId: todo.assignedUserId,
          registrantId: todo.registrantId
        }));
        setTodoEntities(res);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // @GetMapping("/deleteTodo/{id}")
  const deleteTodo = async (id: number) => {
    await axios({
      url: `${Constants.ENV}/deleteTodo/${id}`,
      method: 'GET'
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const completeTodo = async (id: number) => {
    await axios({
      url: `${Constants.ENV}/completeTodo/${id}`,
      method: 'GET'
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const TodoComponent = () => {
    
    useEffect(() => {
      setTimeout(() => {
        setRunCounter(runCounter + 1);
      }, 1000);

      if (runCounter > 4) {
        getAllTodos();
        setRunCounter(0);
      }
    }, [])
  
    return (
      <>
        <CardContainer className="card_contianer">
          {
            todoEntities.filter((todos) => {
              return todos.status === TodoStatus.IMCOMPLETED
            }).map((todos) => (
              <BasicCard
                assignedUserId={todos.assignedUserId}
                text={todos.text}
                registrantId={todos.registrantId}
                deadline={todos.deadline}
                id={todos.id}
                status={todos.status} />
            ))
          }
        </CardContainer>
      </>
    )
  }

  // 다른 곳에서 사용할 수 있도록 반환
  return {
    getAllTodos,
    addTodo,
    deleteTodo,
    completeTodo,
    todoEntities, setTodoEntities,
    TodoComponent
  };
};


const CardContainer = styled.div`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: grid;
`