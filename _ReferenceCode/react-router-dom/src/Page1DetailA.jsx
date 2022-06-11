import { useLocation, useNavigate } from "react-router-dom"

export const Page1DetailA = () => {
    const { state } = useLocation();
    const nav = useNavigate()
    const goBack = () => {
        nav(-1);
    }
    return (
        <div>
            <h1>Page 1 : Page1DetailA</h1>
            <button onClick={goBack}>go back</button>
        </div>
    )
}