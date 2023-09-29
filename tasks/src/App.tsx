
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import { Task } from './models';
import TaskList from './components/TaskList';
import { DragDropContext} from 'react-beautiful-dnd';
// import { DropResult } from 'react-beautiful-dnd';






const  App : React.FC = ()=> {
  const [task,setTask]= useState<string>("")
  //state to hold the input that is typed
  //1. create state for tasks, assigned string type  
  const [tasks, setTasks]= useState<Task[]>([])
 //6. this state is to store all tasks list 
  const [completedTask, setCompletedTask]= useState<Task[]>([])

  


  const handleAdd=(e:React.FormEvent<EventTarget>)=>{
    e.preventDefault()

    if(task){
      setTasks([...tasks, {id:Date.now(),task:task, isCompleted:false}])
    }
    
    setTask("") 
  }
  
  // console.log(tasks)
  const onDragEnd  = (result:any) => {
    //unable to use DropResult despite right use , version issue ! 
      // console.log(result); 
      const {source, destination}= result
      if(!destination) return 

      if(destination.droppableId===source.droppableId && destination.index===source.index) return


      let add;
       let active = tasks
       let complete= completedTask

      if(source.droppableId==="ListOfTask"){
        add= active[source.index]
        active.splice(source.index,1)
      }else{
        add= complete[source.index]
        complete.splice(source.index,1)

      }

     
      if(destination.droppableId==="ListOfTask"){
        active.splice(destination.index,0,add)
      }else{
        complete.splice(destination.index,0,add)
      }

     setCompletedTask(complete)
     setTasks(active)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>

    
    <div className="App">
     <span className='heading'>T-Tasks</span>
      <Input task={task} setTask={setTask} handleAdd={handleAdd}/>
      {/* 2. passing both task and setTask as props to input component, assign types in input component, hover over them  to know types here  */}
      <TaskList tasks={tasks} 
      setTasks={setTasks}
      completedTask={completedTask}
      setCompletedTask={setCompletedTask}
      />
    </div>
    </DragDropContext>
  );
}

export default App;
