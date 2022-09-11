import { NavigationBar } from "../components/navi/NavigationBar"
import { FC, useContext } from "react"
import { AppContext } from "../provider/AppProvider" 

export const Home :FC = () => {
    const context = useContext(AppContext);
    console.log(context)

    return (
        <div>
            <h3>홈 화면</h3>
        </div>
    )
}