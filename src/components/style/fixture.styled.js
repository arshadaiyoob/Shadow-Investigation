import styled from "styled-components";

export const FixtureStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.skin};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px;
  padding: 60;
`;

export const TeamLogo = styled.img`
  width: 64px;
  height: 64px;
  margin: 5px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-left: 20px;
`;

export const Team = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : null)};
`;

export const Info = styled.h6`
  font-size: 12px;
  font-weight: 900;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: ${({ padding }) => (padding ? padding : 0)};
`;

export const Score = styled.h6`
  font-size: 32px;
  font-weight: 900;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const ScoreSection = styled.div`
  padding-left: 0rem;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const GameInfo = styled.div`
  display: flex;
  padding-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GInfo = styled.h6`
  font-size: 12px;
  font-weight: 900;
  padding: ${({ padding }) => (padding ? padding : "20px")};
`;
