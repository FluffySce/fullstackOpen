import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ ratings }) => {
  const total = ratings.good + ratings.bad + ratings.neutral;

  if (total === 0) {
    return <p>No Feedback Given</p>;
  }

  const average = (ratings.good - ratings.bad) / total;
  const positive = (ratings.good / total) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text={"Good"} value={ratings.good}></StatisticLine>
        <StatisticLine text={"Bad"} value={ratings.bad}></StatisticLine>
        <StatisticLine text={"Neutral"} value={ratings.neutral}></StatisticLine>
        <StatisticLine text={"Total"} value={total}></StatisticLine>
        <StatisticLine text={"Average"} value={average}></StatisticLine>
        <StatisticLine
          text={"Positive"}
          value={`${positive} %`}
        ></StatisticLine>
      </tbody>
    </table>
  );
};

const App = () => {
  const [ratings, setRatings] = useState({ good: 0, bad: 0, neutral: 0 });
  const handleGood = () => {
    setRatings({ ...ratings, good: ratings.good + 1 });
  };
  const handleBad = () => {
    setRatings({ ...ratings, bad: ratings.bad + 1 });
  };
  const handleNeutral = () => {
    setRatings({ ...ratings, neutral: ratings.neutral + 1 });
  };
  const handleReset = () => {
    setRatings({ good: 0, bad: 0, neutral: 0 });
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text={"good"}></Button>
      <Button onClick={handleBad} text={"bad"}></Button>
      <Button onClick={handleNeutral} text={"neutral"}></Button>
      <Button onClick={handleReset} text={"reset"}></Button>
      <h1>Stastics</h1>
      <Statistics ratings={ratings}></Statistics>
    </div>
  );
};

export default App;
