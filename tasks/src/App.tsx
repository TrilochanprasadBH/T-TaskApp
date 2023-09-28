import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import { Task } from './models';
import TaskList from './components/TaskList';

const  App : React.FC = ()=> {
  const [task,setTask]= useState<string>("")
  //state to hold the input that is typed
  //1. create state for tasks, assigned string type  
  const [tasks, setTasks]= useState<Task[]>([])
 //6. this state is to store all tasks list 
  
  const handleAdd=(e:React.FormEvent<EventTarget>)=>{
    e.preventDefault()

    if(task){
      setTasks([...tasks, {id:Date.now(),task:task, isCompleted:false}])
    }
    
    setTask("") 
  }
  
  console.log(tasks)

  return (
    <div className="App">
     <span className='heading'>T-Tasks</span>
      <Input task={task} setTask={setTask} handleAdd={handleAdd}/>
      {/* 2. passing both task and setTask as props to input component, assign types in input component, hover over them  to know types here  */}
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
