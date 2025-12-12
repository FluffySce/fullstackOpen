// here react defines a component with the name "App"
// this component is rendered in main.jsx

//technically this compnonent is defined as a JS func. w/o parameters.
//this func is assigned to constant var "App". --> we are using "arrow function here"

/*
const App = () => {
  // normal js code working here
  console.log("component test");
  // dynamic code that can be rendered inside a component
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  return (
    <div>
      <p>Hello World, right now it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};
export default App;
*/

// lets modify app.jsx with multiple components
const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, My age is {props.age}
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = "10";
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={"Maya"} age={26 + 10}></Hello>
      <Hello name={name} age={age}></Hello>
    </div>
  );
};

export default App;
