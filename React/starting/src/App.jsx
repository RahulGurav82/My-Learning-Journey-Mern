import "./App.css";
import {Title} from "./Title.jsx";

function Description() {
  return <h3>i am the description</h3>
}

function App() {

  return (
  <div>
    <Title />
    <Description />
  </div>

  );
}

export default App