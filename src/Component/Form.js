export default function Form({ hornsFilter, setHornsFilter }) {
  function handleFilter(event) {
    setHornsFilter(event.target.value);
  }
  return (
    <form>
      <select name="hornsFilter" onChange={handleFilter}>
        <option value="" selected></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      {hornsFilter && <p>Filtering by {hornsFilter} horns</p>}
    </form>
  );
}
