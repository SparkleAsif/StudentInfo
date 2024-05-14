// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Student Information App</h1>
        <AddStudentForm />
        <StudentList />
      </div>
    </Provider>
  );
};

export default App;
