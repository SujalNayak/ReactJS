import React, { useContext } from 'react'
import { AppContext } from '../../context'

export const StudentSubLists = () => {
    const {students} = useContext(AppContext);
  return (
    <div>StudentSubLists
        <h1>
        {students?.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.city}</td>
              </tr>
            );
          })}
        </h1>
    </div>
  )
}
