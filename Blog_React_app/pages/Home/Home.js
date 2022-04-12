import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TodoList({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <TodoItem key={item.id} value={item}>
            {(name) => <span>{name}</span>}
          </TodoItem>
        ))}
      </ul>
    </>
  );
}

function TodoItem({ value }) {
  return (
    <Link to={`/authors/${value.id}`} className="list-group-item">
      {value.name}
    </Link>
  );
}

export const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);
  return (
    <>
      <div>home</div>;
      <TodoList items={items} />
    </>
  );
};
