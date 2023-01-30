import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [catSearch, setCatSearch] = useState("");

  const onInputChange = ({ target }) => {
    setCatSearch(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (catSearch.trim().length <= 1) return;

    onNewCategory(catSearch.trim());

    setCatSearch("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={catSearch}
        onChange={onInputChange}
      />
    </form>
  );
};
