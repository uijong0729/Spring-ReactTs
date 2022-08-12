import { BlueButton } from '../components/button/BlueButton';
import axios from 'axios';
import { useAllTodos } from '../hooks/useTodos';

// curl -X POST http://localhost:8080/putTodo -H "Content-Type: application/json" -d "{ \"text\": \"johnny\" }"
function addTodo() {
    axios.post("http://localhost:8080/putTodo", {
        text: 'john'
    })
    // 취득 결과 확인
    .then((result) => {
      console.log(result);
      console.log(result.data);
    })
    // 에러가 발생할 경우
    .catch((error)=>{
      console.log(error);
    })

}

export const TestPage = () => {
    const { todoEntities, getAllTodos} = useAllTodos();
    return (
        <div>
            <BlueButton onClick={addTodo}>TODO 추가</BlueButton>
            {todoEntities.map((todos) => (
                <p>{todos.id} {todos.text} {todos.text}</p>
            ))}
            <BlueButton onClick={getAllTodos}>TODO 로드</BlueButton>
        </div>
    )
}