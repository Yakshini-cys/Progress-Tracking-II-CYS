import React from 'react'
import {useNavigate} from'react-router-dom'
export default function Blog() {
    const Navigate=useNavigate();
    const hanldeBack=()=>{
        Navigate("/home")
    }
  return (
    <div>
    <h1>This is blog component</h1>
    <button onClick={hanldeBack}>Back</button>
    </div>
  )
}
