import './App.css';
import React from 'react';
import ColorMessage from './components/ColorMessage';

// 컴포넌트 명은 항상 대문자로 시작해야 함
const App = () => {
  const onClickButton = () => {alert();}
  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  };

  return (
    <div className="App">
      
      {/* React에서 스타일을 적용하는 방법 */}
      <p style={contentStyle}>무언가의 텍스트</p>

      {/* React에서 이벤트(자바스크립트)를 적용하는 방법 */}
      <button onClick={onClickButton}>버튼</button>
    
      {/* Props 사용 */}
      <ColorMessage color="blue">잘계십니까</ColorMessage>
      <ColorMessage color="red">반갑습니다</ColorMessage>
      <ColorMessage color="black">안녕하세요</ColorMessage>
    </div>
  );
}

// 다른 파일에서도 함수 App를 사용할 수 있도록
export default App;
