import React, { useState } from 'react'
import Taskitem from './Taskitem'

export default function Task(props) {
  const [text, settext] = useState()
  const [content, setcontent] = useState([])
  const [ky,setky] = useState(0)
  
  let save = (e) => {
      e.preventDefault()
    
    let info={
      text : text,
      
    }
    
    setcontent([...content,info])
    setky(ky+1)
    
    console.log(content)
    
    
    
  }
  if(props.y === "clear"){
    setcontent([])
    props.y = "free"
    console.log("hbbhi")
  }
  
  const Delete=(ky)=>{
        content.forEach((e,i)=>{
            if(i===ky){
                e={}
            }
        })
        setcontent([])
  }
  
  return (
    <div className='flex justify-center mt-10 h-screen '>
      <div className='h-4/5 w-3/4 bg-blue-400 border-2 border-blue-900 rounded-xl'>
        <input type="text" name="text" id="text" placeholder="write here" onChange={(e) => { settext(e.target.value) }} value={text} className='w-4/5 border-2 border-blue-600 m-5 pl-2 rounded-tl-xl rounded-br-xl ' />
        <button onClick={save} className='bg-blue-500 p-0.5 border-2 border-blue-800 hover:shadow-lg hover:shadow-gray-50 rounded-md '>Save</button>
        {content.map((con,i)=>{return <Taskitem Delete={Delete} item={con.text} ky={ky}/>})}
      </div>
    </div>
  )
}
