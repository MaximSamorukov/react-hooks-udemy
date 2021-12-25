import React, { useCallback, useState, useEffect, useRef, memo } from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import Wrapper from "./wrapper";
import { Row } from './component6_27';
import { useHistory } from '../../hooks/hooks';

function Component628 () {
  const [activeNumber, setActiveNumber] = useState(0);
  const numbers = Array.from({ length: 6 });
  const { values, deleteLast } = useHistory(activeNumber);
  const data = values.map((y, x) => ({ x, y }))
  return (
    <Wrapper>
      <div>useHistory</div>
      <Row btn={0} top={0} numbers={numbers} activeNumber={activeNumber} setActiveNumber={setActiveNumber} />
      <button onClick={() => deleteLast()}>DELETE LAST</button>
      <VictoryChart
        width={800}
        height={300}
        padding={20}
        theme={VictoryTheme.material}
        domain={{
          x: [0, Math.max(5, data.length)],
          y: [0, 5],
        }}
      >
        <VictoryLine
          style={{
            data: {
              stroke: "red",
              strokeWidth: 2,
            },
            parent: { border: "1px solid #ccc"}
          }}
          data={data}
        />
      </VictoryChart>
    </Wrapper>
  );
}

export default Component628;