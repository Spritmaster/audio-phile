import React from 'react'
import './Human.css'

const Human = () => {
  return (
    <div className='container'>
        <div className="human-wrapper">
            <div className="human-text-w">
                <h2>Bringing you the <span style={{color:"var(--primary-clr)"}}>best</span> audio gear</h2>

                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>

            <img style={{borderRadius:"8px"}} src="./images/png/human.png" alt="human"  width={540}/>
        </div>
    </div>
  )
}

export default Human