// src/components/StudentList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from '../features/students/studentsSlice';

const StudentList = () => {
  const students = useSelector(state => state.students.students);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteStudent(id));
  };

  return (
    // <div>
    //   <h2>All Students</h2>
    //   <ul>
    //     {students.map(student => (
    //       <li key={student.id}>
    //         <div>
    //           <strong>ID:</strong> {student.id}
    //         </div>
    //         <div>
    //           <strong>Name:</strong> {student.name}
    //         </div>
    //         <div>
    //           <strong>Email:</strong> {student.email}
    //         </div>
    //         <div>
    //           <strong>Phone:</strong> {student.phone}
    //         </div>
    //         <div>
    //           <strong>Address:</strong> {student.address}
    //         </div>
    //         <button onClick={() => handleDelete(student.id)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    

    <div className=' flex mx-auto justify-center items-center'>
      
      <table className='border w-[60%]'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody className='mx-auto justify-center items-center'>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
