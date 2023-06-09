import React from 'react'
import { Link } from 'react-router-dom'
import Task from './Task'
export default function Home() {
  return (
    <div className="overflow-y-hidden">
    <div className='bg-blue-300 h-10 hover:shadow-lg hover:shadow-blue-950 border-2 border-blue-900 text-end pr-5 space-x-4'>
     <Link to="/singUp">SignUp</Link> 
     <Link to="/home">Home</Link> 
     <Link to="/">Login</Link> 
     <Link to="/forget">Forget</Link> 
    </div>
    <div> 

    <Task />
    </div>
    </div>
  )
}
