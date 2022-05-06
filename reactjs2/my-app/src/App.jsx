import './App.css';
import React, { useEffect, useState } from 'react';
import ColorMessage from './components/ColorMessage';

// 컴포넌트 명은 항상 대문자로 시작해야 함
const App = () => {
  // state가 갱신될 때마다 맨 처음부터 렌더링 처리가 이루어진다.
  console.log("init => rendering start");
  const onClickButton = () => { alert(); }
  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  };

  // state를 사용하기위해 호출해야 함 [useState(초기치)]
  //  num : state를 담을 변수명
  //  setNum : state를 갱신하는 함수명
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // 이런 건 보통 맨 위에 씀
  const [faceFlag, setFaceFlag] = useState(true);
  const onClickFaceOn = () => {
    setFaceFlag(!faceFlag);
  }

  // ★★useEffect의 사용★★
  useEffect(() => {
    console.log("use effect");

    // 0이거나 3의 배수인 경우에만 화면에 ㅇㅅㅇ를 표시
    if (num % 3 === 0) {
      // faceFlag가 false인 경우에만 setFaceFlag가 불린다.
      faceFlag || setFaceFlag(true);
    } else {
      // faceFlag가 true인 경우에만 setFaceFlag가 불린다.
      faceFlag && setFaceFlag(false);
    }

    // 빈 배열을 useEffect의 두번째 인수로 넘기면 useEffect의 콜백함수는 처음 1회만 실행된다.
    // useEffect의 두번째 인수인 배열에 무언가 변수를 넣으면 그 변수가 변할 때만 useEffect의 콜백함수가 실행된다.
  }, [num]);

  return (
    <div className="App">

      {/* React에서 스타일을 적용하는 방법 */}
      <p style={contentStyle}>무언가의 텍스트</p>

      {/* React에서 이벤트(자바스크립트)를 적용하는 방법 */}
      <button onClick={onClickButton}>버튼</button>

      {/* Props 사용 
          - props : 컴포넌트로 전달되는 인수
      */}
      <ColorMessage color="blue">잘계십니까</ColorMessage>
      <ColorMessage color="red">반갑습니다</ColorMessage>
      <ColorMessage color="black">안녕하세요</ColorMessage>

      {/* state 사용 
         - state : 각 컴포넌트가 갖는 상태
      */}
      <div>
        <p>state : {num}</p>
        <button onClick={onClickCountUp}>숫자를 늘리는 버튼</button>
      </div>

      {/* useEffect 사용 */}
      <div>
        {/* faceFlag가 true라면 ㅇㅅㅇ를 표시 */}
        <button onClick={onClickFaceOn}>on/off</button>
        {faceFlag && <p>ㅇㅅㅇ</p>}
      </div>
    </div>
  );
}

// 다른 파일에서도 함수 App를 사용할 수 있도록
export default App;
