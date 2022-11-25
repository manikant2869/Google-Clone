import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Results from './Results'
const Router = () => {
  return (
    <div>
       <Routes >
            {['/','/search','/images','/news'].map((item,index)=>{
                return(
                    <Route path={item} element={<Results />} key={index} />
                )
            })}
            
        </Routes>
    </div>
  )
}

export default Router