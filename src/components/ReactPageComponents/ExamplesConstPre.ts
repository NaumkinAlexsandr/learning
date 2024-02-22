export const nameExamples: string = `
import React, { Component } from "react";

export default class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alex",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "Alexander",
    });
  }

  render() {
    return (
      <>
        <h4>Name: {this.state.name} </h4>
        <button className="mb-2" onClick={this.handleClick}>
          Push
        </button>
      </>
    );
  }
}
`;

export const counterClass: string = `
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.rest = this.rest.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  rest() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <>
        <div className="classCounter">
          <h1>Score: {this.state.count} </h1>
          <div>
            <Button onClick={this.increment}>Add</Button>
            <Button onClick={this.decrement}>Remove</Button>
            <Button onClick={this.rest}>Reset</Button>
          </div>
        </div>
      </>
    );
  }
}            
`;

export const counterFunction: string = `
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);            
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.rest = this.rest.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  rest() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <>
        <div className="classCounter">
          <h1>Score: {this.state.count} </h1>
          <div>
            <Button onClick={this.increment}>Add</Button>
            <Button onClick={this.decrement}>Remove</Button>
            <Button onClick={this.rest}>Reset</Button>
          </div>
        </div>
      </>
    );
  }
}    
`;

export const textInput: string = `
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class TextInputClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      inputBtn: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBtn = this.handleChangeBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeBtn(event) {
      this.setState({
        inputBtn: event.target.value,
      });
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.inputBtn,
    });
  }

  render() {
    return (
      <>
        <Form className="textInput">
          <Form.Label>Text output</Form.Label>
          <Form.Control onChange={this.handleChange} />
          <h3>{this.state.input}</h3>
        </Form>
        <hr />
        <Form className="textInput" onSubmit={this.handleSubmit}>
          <Form.Label>Text output on click</Form.Label>
            <Form.Control
              value={this.state.inputBtn}
              onChange={this.handleChangeBtn}
            />
            <Button type="submit">Submit</Button>
            <h3>{this.state.submit}</h3>
        </Form>
      </>
    );
  }
}
`;

export const firstProps: string = `
import React, { useState } from "react";

export default function FirstProps({ names }) {
    const [name, setName] = useState("");

    const handleName = () => {
        setName(prompt("Введіть ваше ім'я"));
    };

    return (
        <>
            <h6>Виведення імені шляхом передачі через props</h6>
            <h2>Привіт, {names}</h2>
            <hr />
            <h6>Виведення імені отриманого з prompt </h6>
            <button  onClick={handleName}>
                Натисни
            </button>
            <h2>Привіт, {name}</h2>
        </>
    );
}
`;

export const firstPropsRU: string = `
import React, { useState } from "react";

export default function FirstProps({ names }) {
  const [name, setName] = useState("");

  const handleName = () => {
    setName(prompt("Введите ваше имя"));
  };

  return (
    <>
      <h6>Вывод имени путем передачи через props</h6>
      <h2>Привет, {names}</h2>
      <hr />
      <h6>Вывод имени полученного из prompt </h6>
      <button  onClick={handleName}>
        Нажмите
      </button>
      <h2>Привет, {name}</h2>
    </>
  );
}
`;

export const renderProps: string = `
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const url = "https://jsonplaceholder.typicode.com/posts";

function DataProvider(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.splice(0, 3)));
  }, []);

  return props.render(data);
}

function PostListForUser(props) {
  return (
    <div>
      {props.posts.length ? (
        props.posts.map((post) => (
          <div key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
}

function PostListForAdmin(props) {
  return (
    <div>
      {props.posts.length ? (
        props.posts.map((post) => (
          <div key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <Button variant="secondary">Edite</Button>
            <Button variant="danger" className=" ms-2">
              Delete
            </Button>
          </div>
        ))
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
}

export default function Blog() {
  const [admin, setAdmin] = useState(false);

  const toggle = () => setAdmin(!admin);

  const render = (data) => {
    return admin ? (
      <PostListForAdmin posts={data} />
    ) : (
      <PostListForUser posts={data} />
    );
  };

  return (
    <>      
      <DataProvider render={render} />
      <Button className="mt-2 mb-2" onClick={toggle}>
        {admin ? "user" : "admin"}
      </Button>
    </>
  );
}
`;

export const clockFunction: string = `
import React, { useState, useEffect } from "react";

export default function ClockFunction(props) {
  const [dateNow, setDate] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setDate(getTime());
    }, 1000);
  }, []);

  function getTime() {
    const date = new Date();

    return { date };
  }

  return (
    <>
      <h4>Time now!</h4>
      <h4>{dateNow.date.toLocaleTimeString()}</h4>
    </>
  );
}
`;

export const clockClass: string = `
import React, { Component } from "react";

export default class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <h4>Time now!</h4>            
        <h4>{this.state.date.toLocaleTimeString()}.</h4>
      </>
    );
  }
}
`;

export const temperatureClass: string = `
import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <span style={{ margin: "10px 0" }}>The water will boil.</span>;
  }
  return <span style={{ margin: "10px 0" }}>The water will not boil.</span>;
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset style={{ margin: "10px 0" }}>
        <legend style={{ marginBottom: "5px" }}>
          Temperature in degrees {scaleNames[scale]}:
        </legend>
        <input
          style={{ marginBottom: "5px" }}
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default class TemperatureClass extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
`;

export const refExamples: string = `
import React, { Component } from "react";

export default class Ref extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.textInput.focus();
  }

  render() {    
    return (
      <>
        <div>
          <input
            style={{ height: "30px", borderRadius: "8px", marginRight: "5px" }}
            type="text"
            ref={(input) => {
              this.textInput = input;
            }}
          />
          <button onClick={this.focus}>
            Focus
          </button>
        </div>
      </>
    );
  }
}
`;

export const keyExamples: string = `
import React from "react";

const people = ["Jack", "Max", "Leo", "Alex", "Kira"];

export default function Key() {
  return (
    <>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </>
  );
}
`;

export const formExamples: string = `
import React, { Component } from "react";

const POSITIONS = [
  {
    id: "fd",
    value: "Front-end Developer",
    title: "Front-end Developer",
  },
  {
    id: "bd",
    value: "Back-end Developer",
    title: "Back-end Developer",
  },
];

class Form extends Component {
  state = {
    inputText: "",
    textareaText: "",
    selectText: "",
    showData: {
      name: "",
      text: "",
      position: "",
    },
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputText: value,
    });
  };

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({
      textareaText: value,
    });
  };

  handleSelectChange = ({ target: { value } }) => {
    this.setState({
      selectText: value,
    });
  };

  handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: "",
      textareaText: "",
      selectText: "",
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      },
    });
  };
  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return (
      <div>
        <form className="basic-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={inputText}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Text:
            <textarea
              value={textareaText}
              onChange={this.handleTextareaChange}
            />
          </label>
          <select value={selectText} onChange={this.handleSelectChange}>
            {POSITIONS.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>
          <button onClick={this.handleShow}>Show</button>
        </form>
        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </div>
    );
  }
}
export default Form;
`;
