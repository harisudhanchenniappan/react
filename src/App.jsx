import React from 'react'
const Feature=(props)=>{
  //console.log(props)
  return(
    <div>
      <p className={props.classl}>{props.symbol}{props.features}</p>
    </div>
    
  )
  }
const Card=(props)=>{
  
  return(
    <div className="card mx-4" style={{width: '18rem'}}>
    <div className="card-header">
      <p className='text-center'>{props.card.type}</p>
      <h2 className="card-title text-center">{props.card.cost}</h2>
      </div>
      <div className='card-body'>    
      {
        
        props.features.map((feature,index)=>{
          let symbol= props.card.features.includes(feature)?'✔':'✘';
          let classl=props.card.features.includes(feature)?'fw-bold card-text':'card-text text-muted'
          return <Feature features={ feature} key={index} symbol={ symbol} classl={classl } />
        })
      }
      
      <div class="d-grid col-8 mx-auto mt-3">
  
  <button class="btn btn-primary" type="button">Button</button>
</div>
      
      </div>
  </div>
  )
}
const App = () => {
  const data={
    features: [
       'Single User',
       '50gb storage',
       'Unlimited Public Projects',
       'Community Access',
       'Unlimited Private Projects',
       'Dedicated Phone Support',
       'Free Subdomain',
       'Monthly Status Reports'
    ],
    cards: [
      {
        type: 'Free',
        cost: '$0/month',
        features: [
          'Single User',
          '50gb storage',
          'Unlimited Public Projects',
          'Community Access'
          ]
      },
      {
        type: 'Plus',
        cost: '$9/month',
        features: [
          'Single User',
          '50gb storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain'          
        ]
      },
      {
        type: 'Pro',
        cost: '$49/month',
        features: [
          'Single User',
          '50gb storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
          'Monthly Status Reports'
        ]
      },
    ]
  }
  return (
    <div className='d-flex justify-content-center align-center mx-4'>
    {
      data.cards.map((card,index)=>{
        return <Card card={ card } key={ index } features={data.features}/>
        
        })
    }
    </div>
  )
}

export default App