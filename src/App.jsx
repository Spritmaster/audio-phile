import React from 'react'
import './App.css'
import HomeBoss from './pages/home/HomeBoss'
import HeadPhonesBoss from './pages/headePhones/HeadPhonesBoss'
import { Route , RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SpeakerBoss from './pages/Spekers/SpeakerBoss'
import EarPhonesBoss from './pages/EarPhones/EarPhonesBoss'
import RootLayout from './layout/RootLayout'
import HomeLayout from './layout/HomeLayout'


const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<RootLayout/>}>
        <Route path='/' element={<HomeLayout/>}>
            <Route index element={ <HomeBoss/>}/>
            <Route path='headphones' element={ <HeadPhonesBoss/>}/>
            <Route path='speakers' element={ <SpeakerBoss/>}/>
            <Route path='earphones' element={ <EarPhonesBoss/>}/>
        </Route>
        
      </Route>
    )
  )



  return (
    <div>
<RouterProvider router={routes} />
    </div>

  )
}

export default App