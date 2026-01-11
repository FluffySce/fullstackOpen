import contactService from "../services/contacts";

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

export default PersonForm;
