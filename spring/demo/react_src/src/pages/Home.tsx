import { NavigationBar } from "../components/navi/NavigationBar"
import { FC, useContext } from "react"
import { LoginContext } from "../provider/AppProvider";

export const Home :FC = () => {
    const context = useContext(LoginContext);
    console.log(context?.id)
    console.log(context?.isLogin)
    
    return (
        <div>
            <h3>홈 화면</h3>
        </div>
    )
}