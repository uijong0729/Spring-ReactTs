import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Top } from './../components/atoms/page_pages/Top';
import { Users } from './../components/atoms/page_pages/Users';


export const MyRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/users" element={<Users/> }/>
            </Routes>
        </BrowserRouter>
    )
}