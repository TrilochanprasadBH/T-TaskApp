import React from 'react'

const Input = () => {
  return (
    <form>
        <input type='input' placeholder='Enter your task' className='my_task'/>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default Input 