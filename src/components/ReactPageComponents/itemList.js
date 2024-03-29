import React, { useEffect, useState } from "react";

export default function ItemList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
  }, [getItems]);
  return (
    <ul className="mt-3">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
