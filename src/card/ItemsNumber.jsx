import React, { useState } from 'react'
import './card.css'


const ItemsNumber = () => {
    const [productNum,setProductNum]=useState(1)

    const addProduct = ()=>{
        setProductNum(productNum+1)
    }
    const removeProduct=()=>{
        if(productNum!==0){
            setProductNum(productNum-1)
        }
    }
  return (
    <div className='productCount'>
        <div className="products_number">
            <button className='minus' onClick={()=>{removeProduct()}}>-</button>
            <p className="num">{productNum}</p>
            <button className="plus" onClick={()=>{addProduct()}}>+</button>
        </div>
        <div className="primary-btn">ADD TO CART</div>
    </div>
  )
}

export default ItemsNumber