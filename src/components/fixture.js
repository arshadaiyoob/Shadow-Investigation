import React from "react";
import {
  FixtureStyled,
  TeamLogo,
  Team,
  Col,
  Info,
  ScoreSection,
  Score,
  GameInfo,
  GInfo,
} from "./style/fixture.styled";
import { Container } from "./style/container.styled";
export default function Fixture() {
  return (
    <FixtureStyled>
      <Container>
        <Team>
          <TeamLogo src="https://www.dictionary.com/e/wp-content/uploads/2018/07/CS-GO3.jpg" />
          <Col>
            <Info>Game Type</Info>
            <Info>CSGO</Info>
          </Col>
          <ScoreSection>
            <Col center={true}>
              <Info>Team 1</Info>
              <Score>0</Score>
            </Col>
            <Info padding="20px">vs</Info>
            <Col center={true}>
              <Info>Team 2</Info>
              <Score>0</Score>
            </Col>
          </ScoreSection>
        </Team>
        <GameInfo>
          <GInfo>StartTime: 2021-10-24T12:10:32.406879Z</GInfo>
          <GInfo>Tournament: Summer Showdown </GInfo>
          <GInfo>Series: United Pro Series </GInfo>
          <GInfo>MatchSeriesType: BO3</GInfo>
        </GameInfo>
      </Container>
    </FixtureStyled>
  );
}
