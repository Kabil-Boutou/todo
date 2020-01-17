import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import Input from '../../ui-kit/input';
import Button from '../../ui-kit/button';
import { useDispatch, useStore } from 'react-redux';

export default ({ todos }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      todo: ''
    },
    onSubmit: ({ todo }) => {
      dispatch({ type: 'ADD_TODO', todo: { label: todo, done: false } });
      //SON.stringify(values.todo, null, 2)
    },
    onReset: () => {
      console.log('rest form now');
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input id='todo' name='todo' type='text' onChange={formik.handleChange} value={formik.values.todo} />
      <Input value='submit' type='submit' />
      {todos.map(({ todo }) => {
        return <h2>{todo.label}</h2>;
      })}
    </form>
  );
};
