import React from 'react'

const ShopDD = () => {
     const Items=[
        'Smartphones',
        'Tv & Home Theater',
        'Kitchen Appliances',
        'Watches & Audio',
        'Tablets & Computing',
        'Combo Deals'
     ]
  return (
    <div className='dropdown-shop'>
        <ul type="none">
            {Items.map((Item,index)=>(
                <li key={index}>
                    <a href="">{Item}</a>    
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default ShopDD
