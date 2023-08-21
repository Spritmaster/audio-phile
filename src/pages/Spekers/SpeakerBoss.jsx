import React from 'react'
import TypsShow from '../home/TypsShow'
import Human from '../Human'
import SpeakerMain from './SpeakerMain'
import SpeakerTitle from './SpeakerTitle'

const SpeakerBoss = () => {
  return (
    <div className='main'>
        <SpeakerTitle/>
        <SpeakerMain/>
        <TypsShow/>
        <Human/>
    </div>
  )
}

export default SpeakerBoss