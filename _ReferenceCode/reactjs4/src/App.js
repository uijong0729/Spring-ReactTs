import {useState} from "react";
import {ChildArea} from "./ChildArea"


function App() {
  // useState로 상태가 변할때마다 화면에 적용
  const [count, setCount] = useState(0);

  const onClickCountUp = function() {
    setCount(count + 1);
  }

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClickCountUp}>count up</button>
      <br></br>
      <br></br>
      <br></br>
      <br/>
      <br/>
      <br/>
      <br/>
      <input value={text} onChange={onChangeText}/>
      <button onClick={onClickOpen}>표시</button>
      <ChildArea open={open}></ChildArea>
    </div>
  );
}

export default App;
