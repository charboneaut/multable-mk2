import "./App.css";
import { useState } from "react";
import Controls from "./comps/controls/Controls";
import Table from "./comps/table/Table";
import { tableCalc } from "./comps/table/tableCalc";

function App() {
  const [maxW, setW] = useState(5);
  const [maxH, setH] = useState(6);
  const [curW, setCurW] = useState(undefined);
  const [curH, setCurH] = useState(undefined);
  const [mode, setMode] = useState("mul");
  let table = tableCalc(mode, maxH, maxW);
  return (
    <>
      <Controls
        setCurH={setCurH}
        setCurW={setCurW}
        setMode={setMode}
        setW={setW}
        setH={setH}
        curW={curW}
        curH={curH}
        maxW={maxW}
        maxH={maxH}
      />
      <Table maxW={maxW} table={table} mode={mode} />
    </>
  );
}

export default App;
