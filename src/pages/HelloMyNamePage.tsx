import { useState } from 'react';

export default function HelloMyNamePage() {
const [name, setName] = useState("");


const nameInput =(event: any) => {
  setName(event.target.value);
};

const [isGreet, setIsGreet] = useState(false);
const [result, setResult] = useState("Please insert your name");
const greetMe = () => {
  if (name.trim() === "") {
    setIsGreet(false);
    setResult("Please insert your name");
  } else {
    setIsGreet(true);
    setResult(`Hello ${name}`);
  }
}

  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInput}
        value={name}

      />
      <button className="btn btn-primary" onClick={greetMe}>Greet Me</button>
      {/* Result Text */}
      <p
      className={isGreet ? "" : "text-danger"}
      >{result}</p>
    </div>
  );
}
