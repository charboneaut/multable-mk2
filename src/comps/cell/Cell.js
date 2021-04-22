import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";

function Cell(props) {
  function createPopover() {
    if (props.mode === "mul") {
      return `${props.factorK} X ${props.factorI}`;
    } else {
      return (
        <p style={{ marginBottom: 0 }}>
          {props.factorI}
          <sup>{props.factorK}</sup>
        </p>
      );
    }
  }
  const cellPopover = (
    <Popover>
      <Popover.Content style={{ fontSize: "2em", fontStyle: "italic" }}>
        {createPopover()}
      </Popover.Content>
    </Popover>
  );
  return props.mode !== "adm" ? (
    <OverlayTrigger trigger="click" overlay={cellPopover} placement="left">
      <td style={{ userSelect: "none" }}>{props.num}</td>
    </OverlayTrigger>
  ) : (
    <td style={{ userSelect: "none" }}>{props.num}</td>
  );
}

export default Cell;
