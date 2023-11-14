import styled from 'styled-components'

const FooterWrapper = styled.div`
    width: 100%;
    padding: 5px;
    background-color: gray;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Footer = () => {
    return(
        <FooterWrapper>
            © Save Tuba, 2023
        </FooterWrapper>
    )
}
