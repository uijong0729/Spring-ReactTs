import { Link, Outlet } from "react-router-dom"

export const Page1 = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <Link to="detailA">Detail A</Link>
            <br/>
            <Link to="detailB">Detail B</Link>
            
            {/* Outlet을 지정하면, Children요소로 화면을 옮기더라도 위 요소는 고정요소로 표시된다. */}
            <Outlet />
        </div>
    )
}