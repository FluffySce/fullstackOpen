const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
      ))}
      total: {total}
    </div>
  );
};

export default Course;
