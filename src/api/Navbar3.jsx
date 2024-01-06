import React from 'react'
import { Link } from 'react-router-dom';



export const Navbar3 = () => {
  return (
    <header>Navbar3

        <div className="logo"></div>
        <div className="display-menu">
            <Link className='menu' to={"/Home1"}>Home</Link>
            <Link className='menu' to={"/About"}>About</Link>
            <Link className='menu' to={"/Services"}>Services</Link>
            <Link className='menu' to={"/Portfolio"}>Portfolio</Link>

            <Link className='menu' to={"/ApiiDemo1"}>ApiiDemo1</Link>
            <Link className='menu' to={"/ApiiDemo2"}>ApiiDemo2</Link>
            <Link className='menu' to={"/ApiiDemo3"}>ApiiDemo3</Link>
            <Link className='menu' to={"/PostApiDemo"}>PostApiDemo</Link>
            <Link className='menu' to={"/PostApiDemo1"}>PostApiDemo1</Link>
            <Link className='menu' to={"/PostApi2"}>PostApi2</Link>
            <Link className='menu' to={"/PostApi3"}>PostApi3</Link>


           
        </div>
    </header>
  )
}

export default Navbar3;