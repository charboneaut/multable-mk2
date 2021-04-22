import { createHeading } from "./helpers";
import { v4 } from "uuid";
import { Table as BootstrapTable } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Table(props) {
  let count = -1;
  return (
    <Container fluid>
      <BootstrapTable striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            {createHeading(props.maxW).map((num) => (
              <td key={v4()}>{num}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.table.map(function (row) {
            count++;
            return (
              <tr key={v4()}>
                <td key={v4()}>{count}</td>
                {row.map((num) => (
                  <td key={v4()}>{num}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </BootstrapTable>
    </Container>
  );
}

export default Table;
