import { Page1 } from "../Page1";
import { Page1DetailB } from "../Page1DetailB";
import { Page1DetailA } from './../Page1DetailA';

export const page1Routes = [
    {
        path: "detailA",
        element: <Page1DetailA />
    },
    {
        path: "detailB",
        element: <Page1DetailB />
    }
];