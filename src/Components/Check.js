import React from 'react'
import { createContext,useState } from 'react'

export const Context = createContext();
export const Check = ({children}) => {
  const [searchValue,setSearchValue] = useState('virat Kohli')
  
  return (
    <Context.Provider value={{searchValue,setSearchValue,result,setResult}}>
      {children}
    </Context.Provider>
  )
}
