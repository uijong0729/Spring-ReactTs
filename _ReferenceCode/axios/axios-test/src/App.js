import axios from 'axios';

function App() {

  const onClickUsers = () => {
    // HTTP Request
    axios.get("https://jsonplaceholder.typicode.com/users")
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

  const onClickUser1 = () => {
    // HTTP Request
    axios.get("https://jsonplaceholder.typicode.com/users/1")
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

    return (
      <div className="App">
        <button onClick={onClickUsers}>users</button>
        <button onClick={onClickUser1}>id=1 user</button>
      </div> 
    );
  }

export default App;
