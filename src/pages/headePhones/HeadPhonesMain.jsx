import React from 'react'
import './headPhonesCss/HeadPhonesMain.css'

const HeadPhonesMain = () => {
  return (
    <div className='container'>
      <div className="headPhonesMain">
      <div className="all-text__box">
            <div className="all-text__img-wrapper">
            <img src="./images/png/xx99-ii.png" alt="xx99-ii" />
            <span></span>
            </div>

            <div className="xx99-mark-text">
            <span className='newProduct' style={{color:"var(--primary-clr)" ,opacity:"1"}}>NEW PRODUCT</span>
            <h2>XX99 Mark II Headphones</h2>
            <p >The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>

            <div className="primary-btn">See Product</div>
            </div>

        </div>
        <div className="all-text__box"> 
        <div className="xx99-mark-text">
            <h2>XX99 Mark I Headphones</h2>
            <p  >As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>

            <div className="primary-btn" >See Product</div>
            </div>

            <div className="all-text__img-wrapper">
            <img src="./images/png/xx99-i.png" alt="xx99-i" />
            <span></span>
            </div>

           
        </div>

        <div className="all-text__box"> 
            <div className="all-text__img-wrapper">
            <img src="./images/png/xx59.png" alt="xx59" />
            <span className='xx59-shadow'></span>
            </div>

            <div className="xx99-mark-text">
            <h2>XX59 Headphones</h2>
            <p >Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>

            <div className="primary-btn">See Product</div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default HeadPhonesMain