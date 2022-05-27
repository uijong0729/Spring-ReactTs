import {useState} from "react";

function App() {
  // useState로 상태가 변할때마다 화면에 적용
  const [count, setCount] = useState(0);

  const onClickCountUp = function() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClickCountUp}>count up</button>
    </div>
  );
}

export default App;
