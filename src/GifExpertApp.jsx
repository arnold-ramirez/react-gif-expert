import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (c) => {
    if (categories.includes(c)) return;

    setCategories([c, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((c) => (
        <GifGrid key={c} category={c} />
      ))}
    </>
  );
};
