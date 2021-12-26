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
  Component630, Component631,
} from './lessons_components';
function App() {
  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link style={{ marginRight: 20 }} to="/">Lessons 1 - 5</Link>
        <Link to="/lesson_6">Lesson 6</Link>
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
            </div>
          </div>
        )} />
      </Routes>
    </>
  );
}

export default App;
