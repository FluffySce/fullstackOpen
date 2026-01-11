const Filter = ({ search, setSearch }) => {
  return (
    <div>
      Search:
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Filter;
