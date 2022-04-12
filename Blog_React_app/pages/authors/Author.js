import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function TodoList({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <TodoItem key={item.id} value={item}>
            {(title) => <span>{title}</span>}
          </TodoItem>
        ))}
      </ul>
    </>
  );
}

function TodoItem({ value }) {
  return (
    <Link to={`/authors/${value.id}`} className="list-group-item">
      {value.title}
    </Link>
  );
}
export const Author = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);
  console.log(items);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  console.log(posts);
  return (
    <>
      <div>author</div>;<h1>{items.name}</h1>
      <h2>{items.username}</h2>
      <h2>{items.email}</h2>
      <TodoList items={posts} />
    </>
  );
};
