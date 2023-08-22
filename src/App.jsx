import React from 'react'
import './App.css'
import HomeBoss from './pages/home/HomeBoss'
import HeadPhonesBoss from './pages/headePhones/HeadPhonesBoss'
import { Route , RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SpeakerBoss from './pages/Spekers/SpeakerBoss'
import EarPhonesBoss from './pages/EarPhones/EarPhonesBoss'
import RootLayout from './layout/RootLayout'
import HomeLayout from './layout/HomeLayout'
import HeadPhonesLayout from './layout/HeadPhonesLayout'
import HeadPhones1 from './details/HeadPhones1'


const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
       <Route  element={<RootLayout/>}>
        <Route path='/' element={<HomeLayout/>}>
            <Route index element={ <HomeBoss/>}/>
            <Route path='headphones' element={ <HeadPhones1/>}/>
            <Route path='speakers' element={ <SpeakerBoss/>}/>
            <Route path='earphones' element={ <EarPhonesBoss/>}/>
        </Route>
        {/* <Route path='headphones' element={<HeadPhonesLayout/>}>
            <Route index element={ <HeadPhonesBoss/>}/>
            <Route path='headphones1' element={ <HeadPhones1/>}/>
        </Route> */}
        
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