import React, { useContext,useState } from 'react'
import { dataContext } from '../main'

const Card1 = ({id,setArrayData,arrayData}) => {
    
  const [addedToCart,setAddedToCart] =useState(false) 
let trueData=arrayData.find(datax=>datax.id===id)
//console.log(trueData)
    const [stock,setStock]=useState(0)
  const [stockChange,setStockChange]=useState(false)
  const addCart=()=>{    
    trueData={
        ...trueData,
        addToCart:'added',
        totalPrice:stockChange?(trueData.stock-stock)*trueData.price:'0',       
        quantity:trueData.stock-stock,
    }
   setArrayData(arrayData.map(data1=>data1.id===trueData.id?trueData:data1))
   setAddedToCart(true)
  }
  const removeCart=()=>{    
    trueData={
        ...trueData,       
        addToCart:'removed',
        
    }
   setArrayData(arrayData.map(data1=>data1.id===trueData.id?trueData:data1))
   setAddedToCart(false)
  }
  return (
    <div>
        <div className='container'>
            <div className='mt-4' >
                 <div className='d-flex' id='body'>
                     <div className="card" style={{width: '25rem'}}>
                         
                         <div className="card-body">
                          <div className='d-flex'>
                          <img src={trueData.images[0]} alt="" style={{width:'150px'}} />
                              <div>
                                  <h5 className="d-flex card-title align-center">{trueData.title} </h5>
                                  <h5 className="card-text ms-3">price: ${trueData.price}</h5>
                              </div>
                          </div>                          
                             
                            
                             <p>{trueData.description}</p>
                             <div>
                                <p>stock: <span style={{color:'red',fontWeight:'bolder'}}>{stockChange?stock:trueData.stock}</span></p>
                                <input onChange={(e)=>{                               
                                setStockChange(true)                                
                                setStock(trueData.stock-e.target.value)
                             }} type="number" id='count' max={trueData.stock}/> <br />
                                <button onClick={addedToCart?removeCart:addCart}>{addedToCart?'remove from Cart':'add to Cart'}</button>
                             </div>
                              <p>total price: $<span style={{color:'green',fontWeight:'bolder'}}>{stockChange?(trueData.stock-stock)*trueData.price:'0'}</span></p>         
                         </div>
                     </div> 
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Card1