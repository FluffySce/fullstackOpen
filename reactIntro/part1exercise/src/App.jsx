const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  console.log(course);
  return (
    <div>
      <p>{course.parts[0].name}</p>
      <p>{course.parts[1].name}</p>
      <p>{course.parts[2].name}</p>
    </div>
  );
};

const Total = ({ course }) => {
  return (
    <p>
      Number of exercises {""}
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  );
};
export default App;
