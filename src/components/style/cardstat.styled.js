import styled from "styled-components";

export const CardStat = styled.div`
  display: flex;
  width: 350px;
  height: 110px;
  align-items: center;
  background-color: ${({ theme }) => theme.skin};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 0 20px;
  padding: 60;
`;

export const EventLogo = styled.div`
  width: 64px;
  height: 64px;
  margin: 5px;
  background-color: ${({ color }) => color};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-left: 20px;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin: 15px;
  background-size: cover;
  background-position: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : null)};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : null)};
`;

export const Info = styled.h6`
  font-size: 16px;
  font-weight: 900;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: ${({ padding }) => (padding ? padding : "10px")};
`;

export const Score = styled.h6`
  font-size: 32px;
  font-weight: 900;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: ${({ padding }) => (padding ? padding : "10px")};
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
