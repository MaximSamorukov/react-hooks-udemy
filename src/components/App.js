import './App.css';
import {
  Component1, Component2, Component3,
  Component4, Component5, Component6,
  Component7, Component8, Component9,
  Component10, Component11,
} from './lessons_components';
function App() {
  return (
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
      </div>
    </div>
  );
}

export default App;
