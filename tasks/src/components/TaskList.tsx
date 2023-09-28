import React from 'react'
import './styles.css'
import { Task } from '../models'
import SingleTask from './SingleTask'

interface Props{
    tasks: Task[],
    setTasks:React.Dispatch<React.SetStateAction<Task[]>>
}


const TaskList :React.FC<Props>= ({tasks, setTasks}:Props) => {
  return (
    <div className='task'>
        {tasks?.map((todo)=>(
            <SingleTask todo={todo} key={todo.id} tasks={tasks} setTasks={setTasks}/>
        ))}
    </div>
  )
}

export default TaskList