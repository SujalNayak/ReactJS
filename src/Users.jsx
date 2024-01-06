import React from 'react'
import {UserList} from './UserList'
import { Header } from './components/Header';
import Footer from './components/Footer';

export const Users = (props) => {
  // var test;
  var users = [
    {
      id:"1",
      name:"Sujal",
      age: "20"
    },
    {
      id:"2",
      name:"Jenisha",
      age: "18"
    },
    {
      id:"3",
      name:"Honey",
      age: "21"
    },
    {
      id:"4",
      name:"Vedant",
      age:"21"
    }
  ]


  const test = (name) => {
    alert(name)
  } 
  return (
    <div>
        {/* <h1>Users</h1> */}
        <div className='App'>
          {/* <h2>{props.title}</h2> */}
          {/* <UserList title = {props.title} users = {users} test ={test}/> */}
          <UserList style = {props.style} users = {users}/>
        </div>
    </div>
  )
}
