export const useState: string = `
import React, { useState } from "react";
import Button from "@mui/material/IconButton";

function State() {
  const [counter, setCounter] = useState(0);

  const [state, setState] = useState({
    title: "Some count",
    data: new Date().toLocaleDateString(),
  });

  function increment() {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  }

  function decrement() {
    setCounter((prevCounter) => {
      return prevCounter - 1;
    });
  }

  function reset() {
    setCounter(0);
  }

  function updateTitle() {
    setState((update) => {
      return {
        ...update,
        title: "New count",
      };
    });
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <Button
        onClick={increment}
        style={{ backgroundColor: "#83D350" }}
      >
        Add
      </Button>
      <Button onClick={decrement} >
        Subtract
      </Button>
      <Button
        onClick={reset}
        style={{ backgroundColor: "#F60030" }}
      >
        Reset
      </Button>
      <Button
        onClick={updateTitle}
        style={{ backgroundColor: "#d0ccd1", color: "black" }}
      >
        Edit
      </Button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}

export default State;

`;

export const useStateTwo: string = `
import React, { useState } from "react";
import Button from "@mui/material/IconButton";

export default function StateTwo() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumbers = () => {
    const newNumbers = Number(prompt("Enter new number"));
    setNumbers([...numbers, newNumbers]);
    console.log(\`Added new number: \${newNumbers}\`);
    console.log(\`Prev array numbers: \${numbers}\`);
    console.log(\`New array numbers: \${[...numbers, newNumbers]}\`);
  };

  return (
    <>
      <ul>
        {numbers.map((numb, index) => (
          <li key={index}>{numb}</li>
        ))}
      </ul>
      <Button onClick={addNumbers} >
        Add
      </Button>
    </>
  );
}
`;

export const useEffect: string = `
import React, { useState, useEffect } from "react";

function Effect() {
  const [type, setType] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(\`https://jsonplaceholder.typicode.com/\${type}\`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  return (
    <>
      <h1 style={{ textAlign: "left" }}>Resource: {type}</h1>
      <Button
        onClick={() => setType("users")}
        style={{ backgroundColor: "#83D350" }}
      >
        Users
      </Button>
      <Button onClick={() => setType("todos")} >
        Todos
      </Button>
      <Button
        onClick={() => setType("posts")}
        style={{ backgroundColor: "#d0ccd1", color: "black" }}
      >
        Posts
      </Button>
      <Button
        onClick={() => setData([]) & setType("")}
        style={{ backgroundColor: "#F60030" }}
      >
        Reset
      </Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Effect;
`;

export const useContext: string = `
************** Contexy.jsx **************

import React, { useState } from "react";
import Alerts from "./alert";
import NewContext from "./newContext";

export const AlertContext = React.createContext();

function Context() {
  const [alert, setAlert] = useState(false);

  const toggleAlert = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider value={alert}>
      <>
        <Alerts />
        <NewContext toggle={toggleAlert} />
      </>
    </AlertContext.Provider>
  );
}

export default Context;

************** alert.js **************

import React, { useContext } from "react";
import { AlertContext } from "./ContextTwo";
import Alert from "@mui/material/Alert";

export default function Alerts() {
  const alert = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div className="alert ">
      <Alert variant="filled" severity="info">
        Alert Context!
      </Alert>
    </div>
  );
}


************** newContext.js **************

import React from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

export default function NewContext({ toggle }) {
  return (
    <Button onClick={toggle} id="example-btn">
      Push
    </Button>
  );
}

`;

export const contextExample: string = `
import React from "react";

const TitleContext = React.createContext();

const LevelThree = () => (
  <TitleContext.Consumer>
    {({ title }) => <h5>{title}</h5>}
  </TitleContext.Consumer>
);
const LevelTwo = () => <LevelThree />;
const LevelOne = () => <LevelTwo />;

export default function ContextExample() {
  return (
    <>
      <h4 className="text-center">Context</h4>
      <TitleContext.Provider value={{ title: "Hello World!" }}>
        <LevelOne />
      </TitleContext.Provider>
    </>
  );
}

`;

export const contextExampleProps: string = `
import React from "react";

const LevelThree = ({ title }) => <h5>{title}</h5>;
const LevelTwo = ({ title }) => <LevelThree title={title} />;
const LevelOne = ({ title }) => <LevelTwo title={title} />;

export default function ContextExampleProps() {
  return (
    <>
      <h4 className="text-center">Props</h4>
      <LevelOne title="Hello World!" />
    </>
  );
}
`;

export const useReducer: string = `
import React, { useReducer } from "react";
import Button from "@mui/material/IconButton";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error(\`Unsupported action type: \${action.type}\`);
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <h1>Counter: {state.count}</h1>
      <Button
        style={{ backgroundColor: "#83D350" }}
        onClick={handleIncrement}
      >
        Add
      </Button>
      <Button onClick={handleDecrement}>
        Subtract
      </Button>
      <Button
        style={{ backgroundColor: "#F60030" }}
        onClick={handleReset}
      >
        Reset
      </Button>
    </>
  );
}

export default Reducer;

`;

export const useCallback: string = `
************** Callback.jsx **************

import React, { useState, useCallback } from "react";
import Button from "@mui/material/IconButton";
import ItemList from "./itemList";

function Callback() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const style = {
    color: colored ? "#83D350" : "#2196f3",
  };

  const generateItems = useCallback(() => {
    return new Array(count).fill("").map((_, i) => \`Element \${i + 1}\`);
  }, [count]);

  return (
    <>
      <h1 style={style}>Numbers: {count}</h1>
      <Button
        onClick={() => setCount((prew) => prew + 1)}
        style={{ backgroundColor: "#83D350" }}
      >
        Add
      </Button>
      <Button onClick={() => setCount((prew) => prew - 1)} >
        Subtract
      </Button>
      <Button
        onClick={() => setColored((prew) => !prew)}
        style={{ backgroundColor: "#d0ccd1", color: "black" }}
      >
        Edit
      </Button>
      <ItemList getItems={generateItems} />
    </>
  );
}

export default Callback;


************** itemList.js **************

import React, { useEffect, useState } from "react";

export default function ItemList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
  }, [getItems]);
  return (
    <ul className="mt-3">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
`;

export const useMemo: string = `
import React, { useState, useMemo } from "react";
import Button from "@mui/material/IconButton";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num;
}

function Memo() {
  const [number, setNumber] = useState(33);
  const [colored, setColored] = useState(false);

  const style = useMemo(() => {
    return {
      color: colored ? "#83D350" : "#2196f3",
    };
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  return (
    <>
      <h1 style={style}>Numbers: {computed}</h1>
      <Button
        onClick={() => setNumber((prew) => prew + 1)}
        style={{ backgroundColor: "#83D350" }}
      >
        Add
      </Button>
      <Button onClick={() => setNumber((prew) => prew - 1)} >
        Subtract
      </Button>
      <Button
        onClick={() => setColored((prew) => !prew)}
        style={{ backgroundColor: "#d0ccd1", color: "black" }}
      >
        Edit
      </Button>
    </>
  );
}

export default Memo;
`;

export const useRef: string = `
import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/IconButton";

function UseRef() {
  const [value, setValue] = useState(" ");
  const renderCount = useRef(null);
  const inputRef = useRef(null);

  const buttonFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <>
      <h1>Amount renders: {renderCount.current}</h1>
      <div>
        <input
          style={{ height: "30px", borderRadius: "8px", marginRight: "5px" }}
          ref={inputRef}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button  onClick={buttonFocus}>
          Focus
        </Button>
      </div>
    </>
  );
}

export default UseRef;
`;
