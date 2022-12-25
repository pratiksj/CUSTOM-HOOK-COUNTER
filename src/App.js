//import { useState } from "react";
import useCounter from "./useCounter";
const App = (props) => {
  //const [counter, setCounter] = useState(0);
  const counter = useCounter();
  const left = useCounter();
  const right = useCounter();

  return (
    <div>
      <div>{counter.value}</div>
      <button onClick={counter.increase}>plus</button>
      {/* <button onClick={() => setCounter(counter - 1)}>minus</button> */}
      <button onClick={counter.decrease}>minus</button>
      <button onClick={counter.zero}>zero</button>

      <div>{left.value}</div>
      <button onClick={left.increase}>left</button>
      <button onClick={right.increase}>right</button>
      <div>{right.value}</div>
    </div>
  );
};
export default App;
