import React from 'react'

export default function Taskitem(props) {
    console.log(props.item,props.ky)
    const OnDelete =()=>{
      props.Delete(props.ky)
      console.log(props.ky)
    }
  return (
    <div className='flex ml-6' >
      <input type="checkbox" className='w-5' placeholder={props.ky} />
      <p className='border-2 border-blue-800 bg-slate-50 text-blue-700 rounded-lg hover:shadow-xl hover:shadow-blue-900 m-2 pl-2 pr-2   break-words '>
        {props.item} 
      </p>
      <button onClick={OnDelete}>🗙</button>
    </div>
  )
}
