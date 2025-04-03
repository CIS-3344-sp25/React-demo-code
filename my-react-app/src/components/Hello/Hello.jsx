import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hello(props) {
  const [name, setName] = useState("Alice");
  const [number, setNumber] = useState(0);
  //  let name = "Alice";
  const handleClick = () => {
    // console.log("Button clicked ", e.target);
    // console.log(name);
    // name = "Bob"
    setNumber((number) => number + 1);


  };

  const handleClickAgain = (name) => {
    // console.log("Hello " + name);
    setName("Bob");
    console.log(name);
  }

  useEffect(() => {
    console.log("useEffect ran");
    setNumber((number) => number + 1);
  }, [name]);

  return (
    <>
      <div>
        {/* <h1>Hello World again!</h1> */}
        {/* <p>Hello {props.name}</p>
        <p>Hello {props.age}</p>
        <p>Hello {props.occupation}</p>
        {props.children} */}
  <h1>Hello Component</h1>
  <h3>Name: {props.name}</h3>
  <button>
    <Link to="/NyTimes">Go To NyTimes</Link>
  </button>
        <button onClick={handleClick}>Number Action</button>
        <p>{name}</p>
        <p>{number}</p>

        <button onClick={() => {
          handleClickAgain('Luigi')
        }}>Name Action</button>
      </div>
    </>
  );
}

export default Hello;
