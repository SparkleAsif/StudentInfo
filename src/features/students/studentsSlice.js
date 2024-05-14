// src/features/students/studentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
  },
});

export const { addStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
