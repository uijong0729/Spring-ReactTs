import { BlueButton } from '../components/button/BlueButton';

// curl -X POST http://localhost:8080/putTodo -H "Content-Type: application/json" -d "{ \"text\": \"johnny\" }"
function addTodo() {
    const todoData = { text: "johnny" }
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    fetch('http://localhost:8080/putTodo', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(todoData)
    });
}

export const TestPage = () => {
    return (
        <div>
            <BlueButton onClick={addTodo}>TODO 추가</BlueButton>
        </div>
    )
}