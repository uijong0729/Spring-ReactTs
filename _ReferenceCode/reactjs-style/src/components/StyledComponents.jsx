import styled from "styled-components";

export const StyledComponents = () => {
    return (
        // styled-components는 다른 component와 구분되지 않기 때문에 명명룰 등에 신경쓴다
        <SContainer>
            <STitleStyle>
                StyledComponents
            </STitleStyle>
            <SButtonStyle>
                APPLY
            </SButtonStyle>
        </SContainer>
    )
}

// Container태그가 스타일이 적용된 div태그로서 표시된다.
const SContainer = styled.div`
        border: solid 2px #392eff;
        border-radius: 20px;
        padding: 8px;
        justify-content: space-around;
        align-items: center;
`

const STitleStyle = styled.p`
    margin: 0;
    color: #3d84a8;
`

const SButtonStyle = styled.button`
    background-color: #abdee8;
    &:hover{
        background-color: #392eff;
        color: aliceblue;
        cursor: pointer;
    }
`