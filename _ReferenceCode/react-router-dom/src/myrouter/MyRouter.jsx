import { Routes, Route } from "react-router-dom"
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page1Routes } from './Page1Routes';
import { Page2Routes } from './Page2Routes';

export const MyRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      
      {/* Page1 */}
      <Route path="/page1/*" element={<Page1 />}>
          { 
            Page1Routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            )) // jsx태그를 리턴할때는 () 괄호 주의
          }
      </Route>

      {/* Page2 */}
      <Route>
          { 
            Page2Routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))
          }
      </Route>

    </Routes>
    </>
  )
}