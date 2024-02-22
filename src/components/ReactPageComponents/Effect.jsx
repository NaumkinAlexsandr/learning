import React, { useState, useEffect } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

function Effect() {
  //создаём состояние которое будет меняться в зависимости от выбранной кнопки
  const [type, setType] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  return (
    <>
      <h1 style={{ textAlign: "left" }}>Resource: {type}</h1>
      <Button
        onClick={() => setType("users")}
        id="example-btn"
        style={{ backgroundColor: "#83D350" }}
      >
        Users
      </Button>
      <Button onClick={() => setType("todos")} id="example-btn">
        Todos
      </Button>
      <Button
        onClick={() => setType("posts")}
        id="example-btn"
        style={{ backgroundColor: "#d0ccd1", color: "black" }}
      >
        Posts
      </Button>
      <Button
        onClick={() => setData([]) & setType("")}
        id="example-btn"
        style={{ backgroundColor: "#F60030" }}
      >
        Reset
      </Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Effect;
