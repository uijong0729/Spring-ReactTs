import { NavigationBar } from "../components/navi/NavigationBar"
import { useContext } from "react"
import { AppContext } from "../provider/AppProvider" 

export const Home = () => {
    const context = useContext(AppContext);
    console.log(context)


    return (
        <div>
            <h3>Home is Home 갱신확인용 코멘트</h3>
        </div>
    )
}