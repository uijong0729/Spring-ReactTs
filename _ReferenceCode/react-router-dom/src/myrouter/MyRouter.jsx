import { Routes, Route } from "react-router-dom"
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page404 } from "../Page404";
import { Page1Routes } from './Page1Routes';
import { Page2Routes } from './Page2Routes';

export const MyRouter = () => {
  return (
    <>
    <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />}/>

        {/* Page1 */}
        <Route path="/page1" element={<Page1 />}>
            { 
              Page1Routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              )) // jsx태그를 리턴할때는 () 괄호 주의
            }
        </Route>

        {/* Page2 */}
        <Route path="/page2">
            { 
              Page2Routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))
            }
        </Route>

        {/* Path를 찾지 못한경우의 예외 페이지 */}
        <Route path="*" element={<Page404 />}/>
    </Routes>
    </>
  )
}