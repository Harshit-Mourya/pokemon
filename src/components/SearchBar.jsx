import "./style/SearchBar.css";

export default function SearchBar({ searItem, setSearchItem }) {
  let handleChange = (evt) => {
    setSearchItem(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searItem}
          onChange={handleChange}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
}
