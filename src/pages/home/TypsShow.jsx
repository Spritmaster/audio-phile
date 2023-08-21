import React from 'react'
import './css/TypsShow.css'

function TypsShow() {
  return (
    <div>
    <div className="container">
        <div className="typs">
            <div className="box">
                <img className='typs__box-img' src="./images/png/headphones.png" alt="headphones" />
                <span></span>
                <p>HEADPHONES</p>
                <div className="go__shop">
                    <p>Shop</p>
                    <img src='./images/svg/right.svg' alt='right'></img>
                </div>

            </div>

            <div className="box">
                <img className='typs__box-img' src="./images/png/speakers.png" alt="speakers" />
                <span></span>
                <p>Speakers</p>
                <div className="go__shop">
                    <p>Shop</p>
                    <img src='./images/svg/right.svg' alt='right'></img>
                </div>

            </div>

            <div className="box">
                <img className='typs__box-img' src="./images/png/earphones.png" alt="earphones" />
                <span></span>
                <p>earphones</p>
                <div className="go__shop">
                    <p>Shop</p>
                    <img src='./images/svg/right.svg' alt='right'></img>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default TypsShow