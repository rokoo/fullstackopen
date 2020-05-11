import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <p>{props.course}</p>;
};

const Content = (props) => {
  const part1 = props.part1;
  const part2 = props.part2;
  const part3 = props.part3;
  return (
    <div>
      <Part part={part1.part} number={part1.number}></Part>
      <Part part={part2.part} number={part2.number}></Part>
      <Part part={part3.part} number={part3.number}></Part>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.number}
    </p>
  );
};
const APP = () => {
  const course = "Half Stack Application development";
  const parts = {
    part1: {
      part: "Fundamental of React",
      number: 10,
    },
    part2: {
      part: "Using props to pass data",
      number: 7,
    },
    part3: {
      part: "State of a component",
      number: 15,
    },
  };
  return (
    <div>
      <Header course={course}></Header>
      <Content part1={parts.part1} part2={parts.part2} part3={parts.part3} />
      <Total part1={parts.part1} part2={parts.part2} part3={parts.part3} />
    </div>
  );
};

const Total = (props) => {
  return <p>{props.part1.number + props.part2.number + props.part3.number}</p>;
};

ReactDOM.render(<APP />, document.getElementById("root"));
