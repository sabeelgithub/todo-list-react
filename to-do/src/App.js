import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {

  // Task (ToDo List) state
  const [toDo,setToDo] = useState([
   
    
  ])
  
  // Temp state
  const [newTask,setNewTask] = useState('')
  const [updateData,setUpdateData] = useState('')

  // Add task
  const addTask = ()=>{
    if (newTask) {
      let num = toDo.length + 1
      let newEntry = {id:num,title:newTask,status:false}
      setToDo([...toDo,newEntry])
      setNewTask('')
    }

  }
  // Delete Task
  const deleteTask=(id)=>{
    let newTask = toDo.filter(task => task.id !==id)
    setToDo(newTask)

  }
  // mark task as done or completed
  const markDone = (id) =>{
    let newTask = toDo.map(task=>{
      if (task.id===id){
        return ({...task,status:!task.status})
      }
      return task
    })
    setToDo(newTask)

  }
  // cancel update
  const cancelUpdate=()=>{
    setUpdateData('')

  }
  // change task for update
  const changeTask=(e)=>{
    let newEntry = {
      id:updateData.id,
      title:e.target.value,
      status:updateData.status ? true : false
    }
    setUpdateData(newEntry)

  }
  // update task
  const updateTask=()=>{
    let filterRecord = [...toDo].filter(task=>task.id !== updateData.id)
    let updatedObject = [...filterRecord,updateData]
    setToDo(updatedObject)
    setUpdateData('')

  }

  return (
    <div className=" container App">
    <br /><br />
    <h2>To Do List App (ReactJS)</h2>
    <br /><br />
    
    {updateData && updateData ? (
      <UpdateForm updateData={updateData} updateTask={updateTask} changeTask={changeTask} cancelUpdate={cancelUpdate}/>
       ) : (
       <AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
    )}
    
  

     

 
    

    
    

    {toDo && toDo.length ? '': 'No Tasks....'}
    <ToDo toDo={toDo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
