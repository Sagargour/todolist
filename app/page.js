"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
      e.preventDefault()
     setMainTask([...mainTask ,{title, desc}]);
      settitle("");
      setdesc("");
      console.log(mainTask);
  };

  const deleteHandler = (i) =>{
let copytask= [...mainTask]
copytask.splice(i,1)
setMainTask(copytask)
  }

  let renderTask =<h2>No Task Available</h2>
if (mainTask.length>0){
  renderTask= mainTask.map((t,i)=>
  {
return(
<li key={i} className='flex items-center justify-between mb-8'>
  <div className='flex items-center  justify-between w-2/3'>
  <h5 className='text-2xl font-semibold'>{t.title}</h5>
  <h6 className='text-xl font-medium'> {t.desc} </h6>

</div>
<button 
onClick = {()=>{
  deleteHandler(i)
}}
className='bg-red-400 px-4 py-2 rounded-xl p-2 text-white'>Delete</button>
</li>
);
  });
}
  return (
    <>
    <h1 className='bg-zinc-950  text-yellow-50 p-5 text-center text-5xl 
    font-sans font-bold'>Sagar's Todo list</h1>

<form onSubmit={submitHandler}>
  <input type='text' className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 " 
  placeholder="Enter Title Here"
  value={title}
  onChange={(e)=>{
  settitle(e.target.value)
  }} ></input>

<input type='text' className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 " 
placeholder="Enter Description Here"
value={desc}
onChange={(e)=>{
setdesc(e.target.value) 
}}
></input>

<button className='bg-black
 text-white p-3 py-3 px-4 text-2xl font-bold rounded-xl m-5'> Add Task</button>

</form>
<hr />

<div className='p-8 bg-fuchsia-200 text-center text-2xl'>
<ul>
  {renderTask}
</ul>

</div>

    </>

    
  )
}

export default page