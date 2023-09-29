import React, { useEffect, useRef, useState } from 'react'
import { Task } from '../models'
import {MdEditNote} from "react-icons/md"
import {AiFillDelete} from "react-icons/ai"
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5"
import "./styles.css"
import { Draggable } from 'react-beautiful-dnd'

//type or interface both are ok  

type Props = {
    index:number 
    todo: Task,
    tasks: Task[],
    setTasks:React.Dispatch<React.SetStateAction<Task[]>>

}

const SingleTask = ({index,todo, tasks, setTasks}:Props) => {
  
  const [edit, setEdit]= useState<boolean>(false);
  const [editTask,setEditTask]= useState<string>(todo.task)
  
  const handleDone=(id:number)=>{
        setTasks(
            tasks.map((todo)=>todo.id===id?{...todo, isCompleted :!todo.isCompleted}:todo)
        )
  }

  const handleDelete=(id:number)=>{
    setTasks(
        tasks.filter((todo)=>todo.id!==id)
    )
  }

  const handleEdit=(e:React.FormEvent<HTMLFormElement>,id:number)=>{
    e.preventDefault()
    
    setTasks(tasks.map((todo)=>(todo.id===id ? {...todo, task:editTask}:todo)))
       
       setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)
  
  useEffect(()=>{
    inputRef.current?.focus()
  },[edit])

  
    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
        {
            (provided:any)=>(
                <form ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='singleTask' onSubmit={(e)=>handleEdit(e,todo.id)}>
        
                {edit?(
                        <input ref={inputRef}
                         className='singleTask_Text' 
                         value={editTask} onChange={(e)=>setEditTask(e.target.value)}
                         />
                ) : todo.isCompleted? (
                    <s className='singleTask_Text'>{todo.task}</s>
                ): <span className='singleTask_Text'>{todo.task}</span>}
        
               
        
                
            
        
        
                {/* <span className='singleTask_Text'>{todo.task}</span> */}
                <div>
                    <span className='icons' onClick={()=>{
                            if(!edit && !todo.isCompleted){
                                setEdit(!edit)
                            }
                    }}>
                    <MdEditNote/>
                    </span>
                    <span className='icons' onClick={()=>handleDelete(todo.id)}>
                        <AiFillDelete/>
                    </span>
                    <span className='icons' onClick={()=>handleDone(todo.id)}>
                        <IoCheckmarkDoneCircleSharp/>
                    </span>
                </div>
            </form>
            )
        }
      

        </Draggable>
   
  )
}

export default SingleTask