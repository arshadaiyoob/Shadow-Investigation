import styled from "styled-components";

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.footer};
  text-align: center;
  padding: 0px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
`;

export const FooterView = styled.div`
  display: block;
  padding: 10px;
  height: 10px;
  width: 100%;
`;

export const Text = styled.p`
font-size: 16;
color: ${({ theme}) => theme.ftext};
`
