import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../main'
import './Item.css'
import Card1 from './Card1'


const Item = () => {
  let [pprice,setPprice]=useState(0)
  let [count,setCount]=useState([])
 const {data}=useContext(dataContext)
  const [arrayData,setArrayData]=useState(data.products)
  const [finalPrice,setFinalPrice]=useState([])
  useEffect(()=>{
    console.log(arrayData)
  },[arrayData])
  useEffect(()=>{
    setFinalPrice(arrayData.map(data=>data.addToCart==='added'?data.totalPrice:0))
    setCount(arrayData.map(data=>data.addToCart==='added'?data.totalPrice/data.price:0))
  },arrayData)  
  console.log(count)

 
  
  useEffect(()=>{ 
    var hcount=0;
    for(let ccount of count)
    hcount+=Number(ccount)
    setCount(hcount)
    var hprice=0      
   for(let price of finalPrice){   
  hprice=hprice+Number(price)
  }
  setPprice(hprice)
  console.log(hprice)
  },finalPrice)
  
  
  
  
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
            {
            arrayData.map(data=><Card1 id={data.id} setArrayData={setArrayData} arrayData={arrayData}/>
        )
        
        }
            </div>
        <div className='col mt-4' >
            <h1>cart: <span style={{border:'1px solid black',padding:'5px 20px'}}>{count}</span></h1>
            {
            arrayData.map(data=>data.addToCart==='added'?
            
            <div className='mt-4' id='cartBox'>
              <h3 className='text-center' id='cartTitle'>{data.title}</h3>
              <div className='d-flex justify-content-center'>              
                <p className='ms-2'>price: ${data.price}</p>
                <p className='ms-5'>quantity: {data.quantity}</p>
              </div>                
                
                <h2 className='text-center' id='cartTotal'>total price: <span style={{color:'green'}}>${data.totalPrice}</span></h2>           
                
            </div>
            :<p></p>
        )
        
        }
       
        
        <h2>Total Price: <span style={{color:'red'}}>${pprice}</span></h2>
        
        </div>
        
        </div>
        
    </div>
  )
}

export default Item