import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ ratings }) => {
  return (
    <div>
      <p>good: {ratings.good}</p>
      <p>bad: {ratings.bad}</p>
      <p>neutral: {ratings.neutral}</p>
    </div>
  );
};

const App = () => {
  const [ratings, setRatings] = useState({ good: 0, bad: 0, neutral: 0 });
  const handleGood = () => {
    setRatings({ ...ratings, good: ratings.good + 1 });
    console.log("good", ratings.good + 1);
  };
  const handleBad = () => {
    setRatings({ ...ratings, bad: ratings.bad + 1 });
    console.log("bad", ratings.bad + 1);
  };
  const handleNeutral = () => {
    setRatings({ ...ratings, neutral: ratings.neutral + 1 });
    console.log("neutral", ratings.neutral + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text={"good"}></Button>
      <Button onClick={handleBad} text={"bad"}></Button>
      <Button onClick={handleNeutral} text={"neutral"}></Button>
      <h1>Stastics</h1>
      <Statistics ratings={ratings}></Statistics>
    </div>
  );
};

export default App;
