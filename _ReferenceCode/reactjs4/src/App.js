import {useState, useCallback, useMemo} from "react";
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
  
  // 함수를 props로 넘겨주면 매번 함수가 생성되어 렌더링이 다시 발생하므로 useCallback을 사용한다.
  // useCallback : setOpen값이 바뀌었을때 재생성, 이외에는 새로 만들지 않는다.
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // useMemo : 변수 자체의 memo화
  // 변수 자체는 무겁지 않으므로 매번 재렌더링되어도 문제없지만
  // 변수대입식 처리 자체가 무거운경우 useMemo로 변수가 변경되었을때만 화면에 렌더링을 수행하도록 할 수 있다.
  const temp = useMemo(() => 1+3, []);
  console.log(temp);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClickCountUp}>count up</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <input value={text} onChange={onChangeText}/>
      <button onClick={onClickOpen}>표시</button>
      <ChildArea open={open} onClickClose={onClickClose}></ChildArea>
    </div>
  );
}

export default App;
