import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {
    const [users, setusers] = useState([])
    const getApiCall = () => {

        axios.get("http://localhost:3001/product/product").then((res) => {
            console.log(res);
            console.log(res.data);
            console.log(res.data.data);
            setusers(res.data.data)
            
          }).catch((err) => {
            console.log("error....",err);
          })

    }
  return (
    <div>
        <h1>Api Demo 3</h1>
        <button onClick={() => getApiCall()}>Get Api Call</button>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.price}</td>
                <td>{user.status}</td>
                <td>{user.category}</td>
                <td>
                  <img src={user.avatar} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

