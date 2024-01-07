import React, { useState } from 'react'
import { AppContext } from '../../context'
// import { StudentLists } from './StudentLists'

export const Students = () => {
  const [students1, setstudents] = useState([
    { id: 1, name: "Sujal Nayak", age: 20 },
    { id: 2, name: "Jenisha", age: 19 },
    {id: 3, name:"Vedant Patel", age:20}
  ])
    return(  
    
    <div>
        <h1>
            Student List
        </h1>
        <AppContext.Provider value = {{students1}}>
            {/* <StudentLists /> */}
        </AppContext.Provider>


    </div>
  )
}
