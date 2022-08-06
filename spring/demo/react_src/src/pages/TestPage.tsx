import { BlueButton } from '../components/button/BlueButton';
import axios from 'axios';

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
    return (
        <div>
            <BlueButton onClick={addTodo}>TODO 추가</BlueButton>
        </div>
    )
}