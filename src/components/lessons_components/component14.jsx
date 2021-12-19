import React, { useState } from "react";
import Wrapper from "./wrapper";
import { useUppercaseState, useLowercaseState, useTrimmedState } from "./component14/hookFactory";
import { SubComponent } from "./component14/subComponent";

function Component14 () {
  const [uppercase, setUppercase] = useUppercaseState('');
  const [lowercase, setLowercase] = useLowercaseState('');
  const [trimmed, setTrimmed] = useTrimmedState('');
  return (
    <Wrapper>
      Hook Factory
      <SubComponent value={uppercase} setter={setUppercase} label="Upper case" />
      <SubComponent value={lowercase} setter={setLowercase} label="Lower case" />
      <SubComponent value={trimmed} setter={setTrimmed} label="Trimmed case" />
    </Wrapper>
  )
}

export default Component14;