import axios from 'axios';
import { useState } from 'react';
import { Todo } from '../todo/Todo';
import { TodoType } from "../types/DefTodo";

// https://jsonplaceholder.typicode.com/users
export const Prac1 = () => {
    const [todos, setTodos] = useState<Array<TodoType>>([]);

    const onClickFetchData = () => {
        // 타입을 지정해서 가져오기
        axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            setTodos(res.data);
        })
    }

    return(
        <div>
            <div>
                <button onClick={onClickFetchData}>데이터 취득</button>
                {
                    todos.map((todo) => (
                        <Todo 
                            key={todo.id} 
                            title={todo.title} 
                            userId={todo.userId} 
                            completed={todo.completed} />
                    ))
                }
            </div>
        </div>
    )
}