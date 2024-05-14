// src/components/StudentInfo.js
import React from 'react';

const StudentInfo = ({ student }) => {
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: {student.name}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
};

export default StudentInfo;
