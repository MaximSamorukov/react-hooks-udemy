import React, { useState } from "react";
import Wrapper from "./wrapper";

function Component1 () {
  const [clicks, setClicks] = useState(0);
  const onClick = () => setClicks((prev) => prev + 1);
  return (
    <Wrapper>
      <button onClick={onClick}>Click ({clicks})</button>
    </Wrapper>
  )
}

export default Component1;