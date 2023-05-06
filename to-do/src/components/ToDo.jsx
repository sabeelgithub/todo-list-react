import React from "react"
import {RiDeleteBinLine} from 'react-icons/ri'
import  {BsFillPencilFill} from 'react-icons/bs'
import  {AiFillCheckCircle} from 'react-icons/ai'
const ToDo = ({toDo,markDone,setUpdateData,deleteTask})=>{
    return (
        <>
        {toDo && toDo
            .sort((a,b)=>a.id>b.id ? 1 : -1)
            .map((task,index)=>{
            return (
              <React.Fragment key={task.id}>
                <div className='col taskBg'>
                  <div className={task.status ? 'done':''}>
                    <span className='taskNumber'>{index+1}</span>
                    <span className='taskText'>{task.title}</span>
                  </div>
                  <div className='iconsWrap'>
                    <span title="Completed/Not completed" onClick={()=>markDone(task.id)}>
                      <AiFillCheckCircle/>
                    </span>
                    {task.status ? null :(
                      <span title='Edit' onClick={()=>setUpdateData({
                        id:task.id,
                        title:task.title,
                        status:task.status ? true : false
      
                      })}>
                      <BsFillPencilFill/>
                    </span>
                    )}
                    
                    <span title='Delete' onClick={()=>deleteTask(task.id)}>
                      <RiDeleteBinLine/>
                    </span>
                  </div>
                </div>
              
              </React.Fragment>
            )
          })}
        </>
        
    )
}
export default ToDo