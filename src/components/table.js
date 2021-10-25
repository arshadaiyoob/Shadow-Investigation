import React from "react";

import { StyledTable } from "./style/table.styled";
import { Container } from "./style/container.styled";
export default function Table({ data }) {
  const TableMarkup = ({ titles, data }) => (
    <StyledTable>
      <caption>Kills Events</caption>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {titles.map((title, index) => (
              <td key={index}>{item[title]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </tfoot> */}
    </StyledTable>
  );
  return (
    <Container>
      <TableMarkup titles={Object.keys(data[0])} data={data} />
    </Container>
  );
}
