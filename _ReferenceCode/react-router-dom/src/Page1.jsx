import { Link, Outlet, useNavigate } from "react-router-dom"

// 참고 : https://reactrouter.com/docs/en/v6
export const Page1 = () => {
    // 0~99까지의 숫자가 들어간 배열
    const arr = [...Array(100).keys()];

    const navi = useNavigate();
    const onClickDetailA = () => {
        navi("detailA", { replace: true });
    }

    return (
        <div>
            <h1>Page 1</h1>
            
            {/* 링크 이동시 변수 넘기기 */}
            <Link to={{ pathname: "detailA", state: arr }}>Detail A</Link>
            <br/>
            <br/>
            
            {/* 단순한 링크이동 */}
            <Link to="detailB">Detail B</Link>
            <br/>
            <br/>
            
            {/* 버튼을 통한 화면이동 
                https://reactrouter.com/docs/en/v6/hooks/use-navigate
            */}
            <button onClick={onClickDetailA}>Show DetailA</button>

            {/* Outlet을 지정하면, Children요소로 화면을 옮기더라도 위 요소는 고정요소로 표시된다. */}
            <Outlet />
        </div>
    )
}