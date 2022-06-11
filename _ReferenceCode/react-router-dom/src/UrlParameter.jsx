import {useParams} from "react-router-dom"

export const UrlParameter = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Url Parameter page</h1>
            <p>Param : {id}</p>
        </div>
    )
}