// clock
import React, { useEffect, useState } from "react";
export default function Clock() {
  let [timer, setTimer] = useState(0);

  useEffect(
    function () {
      let Id = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);

      return () => {
        clearTimeout(Id);
      };
    },

    [timer]
  );

  return (
    <div>
      <h1>Time :{timer}</h1>
    </div>
  );
}

// ---------------------------------------
//multiple update at once
import { useState } from "react";

export default function Counter(params) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          console.log(count);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increment
      </button>
    </div>
  );
}

// how can we update a state multiple times at once

// setCount((count) => count + 1);
// setCount((count) => count + 1);
// setCount((count) => count + 1);

// ------------------------------------
//state vs ref
import React, { useState, useRef } from "react";

export default function Counter2() {
  let refVal = useRef(0);
  let [stateVal, setStateVal] = useState(0);

  function HandleFunction1() {
    refVal.current++;
    console.log(refVal.current);
  }
  function HandleFunction2() {
    setStateVal(stateVal + 1);
    console.log(stateVal);
  }

  return (
    <div>
      <button onClick={HandleFunction1}>
        Increment ref - {refVal.current}
      </button>
      <button onClick={HandleFunction2}>Increment state - {stateVal}</button>
    </div>
  );
}

// ------------------------------------
//custom hooks

import React, { useState } from "react";

export default function NameInput() {
  let [input, setInput] = useState("");
  function HandleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1>Check the controlled input</h1>
      <input onChange={HandleInput} type="text" value={input} />
    </div>
  );
}

// once you will refresh now, then input should be present in the input
// -> store the data in the local storage using custom hooks

// -------- start your custom hooks here --------

//useLocalStorge
import React, { useState } from "react";

export default function useLocalStorage(initialValue) {
  let [input, setInput] = useState(initialValue);
  return [input, setInput];
}

// ----------

// import React, { useState } from "react";
import React from "react";
import useLocalStorage from "./useLocalStorge"; //observe

export default function NameInput() {
  let [input, setInput] = useLocalStorage(""); //observe
  function HandleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1>Check the controlled input</h1>
      <input onChange={HandleInput} type="text" value={input} />
    </div>
  );
}

// ----------------------------------------------

//data from child to parent
import React from "react";
export default function Parent(){
    function HandleData(dataa){
        console.log(dataa);
    }
    return(
        <div>   
            <Child HandleData={HandleData} />
        </div>
    )
}

export function Child({HandleData}){
    let d = "hello bhaijaan";
    return(
        <div>
            <h1 onClick={()=>HandleData(d)}>baccha</h1>
        </div>
    )
}

// ---------------------------

