import axios from 'axios';
import { useState } from 'react';
import { Todo } from '../todo/Todo';

// https://jsonplaceholder.typicode.com/users
export const Prac1 = () => {
    const [todos, setTodos] = useState<any>([]);
    
    // 인수형 : number
    // 반환형 : string
    const calcTotalFee = (num :number) :string => {
        const total :number = num * 1.1;
        console.log(total);
        return total + "원";
    }

    const onClickPrac1 = () => {
        const 원 :string = calcTotalFee(1000);
        alert(원)
    };

    const onClickFetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            setTodos(res.data);
        })
    }

    return(
        <div>
            <div>
                <p>연습1</p>
                <button onClick={onClickPrac1}>실행</button>
            </div>
            <div>
                <button onClick={onClickFetchData}>데이터 취득</button>
                {
                    todos.map((todo) => (
                        <Todo key={todo.id} title={todo.title} userId={todo.userId} />
                    ))
                }
            </div>
        </div>
    )
}