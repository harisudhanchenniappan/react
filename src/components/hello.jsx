import React, { Component } from 'react'
import './hello.css'

export class Hello extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            class1:'btn btn-outline-secondary',
            vlass1:'d-none',
            class2:'btn btn-outline-secondary',
            vlass2:'d-none',
            class3:'btn btn-outline-secondary',
            vlass3:'d-none',
            class4:'btn btn-outline-secondary',
            vlass4:'d-none',
            class5:'btn btn-outline-secondary',
            vlass5:'d-none',
            class6:'btn btn-outline-secondary',
            vlass6:'d-none',
            class7:'btn btn-outline-secondary',
            vlass7:'d-none',
            class8:'btn btn-outline-secondary',
            vlass8:'d-none',
            class9:'btn btn-outline-secondary',
            vlass9:'d-none',
            class10:'btn btn-outline-secondary',
            vlass10:'d-none',
            class11:'btn btn-outline-secondary',
            vlass11:'d-none',
            class12:'btn btn-outline-secondary',
            vlass12:'d-none',
            
        }
    }
    addItem1=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class1:'d-none',
            vlass1:'btn btn-outline-secondary',
        })
    }
    addItem2=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class2:'d-none',
            vlass2:'btn btn-outline-secondary',
        })
    }
    addItem3=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class3:'d-none',
            vlass3:'btn btn-outline-secondary',
        })
    }
    addItem4=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class4:'d-none',
            vlass4:'btn btn-outline-secondary',
        })
    }
    addItem5=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class5:'d-none',
            vlass5:'btn btn-outline-secondary',
        })
    }
    addItem6=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class6:'d-none',
            vlass6:'btn btn-outline-secondary',
        })
    }
    addItem7=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class7:'d-none',
            vlass7:'btn btn-outline-secondary',
        })
    }
    addItem8=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class8:'d-none',
            vlass8:'btn btn-outline-secondary',
        })
    }
    addItem9=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class9:'d-none',
            vlass9:'btn btn-outline-secondary',
        })
    }
    addItem10=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class10:'d-none',
            vlass10:'btn btn-outline-secondary',
        })
    }
    addItem11=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class11:'d-none',
            vlass11:'btn btn-outline-secondary',
        })
    }
    addItem12=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
            class12:'d-none',
            vlass12:'btn btn-outline-secondary',
        })
    }
    
    removeItem1=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass1:'d-none',
            class1:'btn btn-outline-secondary',
        })
    }
    removeItem2=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass2:'d-none',
            class2:'btn btn-outline-secondary',
        })
    }
    removeItem3=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass3:'d-none',
            class3:'btn btn-outline-secondary',
        })
    }
    removeItem4=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass4:'d-none',
            class4:'btn btn-outline-secondary',
        })
    }
    removeItem5=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass5:'d-none',
            class5:'btn btn-outline-secondary',
        })
    }
    removeItem6=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass6:'d-none',
            class6:'btn btn-outline-secondary',
        })
    }
    removeItem7=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass7:'d-none',
            class7:'btn btn-outline-secondary',
        })
    }
    removeItem8=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass8:'d-none',
            class8:'btn btn-outline-secondary',
        })
    }
    removeItem9=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass9:'d-none',
            class9:'btn btn-outline-secondary',
        })
    }
    removeItem10=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass10:'d-none',
            class10:'btn btn-outline-secondary',
        })
    }
    removeItem11=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass11:'d-none',
            class11:'btn btn-outline-secondary',
        })
    }
    removeItem12=()=>{
        this.setState({
            ...this.state,
            count: this.state.count-1,
            vlass12:'d-none',
            class12:'btn btn-outline-secondary',
        })
    }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row mt-4' id='header'>
          <div className='col'>
            <h5 className='fw-bold'>Start Bootsrtap</h5>
          </div>
          <div className='col'>
            <p className='fs-6'>Home</p>
          </div>
          <div className='col'>
            <p>About</p>
          </div>
          <div className='col'>
            <p>Shop</p>
          </div>
          <div className='col d-flex justify-content-center' style={{border:'1px solid',padding:'8px'}}>
          <img src="../src/assets/cart.svg" alt="" />
            <h5>cart  <span style={{fontSize:'18px',backgroundColor:'black',color:'white',padding:'8px',borderRadius:'20px'}}>{this.state.count}</span></h5>
          </div>
        </div>
        <div className='row mt-4' id='header2'>
            <h1>Shop in Style</h1>
            <h3 style={{color:'rgb(137,143,148)'}}>With this shop homepage template</h3>
        </div>
        <div className='row mt-4 d-flex' id='body'>
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Special Item</h5>
                 <p>⭐⭐⭐⭐⭐</p>
                 <p className="card-text">$100</p>
                 <button onClick={this.addItem1} className={this.state.class1}>Add to cart</button>     
                 <button onClick={this.removeItem1} className={this.state.vlass1}>Remove from cart</button>              
            </div>
            </div> </div>
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Sale Item</h5>
                 <p>⭐⭐⭐</p>
                 <p className="card-text">$20-$40</p>
                 <button onClick={this.addItem2} className={this.state.class2}>Add to cart</button>  
                 <button onClick={this.removeItem2} className={this.state.vlass2}>Remove from cart</button>                 
            </div>
            </div></div>  
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Sale Item</h5>
                 <p>⭐⭐⭐⭐</p>
                 <p className="card-text">$20-$40</p>
                 <button onClick={this.addItem3} className={this.state.class3}>Add to cart</button>  
                 <button onClick={this.removeItem3} className={this.state.vlass3}>Remove from cart</button>                 
            </div>
            </div></div>  
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Sale Item</h5>
                 <p>⭐⭐</p>
                 <p className="card-text">$20-$40</p>
                 <button onClick={this.addItem4} className={this.state.class4}>Add to cart</button>  
                 <button onClick={this.removeItem4} className={this.state.vlass4}>Remove from cart</button>                 
            </div>
            </div></div>  
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Sale Item</h5>
                 <p>⭐⭐⭐⭐</p>
                 <p className="card-text">$20-$40</p>
                 <button onClick={this.addItem5} className={this.state.class5}>Add to cart</button>  
                 <button onClick={this.removeItem5} className={this.state.vlass5}>Remove from cart</button>                 
            </div>
            </div></div>  
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Popular Item</h5>
                 <p>⭐⭐⭐</p>
                 <p className="card-text">$80</p>
                 <button onClick={this.addItem6} className={this.state.class6}>Add to cart</button>  
                 <button onClick={this.removeItem6} className={this.state.vlass6}>Remove from cart</button>                 
            </div>
            </div></div>   
                  
                            
        </div>
        <div className='row mt-4 d-flex' id='body'>
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Fancy Product</h5>
                 <p>⭐⭐⭐</p>
                 <p className="card-text">$50</p>
                 <button onClick={this.addItem7} className={this.state.class7}>Add to cart</button>  
                 <button onClick={this.removeItem7} className={this.state.vlass7}>Remove from cart</button>                 
            </div>
            </div> </div>
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Special Item</h5>
                 <p>⭐⭐⭐⭐⭐</p>
                 <p className="card-text">$120</p>
                 <button onClick={this.addItem8} className={this.state.class8}>Add to cart</button>   
                 <button onClick={this.removeItem8} className={this.state.vlass8}>Remove from cart</button>                
            </div>
            </div></div>  
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Sale Item</h5>
                 <p>⭐⭐⭐⭐</p>
                 <p className="card-text">$20-$40</p>
                 <button onClick={this.addItem9} className={this.state.class9}>Add to cart</button>  
                 <button onClick={this.removeItem9} className={this.state.vlass9}>Remove from cart</button>                 
            </div>
            </div></div>   
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Sale Item</h5>
                 <p>⭐⭐⭐⭐⭐</p>
                 <p className="card-text">$20-$40</p>
                 <button onClick={this.addItem10} className={this.state.class10}>Add to cart</button>  
                 <button onClick={this.removeItem10} className={this.state.vlass10}>Remove from cart</button>                 
            </div>
            </div></div>  
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Sale Item</h5>
                 <p>⭐⭐⭐</p>
                 <p className="card-text">$20-$40</p>
                 <button onClick={this.addItem11} className={this.state.class11}>Add to cart</button>  
                 <button onClick={this.removeItem11} className={this.state.vlass11}>Remove from cart</button>                 
            </div>
            </div></div>  
            <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="../src/assets/card.png" className="card-img-top" alt="..."></img>
                 <div className="card-body">
                 <h5 className="card-title align-center">Sale Item</h5>
                 <p>⭐⭐⭐⭐</p>
                 <p className="card-text">$20-$40</p>
                 <button onClick={this.addItem12} className={this.state.class12}>Add to cart</button>  
                 <button onClick={this.removeItem12} className={this.state.vlass12}>Remove from cart</button>                 
            </div>
            </div></div>  
                  
                            
        </div>
    </div>
        

    )  
  }
}

export default Hello