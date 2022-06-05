import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';

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
      <br/>
      
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/page1/*" element={<Page1 />}>
            {/* Outlet을 사용하지 않을때 사용
                <Route path="" element={<Page1 />}/> 
             */}
             
            <Route path="detailA" element={<Page1DetailA />} />
            <Route path="detailB" element={<Page1DetailB />} />
        </Route>

        <Route path="/page2" element={<Page2 />}/>
      </Routes>
    </BrowserRouter>
  );
}
