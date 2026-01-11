import { useEffect, useState } from "react";
import DisplayPhonebook from "./components/DisplayPhonebook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import contactService from "./services/contacts";

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
