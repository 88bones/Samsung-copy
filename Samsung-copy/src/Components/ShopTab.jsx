import React,{useState} from 'react'
import S24 from '../images/s24ultra.jpg';
import Buds from '../images/buds3pro.png';
import Fold6 from '../images/galaxy-z-Fold6.jpg';
import watch from '../images/watchultra.jpg';
import flip from '../images/zflip6.jpg';




const ShopTab = () => {
    const ShopItems=[
        'Mobile',
        'TV & Audio',
        'Home Appliances',
        'Computing'
    ]

    const MobileProducts=[
        {url : Fold6, title:"Galaxy Z Fold6", buttonText: "Buy now"},
        {url : S24, title:"Galaxy S24 Ultra", buttonText: "Buy now"},
        {url : flip, title:"Galaxy Z Flip6", buttonText: "Buy now"},
        {url : watch, title:"Galaxy Watch Ultra", buttonText: "Buy now"},
        {url : Buds, title:"Galaxy Buds3 Pro", buttonText: "Buy now"}
    ]


  
    return (
    <section>
     <div className='shop-tab'>
      <h1>Shop all the latest offers and innovations</h1>
      <div className="shop-items">
        <ul type="none">
            {ShopItems.map((ShopItem,index)=>(
                <li key={index}>
                    <a href="">{ShopItem}</a>
                </li>
            ))}
        </ul>
      </div>

    <div className="grid-container">
        {MobileProducts.map((products,index)=>(
            <div className={`grid-items item-${index + 1}`} key={index}>
                <img src={products.url} alt="" />
                <h3>{products.title}</h3>
                <button>{products.buttonText}</button>
            </div>
        ))}
    </div>
   </div>


    </section>
  )
}

export default ShopTab
