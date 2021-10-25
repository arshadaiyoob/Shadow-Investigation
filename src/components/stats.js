import React from "react";
import {
  CardStat,
  EventLogo,
  Icon,
  Row,
  Col,
  Info,
  Score,
} from "./style/cardstat.styled";
import { Container } from "./style/container.styled";

export default function stats() {
  return (
    <Container>
      <Row center={true}>
        <CardStat>
          <Row>
            <EventLogo color="#FF1A00">
              <Icon src="./Images/kill.png" />
            </EventLogo>
            <Col>
              <Info>Kills</Info>
              <Score>0</Score>
            </Col>
          </Row>
        </CardStat>
        <CardStat>
          <Row>
            <EventLogo color="#FFA200">
              <Icon src="./Images/rollback.png" />
            </EventLogo>
            <Col>
              <Info>Rollbacks</Info>
              <Score>0</Score>
            </Col>
          </Row>
        </CardStat>
        <CardStat>
          <Row>
            <EventLogo color="#00FAA4">
              <Icon src="./Images/start.png" />
            </EventLogo>
            <Col>
              <Info>StartRound</Info>
              <Score>0</Score>
            </Col>
          </Row>
        </CardStat>
        <CardStat>
          <Row>
            <EventLogo color="#00FF2B">
              <Icon src="./Images/end.png" />
            </EventLogo>
            <Col>
              <Info>EndRound</Info>
              <Score>0</Score>
            </Col>
          </Row>
        </CardStat>
        <CardStat>
          <Row>
            <EventLogo color="#00B1FF">
              <Icon src="./Images/update.png" />
            </EventLogo>
            <Col>
              <Info>Updates</Info>
              <Score>0</Score>
            </Col>
          </Row>
        </CardStat>
        <CardStat>
          <Row>
            <EventLogo color="#646464">
              <Icon src="./Images/timeout.png" />
            </EventLogo>
            <Col>
              <Info>Timeouts</Info>
              <Score>0</Score>
            </Col>
          </Row>
        </CardStat>
        <CardStat>
          <Row>
            <EventLogo color="#646FFF">
              <Icon src="./Images/other.png" />
            </EventLogo>
            <Col>
              <Info>Other</Info>
              <Score>0</Score>
            </Col>
          </Row>
        </CardStat>
      </Row>
    </Container>
  );
}
