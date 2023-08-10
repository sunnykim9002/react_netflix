import React from 'react'
import styled from 'styled-components'
import "./Footer.css";
export default function Footer() {
  return (
    <FooterContainer>
        <FooterContent>
            <FooterLinkContainer>
                <FooterLinkTitle>
                    넷플릭스 대한민국
                </FooterLinkTitle>
                <FooterLinkContent>
                    <FooterLink href="https://www.netflix.com/kr/">넷플릭스 소개</FooterLink>
                    <FooterLink href="https://www.netflix.com/kr/">고객센터</FooterLink>
                    <FooterLink href="https://www.netflix.com/kr/">미디어 센터</FooterLink>
                    <FooterLink href="https://www.netflix.com/kr/">소리센터</FooterLink>
                </FooterLinkContent>
                <FooterDescContainer>
                    <FooterDescRights>
                        Netflix Rights Reserved.
                    </FooterDescRights>
                </FooterDescContainer>
            </FooterLinkContainer>
        </FooterContent>
    </FooterContainer>
  )
}


const FooterContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding: 40px 0;
border-top: 1x solid rgb(25,25,25);
width:100%;
z-index: 100;
@media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
}

`;

const FooterContent = styled.div` 

`

const FooterLinkContainer = styled.div`
    width: 500px;
    @media (max-width: 768px) {
        width: 100%;

    }
`;

const FooterLinkTitle = styled.h1`
color: gray;
font-size: 17px;
`

const FooterLinkContent = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 35px;

@media (max-width: 768px) {
    margin-top: 26px;
}
`

const FooterLink = styled.div`
    color:gray;
    font-size: 14px;
    width: 110px;
    margin-bottom: 21px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        margin-bottom: 16px;
}
`

const FooterDescContainer = styled.div`
    margin-top:30px;
    @media (max-width: 768px) {
        margin-bottom: 20px;
}
`

const FooterDescRights = styled.div`
    color: white;
    font-size: 14px;
    text-align: left;
    @media (max-width: 768px) {
        margin-bottom: 20px;
}
`
