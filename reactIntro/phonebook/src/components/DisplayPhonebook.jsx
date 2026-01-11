const DisplayPhonebook = ({ persons, removePerson }) => {
  return persons.map((p) => (
    <div key={p.id}>
      {p.name} - {p.number}
      <button onClick={() => removePerson(p.id)}>Delete</button>
    </div>
  ));
};

export default DisplayPhonebook;
