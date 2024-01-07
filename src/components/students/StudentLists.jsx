import React from 'react'
import { AppContext } from '../../context'
import { StudentSubLists } from './StudentSubLists'
import { useContext } from "react";

export const StudentLists = () => {
    const { students1 } = useContext(AppContext);
    console.log(students1)
  return (
    <div>
        <div>
      <h1>StudentList</h1>
      <table className="table table-dark">  
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {students1?.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <h3>child</h3>
    <StudentSubLists />
  </div>
  )
}
