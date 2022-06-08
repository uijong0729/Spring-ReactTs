import { BrowserRouter, Link } from "react-router-dom";
import { MyRouter } from "./myrouter/MyRouter";

// react-router-dom v6 레퍼런스
// https://reactrouterdotcom.fly.dev/docs/en/v6/upgrading/v5
export default function App() {
  return(
    // 라우터를 사용하기 위해선 BrowserRouter로 감싸주어야 한다.
    <BrowserRouter>
      <div className='App'>
        <Link to="/">Home</Link><br/>
        <Link to="/page1">Page1</Link><br/>
        <Link to="/page2">Page2</Link><br/>
      </div>
      <MyRouter/>

    </BrowserRouter>
  );
}
