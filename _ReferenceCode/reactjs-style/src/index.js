import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* 리렌더링 예제 */}
    <App />
    
    {/* 인라인 스타일 예제 */}
    <InlineStyle/>
    {/* saas 예제 */}
    <CssModules/>
    {/* StyledJsx 예제 */}
    <StyledJsx></StyledJsx>
    {/* ★★StyledComponents 예제★★ */}
    <StyledComponents></StyledComponents>
    {/* ★★Emotion 예제★★ : 위 4가지 방식을 전부 아우르는 라이브러리 */}
    <Emotion></Emotion>
      
  </React.StrictMode>
);
