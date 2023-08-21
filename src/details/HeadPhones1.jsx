import React from 'react'
import "./Product-details.css"
import { NavLink } from 'react-router-dom'
import {AiFillCaretLeft} from "react-icons/ai"
import ItemsNumber from '../card/ItemsNumber'

const HeadPhones1 = () => {
  return (
    <div className='container'>

    <div className='go-back__box'>
    <NavLink to={"/"} className="go-back" >
    <AiFillCaretLeft/>
      Go Back</NavLink >
    </div>
   

     <div className="details-text__box">
            <div className="details-text__img-wrapper">
            <img src="./images/png/xx99-ii.png" alt="xx99-ii" />
            <span></span>
            </div>

            <div className="details-text">
            <span className='newProduct' style={{color:"var(--primary-clr)" ,opacity:"1"}}>NEW PRODUCT</span>
            <h2>XX99 Mark II Headphones</h2>
            <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>

            <div className="price">$ 2,999</div>
            <ItemsNumber/>


         
            
            </div>

     </div>

     <div className="details-info-wrap">
              <div className="features">
                <h3 style={{marginBottom:"3.2rem"}}>FEATURES</h3>
                <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
<br />
<br />
The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
              </div>

              <div className="in-the-box">
                <h3 style={{marginBottom:"3.2rem"}}>IN THE BOX</h3>
              <div className="razmerlar-box">
              <div className="siza-box">
                  <span className="siza-box__span">1x</span>
                  <p>Headphone Unit</p>
                </div>
                <div className="siza-box">
                  <span className="siza-box__span">2x</span>
                  <p>Replacement Earcups</p>
                </div>
                <div className="siza-box">
                  <span className="siza-box__span">1x</span>
                  <p>User Manual</p>
                </div>
                <div className="siza-box">
                  <span className="siza-box__span">1x</span>
                  <p>3.5mm 5m Audio Cable</p>
                </div>
                <div className="siza-box">
                  <span className="siza-box__span">1x</span>
                  <p>Travel Bag</p>
                </div>
              </div>
              </div>
      </div>


      <div className="showProduct">
        <div className="minImg-wrepper">
          <img  src="./images/png/human-min.png" alt="human picture" width={445} height={280}/>
          <img  src="./images/png/mark2-1.png" alt="mark 2 phone" width={445} height={280} />
          
        </div>

        <img className='bigPicture' src="./images/png/mark2.png" alt="mark2" />
      </div>
    </div>
  )
}

export default HeadPhones1