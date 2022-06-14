import { BrowserRouter, Link } from "react-router-dom"
import { AppRouter } from "../AppRouter"

export const AppNavi = () => {
    return(
        <div>
          <BrowserRouter>
            <div>
                <h1>Home</h1>
                <p>Home화면</p>
            </div> 
                <Link to="/app">To APP</Link><br/>
                <Link to="/">Home</Link>
            <AppRouter />
          </BrowserRouter>
        </div>
    )
}