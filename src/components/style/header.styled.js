import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.skin};
  box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.5);
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 0 20px;
  overflow: hidden;
`;
