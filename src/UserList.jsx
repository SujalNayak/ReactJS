import React from 'react'

export const UserList = (props) => {
  return (
    <div>  

        <div>
            {/* <h1>Title = {props.title}</h1> */}

            {/* {
                props?.users?.map((user) => {
                    return(
                        <ul>
                            <li>{user.id}</li>
                            <li>{user.name}</li>
                            <li>{user.age}</li>
                        </ul>
                    )
                })
            } */}
            {/* <h1><button onClick={()=>{props.test("Button Clicked!!!")}}>Click On This</button></h1> */}
            {/* {
                props?.users?.map((user) => {
                return(
                    <div>
                        <button onClick={()=> {props.test(user.name)}}>{user.name}</button><br />
                    
                    </div>
                )
            })
            } */}
            {
            props.style(() => {
               {
                {
                    props?.users?.map((user) => {
                    return(
                        <div>
                            <button onClick={()=> {props.test(user.name)}}>{user.name}</button><br />
                        
                        </div>
                    )
                })
                }
               } 
            })
            }
        </div>
    </div>


  )
}
