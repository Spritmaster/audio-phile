import React from 'react'
import './speaker.css'

const SpeakerMain = () => {
  return (
    <div className='container' style={{marginTop:"16rem", display:'flex',flexDirection:"column",gap:"16rem",}}>
        <div className="all-text__box">
            <div className="all-text__img-wrapper" style={{padding:"9.6rem 12.45rem 11.35rem 12.45rem"}}>
                <img src="./images/png/zxSpeaker-page.png" alt="Zx Speaker" />
                <span></span>
            </div>

            <div className="the-theme-info">
                <div className="newProduct">NEW PRODUCT</div>
                <h2>ZX9 SPEAKER</h2>
                <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>

                <div className="primary-btn">See Product</div>
            </div>


        </div>

        <div className="all-text__box">
          

            <div className="the-theme-info">
      
                <h2>ZX7 SPEAKER</h2>
                <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>

                <div className="primary-btn">See Product</div>
            </div>

            <div className="all-text__img-wrapper" style={{padding:"9.6rem 12.45rem 11.35rem 12.45rem"}}>
                <img src="./images/png/zx7Speaker-BOX.png" alt="Zx Speaker" />
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default SpeakerMain