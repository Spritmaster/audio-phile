import React from 'react'
import './css/ProductsMain.css'

const ProductsMain = () => {
  return (
    <div className='container'>
       <div className="ProductsMain-wrapper">
        {/* First  Box*/}
       <div className="zxSpeaker-box">
            <img src="./images/png/zxSpeaker.png"  />
            <span className="circ1"></span>
            <span className="circ2"></span>
            <span className="circ3"></span>

            <div className="zx-box__info">
                <h1>ZX9 SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <div className="primary-btn second-btn">See Product</div>
            </div>
        </div>

         {/* Second  Box*/}
         <div className="zx7Speaker-box">
            <h4>ZX7 SPEAKER</h4>
            <div className="primary-btn second-btn">See Product</div>
         </div>

         {/* three box */}
         <div className="yxEarPhones-box">
            <img src="./images/png/yxEarPhones.png" alt="yx EarPhones" width={540}  />

            <div className="yx__info">
            <h4>YX1 EARPHONES</h4>
            <div className="primary-btn second-btn">See Product</div>
            </div>
         </div>

       </div>
    </div>
  )
}

export default ProductsMain