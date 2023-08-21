import React from 'react'
import EarPhonesTitle from './EarPhonesTitle'
import EarPhonesMain from './EarPhonesMain'
import TypsShow from '../home/TypsShow'
import Human from '../Human'

const EarPhonesBoss = () => {
  return (
    <div className='main'>
        <EarPhonesTitle/>
        <EarPhonesMain/>
        <TypsShow/>
        <Human/>
    </div>
  )
}

export default EarPhonesBoss