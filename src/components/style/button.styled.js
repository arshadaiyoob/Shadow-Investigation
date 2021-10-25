import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 10px;
  margin-right: 32px;
  background-color: ${({ theme }) => theme.toggle};
  color: ${({ theme }) => theme.text};
  &:hover {
    opacity: 0.9;
    transition: scale(0.98);
  }
`;
