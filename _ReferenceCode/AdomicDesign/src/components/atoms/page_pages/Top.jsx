import styled from "styled-components"
import { DefaultLayout } from './../page_template/DefaultLayout';

export const Top = () => {
    return(
        <DefaultLayout>
            <SContainer>
                <h2>Top Page</h2>
            </SContainer>
        </DefaultLayout>
    )
}

const SContainer = styled.div`
    text-align: center;
`