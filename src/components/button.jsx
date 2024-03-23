import React, { useEffect, useState } from 'react'

const Button = ({card,update,change}) => {
  const [cls2,setCls2]=useState('d-none')
  const [del,setDel]=useState('d-inline card mt-5')
  const [id,setId]=useState(0)
  useEffect(()=>{
    setId(card.id)
  },[])
  
 const updater=()=>{
  update(id)
  setCls2('d-block')
 }
 const changer=()=>{
  change(id)
  setCls2('d-none')
    
 }
 const deleter=()=>{
  setDel('d-none')
  
 }
 
 
  return (
    <div className={del}>
        <div className="card mt-5" style={{width: '18rem',backgroundColor:'lightgreen'}}>
            <div className="card-body">
                <p>Name:  {card.name} </p>
                
                <p className="card-text">Description: {card.description}</p>
                <div className="dropdown">
                    <label for="status">Status :</label>
                    <select name="status" id="status" className='ms-1'>
                    <option value="Completed">Completed</option>
                    <option value="NotCompleted">NotCompleted</option>
                    </select>
                </div>
                <button onClick={updater} className="mt-2"style={{color:'white',backgroundColor:'green'}}>Edit</button>
                <button className='ms-2' onClick={deleter} style={{color:'white',backgroundColor:'red'}}>Delete</button>
                <button className={cls2} onClick={changer}>confirm</button>
             </div>
        </div>

    </div>
  )
}

export default Button