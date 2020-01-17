import React from 'react';
import AddSection from '../features/new-todo';
import { useSelector } from 'react-redux';

export default () => {
  const todos = useSelector(state => state.todos);
  console.log(todos);
  return (
    <div>
      <h1>Todo goes here</h1>
      <AddSection todos={todos} />
    </div>
  );
};
