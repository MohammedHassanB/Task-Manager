import { useState } from "react"
export default function NewTask({onAdd})
{
  const[enteredTask,setEnteredTask]=useState('');
  function handelChange(event)
  {
setEnteredTask(event.target.value);
  }

  function handelClick()
  {
    if(enteredTask.trim('')==='')
      return;
    setEnteredTask('');
    onAdd(enteredTask);
  }
  return (
    <div className="flex items-center gap-4"> 
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handelChange } value={enteredTask}>
      </input>
      <button className="text-stone-700 hover:text-stone-950" onClick={handelClick}> Add Task</button>
    </div>
  )
}