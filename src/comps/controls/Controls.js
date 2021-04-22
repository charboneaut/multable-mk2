import {
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { useState } from "react";
function Controls(props) {
  const [typeShow, setTShow] = useState(false);
  const [lenShow, setLShow] = useState(false);
  function handleSubmit() {
    if (
      String(props.curH).match(/[^0-9]/g) ||
      String(props.curW).match(/[^0-9]/g)
    ) {
      setTShow(true);
      return;
    }
    if (Number(props.curH) * Number(props.curW) > 15000) {
      setLShow(true);
      return;
    }
    props.setW(Number(props.curW));
    props.setH(Number(props.curH) + 1);
    setTShow(false);
    setLShow(false);
  }
  const typeMessage = "Numbers only ya?";
  const lenMessage =
    "Custom input dimensions are restricted to ~15,000 cells to prevent browser stalling.";
  const genPopover = (
    <Popover>
      <Popover.Content>{lenShow ? lenMessage : typeMessage}</Popover.Content>
    </Popover>
  );
  const opPopover = (
    <Popover>
      <Popover.Content>It's hard to find verbs for these</Popover.Content>
    </Popover>
  );
  return (
    <Container id="control" fluid>
      <Row>
        <Col md="auto">
          <Button onClick={() => props.setW(props.maxW + 1)} variant="dark">
            Extend Width
          </Button>
        </Col>
        <Col md="auto">
          <Button onClick={() => props.setH(props.maxH + 1)} variant="dark">
            Extend Height
          </Button>
        </Col>
        <Col md="auto">
          <Dropdown>
            <Dropdown.Toggle variant="dark">Operation</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => props.setMode("mul")}>
                Multiply
              </Dropdown.Item>
              <Dropdown.Item onClick={() => props.setMode("exp")}>
                Exponentiate
              </Dropdown.Item>
              <Dropdown.Item onClick={() => props.setMode("adm")}>
                Admire
              </Dropdown.Item>
              <OverlayTrigger
                overlay={opPopover}
                trigger={"hover"}
                placement="right"
              >
                <div
                  style={{
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "gray",
                  }}
                >
                  ?
                </div>
              </OverlayTrigger>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md="auto">
          <input
            placeholder="Custom width..."
            value={props.curW}
            onChange={(event) => props.setCurW(event.currentTarget.value)}
            className="offsetBottom"
          />
        </Col>
        <Col md="auto">
          <input
            placeholder="Custom height..."
            value={props.curH}
            onChange={(event) => props.setCurH(event.currentTarget.value)}
            className="offsetBottom"
          />
        </Col>
        <Col>
          {/* react-bootstrap needs to update some libs, until then this is gonna flare up with deprication warnings */}
          <OverlayTrigger
            placement="right"
            overlay={genPopover}
            show={typeShow || lenShow}
          >
            <Button variant="dark" onClick={handleSubmit}>
              Update Table
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  );
}

export default Controls;
