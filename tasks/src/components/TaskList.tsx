import React from 'react'
import './styles.css'
import { Task } from '../models'
import SingleTask from './SingleTask'
import { Droppable } from 'react-beautiful-dnd'

interface Props{
    tasks: Task[],
    setTasks:React.Dispatch<React.SetStateAction<Task[]>>,
    completedTask:Task[],
    setCompletedTask: React.Dispatch<React.SetStateAction<Task[]>>
}


const TaskList :React.FC<Props>= ({tasks, setTasks, completedTask,setCompletedTask}:Props) => {
  return (
   
    <div className="container">
        <Droppable droppableId='ListOfTask'>

        {
            (provided:any, snapshot:any)=>(
                <div className={`task ${snapshot.isDraggingOver?"dragactive":""}`} ref={provided.innerRef} {...provided.droppableProps}>
                <span className='task_heading'>
                    Active Tasks 
                </span>
                {tasks?.map((todo, index)=>(
                <SingleTask index={index} todo={todo} key={todo.id} tasks={tasks} setTasks={setTasks}/>
               ))}

               {provided.placeholder}
            </div>
            )
        }
       
       

        </Droppable>
      
      
        <Droppable droppableId="TaskRemove">
            {
                (provided:any, snapshot:any)=>(
                    <div className={`task_remove ${snapshot.isDraggingOver?"dragcomlpete":""}`} ref={provided.innerRef}{...provided.droppableProps}>
                    <span className='task_heading'>
                        Completed Tasks 
                    </span>
                    {completedTask?.map((todo, index)=>(
                    <SingleTask index={index} todo={todo} key={todo.id} tasks={completedTask} setTasks={setCompletedTask}/>
                   ))}

               {provided.placeholder}
                        {/* creates space in droppable area when we drag and take it there */}
                </div>
                )
            }


        </Droppable>
       


    </div>

  )
}

export default TaskList