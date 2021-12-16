import React, { useState,  } from "react";
import Wrapper from "../wrapper";
import { Main } from "./main_part";
import { LeftSide } from "./left_side";
import { RightSide } from "./right_side";
import { Header } from "./header";
import { Footer } from "./footer";
import { ThemeProvider } from "./context/themeContext";
import { Controller } from "./controller";
import { MenuProvider } from "./context/dataContext";

function Component11 () {
  const [, setState] = useState();

  return (
    <Wrapper>
      <MenuProvider>
        <ThemeProvider>
          <p>useContext</p>
          <div>
            <Header />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>
            <LeftSide />
            <Main />
            <RightSide />
          </div>
          <div>
            <Footer />
          </div>
          <Controller />
        </ThemeProvider>
      </MenuProvider>
    </Wrapper>
  )
}

export default Component11;