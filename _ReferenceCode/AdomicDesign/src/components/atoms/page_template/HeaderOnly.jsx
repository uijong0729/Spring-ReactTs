
import { Header } from './../page_layout/Header';

export const HeaderOnly = (props) => {
    const { children } = props;
    return (
        <>
            <Header/>
            {children}
        </>
    )
}