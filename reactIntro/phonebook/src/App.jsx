import { useState } from "react";

const DisplayPhonebook = ({ persons }) => {
  return persons.map((p, index) => (
    <div key={index}>
      {p.name} - {p.number}
    </div>
  ));
};

const Filter = ({ search, setSearch }) => {
  return (
    <div>
      Search:
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

const PersonForm = ({
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  persons,
  setPersons,
}) => {
  const updatePhonebook = (e) => {
    e.preventDefault();
    const nameExists = persons.some((p) => p.name === newName);
    const numberExists = persons.some((p) => p.number === newNumber);
    if (nameExists || numberExists) {
      alert(`${newName} or ${newNumber} already exists.`);
      return;
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewNumber("");
    setNewName("");
    console.log({ newName });
    console.log({ newNumber });
  };

  return (
    <div>
      <form>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: {""}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={updatePhonebook}>
            add
          </button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Artes Hellas",
      number: "18000-50000",
    },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const searchPerson = persons.filter((p) =>
    p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} setSearch={setSearch}></Filter>
      <h2>Add new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      ></PersonForm>
      <h2>Numbers</h2>
      <DisplayPhonebook persons={searchPerson} />
    </div>
  );
};

export default App;
