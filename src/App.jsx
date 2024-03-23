import React, { useState } from 'react'
import './App.css'
import Button from './components/button'

const App = () => {
  
  
  const [id,setId]=useState(1)
  const [name,setName]=useState([])
  const [description,setDescription]=useState([])
  const [cards,setCard]=useState([])
  const addDetail=(e)=>{
    e.preventDefault();
    setName(e.target.newName.value)
    setDescription(e.target.newDescription.value)
    setId(id+1)
    const newCard={
      name:e.target.newName.value,
      description:e.target.newDescription.value,
      id:id,
    }
    setCard([...cards,newCard])
    e.target.newName.value='';
    e.target.newDescription.value='';
    console.log(cards)
  }
  const update=(id)=>{
    //const uCard=cards.find(uCard=>uCard.id===id)
    
    const card1=cards.find(card2=>card2.id===id)
    console.log(card1)
    document.getElementById('newName').value=card1.name
    document.getElementById('newDescription').value=card1.description
    
    
    
  }
  const change=(id)=>{
    let card11=cards.find(card2=>card2.id===id)
    card11={
      ...card11,
      name:  document.getElementById('newName').value,
      description: document.getElementById('newDescription').value
    }
    setCard(cards.map(card=>card.id===card11.id?card11:card))
    document.getElementById('newName').value=''
    document.getElementById('newDescription').value=''
   
  }
  
  
  
  return (
    <div>
      <div className='container-fluid'>
        <div className='row mt-4' id='header'>
          <div className='col'><h2 style={{color:'green'}}>My todo</h2></div>          
        </div>
          <form  onSubmit={addDetail}>
          <div className='row mt-3'>
             <div className='col-5'>
                <input type="text"  placeholder='Todo Name' name='newName' id='newName' required/>
              </div>
              <div className='col-5'>
              <input type="text" placeholder='Todo Description' name='newDescription' id='newDescription' required/>
              </div>
              <div className='col-2'>
              <button  type='submit' style={{color:'white',backgroundColor:'green',fontSize:'smaller'}}>Add Todo</button>
              
              </div>
              </div>

            </form>
            <div className='row'>
            <h4>My todos</h4>
            </div>
            <div className='row'>
             
              <div className='col'>
              {
                cards.map(card=>(<Button card={card} update={update} change={change}/>))
            
            }
              </div>
              
            </div>
            
      </div>
    </div>
  )
}

export default App