import {useParams, useLocation} from "react-router-dom"

export const UrlParameter = () => {
    const { id } = useParams();
    const { search } = useLocation(); // 또는 useLocation().search
    
    // search에 담긴 것 : ?name=이름
    const query = new URLSearchParams(search);
    
    return (
        <div>
            <h1>Url Parameter page</h1>
            <p>Param : {id}</p>
            <p>query : {query.get('name')}</p>
        </div>
    )
}