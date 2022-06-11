import { Page2 } from "../Page2";
import { UrlParameter } from './../UrlParameter';

export const Page2Routes = [
    {
        path: "",
        element: <Page2 />,
        end: true
    },
    {
        path: ":id",
        element: <UrlParameter />,
        end: true
    }
];