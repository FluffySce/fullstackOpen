import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        {" "}
        <p>the app is used by pressing a button</p>
      </div>
    );
  }
  return (
    <div>
      <p>button press history: {allClicks.join(" ")}</p>
    </div>
  );
};

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
    setAllClicks(allClicks.concat("L"));
    setTotal(total + 1);
  };
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
    setAllClicks(allClicks.concat("R"));
    setTotal(total + 1);
  };
  const hello = (who) => {
    () => {
      console.log("Hello", who);
    };
  };

  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text={"Left+1"}></Button>
      <Button onClick={handleRightClick} text={"right+1"}></Button>
      {clicks.right}
      <History allClicks={allClicks}></History>
      <p>Total - {total}</p>
      <Button onClick={hello("react")} text={"testing something"}></Button>
      <Button onClick={hello("world")} text={"testing something"}></Button>
      <Button onClick={hello("idk")} text={"testing something"}></Button>
    </div>
  );
};

export default App;
