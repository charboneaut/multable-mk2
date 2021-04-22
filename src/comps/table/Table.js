import { createHeading } from "../../helpers";
import { v4 } from "uuid";
import { Table as BootstrapTable } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Cell from "../cell/Cell";

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
                {row.map((numObj) => (
                  <Cell
                    num={numObj.num}
                    factorI={numObj.factorI}
                    factorK={numObj.factorK}
                    mode={props.mode}
                    key={v4()}
                  />
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
