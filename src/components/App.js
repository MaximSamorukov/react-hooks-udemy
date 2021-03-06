import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import {
  Component1, Component2, Component3,
  Component4, Component5, Component6,
  Component7, Component8, Component9,
  Component10, Component11, Component12,
  Component13, Component14, Component620,
  Component621, Component622, Component623useDebounce,
  Component623useThrottle, Component624, Component625,
  Component626, Component627, Component628, Component629,
  Component630, Component631, Component632, Component633,
} from './lessons_components';
import MainComponent from "./lesson_8/components/MainLayout";
import MainComponentSWR from "./lesson_8_swr/components/MainLayout";
import MainComponentQuery from "./lesson_8_react_query/components/MainLayout";

function App() {
  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link style={{ marginRight: 20 }} to="/">Lessons 1 - 5</Link>
        <Link style={{ marginRight: 20 }} to="/lesson_6">Lesson 6</Link>
        <Link style={{ marginRight: 20 }} to="/lesson_8">Lesson 8</Link>
        <Link style={{ marginRight: 20 }} to="/lesson_8_swr">Lesson 8 SWR</Link>
        <Link to="/lesson_8_react_query">Lesson 8 React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={(
          <div className="app">
            <div>
              <Component1 />
              <Component2 />
              <Component3 />
              <Component4 />
              <Component5 />
            </div>
            <div>
              <Component6 />
              <Component7 />
              <Component8 />
              <Component9 />
              <Component10 />
            </div>
            <div>
              <Component11 />
              <Component12 />
              <Component13 />
              <Component14 />
            </div>
          </div>
        )} />
        <Route path="/lesson_6" element={(
          <div className="app">
            <div>
              <Component620 />
              <Component621 />
              <Component622 />
              <Component623useDebounce />
              <Component623useThrottle />
            </div>
            <div>
              <Component624 />
              <Component625 />
              <Component626 />
              <Component627 />
              <Component628 />
            </div>
            <div>
              <Component629 />
              <Component630 />
              <Component631 />
              <Component632 />
              <Component633 />
            </div>
          </div>
        )} />
        <Route path="/lesson_8" element={(
          <div className="app">
            <div
              style={{
                width: '100%',
                marginRight: '10px',
                marginLeft: '10px',
              }}
            >
              <MainComponent />
            </div>
          </div>
        )} />
        <Route path="/lesson_8_swr" element={(
          <div className="app">
            <div
              style={{
                width: '100%',
                marginRight: '10px',
                marginLeft: '10px',
              }}
            >
              <MainComponentSWR />
            </div>
          </div>
        )} />
        <Route path="/lesson_8_react_query" element={(
          <div className="app">
            <div
              style={{
                width: '100%',
                marginRight: '10px',
                marginLeft: '10px',
              }}
            >
              <MainComponentQuery />
            </div>
          </div>
        )} />
      </Routes>
    </>
  );
}

export default App;
