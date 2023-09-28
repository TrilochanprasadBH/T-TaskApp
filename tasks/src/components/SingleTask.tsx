import React from 'react'
import { Task } from '../models'

//type or interface both are ok  

type Props = {
    todo: Task,
    tasks: Task[],
    setTasks:React.Dispatch<React.SetStateAction<Task[]>>

}

const SingleTask = ({todo, tasks, setTasks}:Props) => {
  return (
    <div className='singleTask'>
        <span className='singleTask_Text'>{todo.task}</span>
    </div>
  )
}

export default SingleTask