import { put, takeLatest } from 'redux-saga/effects';

function* addTodo(action) {
  try {
    yield put({ type: 'ADD_TODO_SUCCEEDED', todo: action.todo });
  } catch (e) {
    yield put({ type: 'ADD_TODO_FAILED', message: e.message });
  }
}

function* watcher() {
  yield takeLatest('ADD_TODO', addTodo);
}

export default watcher;
