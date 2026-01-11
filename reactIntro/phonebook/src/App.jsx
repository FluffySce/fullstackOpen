import { useEffect, useState } from "react";
import contactService from "./services/contacts";

const DisplayPhonebook = ({ persons, removePerson }) => {
  return persons.map((p) => (
    <div key={p.id}>
      {p.name} - {p.number}
      <button onClick={() => removePerson(p.id)}>Delete</button>
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
    const existingPerson = persons.find((p) => p.name === newName);

    if (existingPerson) {
      //if name exists -> updating their number
      const updatedPerson = { ...existingPerson, number: newNumber };
      contactService
        .update(existingPerson.id, updatedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((p) =>
              p.id !== existingPerson.id ? p : returnedPerson
            )
          );
          setNewNumber("");
          setNewName("");
        })
        .catch((error) => {
          console.log(error);
          alert(`Could not update ${newName}`);
        });
    } else {
      //Adding new Person
      contactService
        .create({ name: newName, number: newNumber })
        .then((returnedPerson) => {
          setPersons([...persons, returnedPerson]);
          setNewNumber("");
          setNewName("");
        });
    }
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
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const searchPerson = persons.filter((p) =>
    p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  useEffect(() => {
    contactService.getAll().then((initialContacts) => {
      setPersons(initialContacts);
    });
  }, []);

  const removePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      contactService.remove(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

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
      <DisplayPhonebook persons={searchPerson} removePerson={removePerson} />
    </div>
  );
};

export default App;
