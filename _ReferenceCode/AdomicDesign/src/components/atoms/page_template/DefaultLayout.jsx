
import { Footer } from '../page_layout/Footer';
import { Header } from './../page_layout/Header';

export const DefaultLayout = (props) => {
    const { children } = props;
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}