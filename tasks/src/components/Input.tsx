import React, { useRef } from 'react'
import "./styles.css"

interface Props{
    task:string,
    setTask: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent<EventTarget>)=>void
    //its a function , and void is written as it returns nothing  , undefined
}

//when typing focus happens-on input ele, rest screen shadow, click enter focus doesnt de focus.
//to automatically de focus upon clicking enter- use useRef !  

const Input = ({task, setTask, handleAdd}:Props) => {
    //3. as we receive state here, we get error coz their type is not defined , so create a interface and then assign type to props.
    //later these interface or type declarations can be moved to a single file and import here, better code quality
    const inputRef= useRef<HTMLInputElement>(null);
  
  
    return (
    <form className='input' onSubmit={(e)=>{handleAdd(e); inputRef.current?.blur();}}>
        <input type='input' 
        ref={inputRef}
        placeholder='Enter your task' 
        className='my_task'
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        {/* 4.  give value and onchange property  */}
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default Input 