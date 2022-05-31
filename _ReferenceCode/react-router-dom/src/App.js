import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function App() {
  return(
    // 라우터를 사용하기 위해선 BrowserRouter로 감싸주어야 한다.
    <BrowserRouter>
      <div className='App'>
        <Link to="/">Home</Link><br/>
        <Link to="/page1">Page1</Link><br/>
        <Link to="/page2">Page2</Link><br/>
      </div>
      <br/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/page1" element={<Page1 />}/>
        <Route path="/page2" element={<Page2 />}/>
      </Routes>
    </BrowserRouter>
  );
}