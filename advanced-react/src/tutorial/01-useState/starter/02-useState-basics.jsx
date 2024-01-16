import { useState } from "react";
// useState hook
// It returns an array with two elements: the current state value, and a function that can be used to update the state
// state update triggers re-render

const UseStateBasics = () => {
  // const value = useState(1)[0]
  // const func = useState(1)[1]
  // console.log(value, func)

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
};

export default UseStateBasics;
