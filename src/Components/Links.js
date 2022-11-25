import React from 'react'
import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/system'

const link=[
    {url:'/search' ,text: "ALL" },
    {url:'/news',text: "NEWS"},
    {url:'/images',text: "Images"}
]
const Links = () => {

  return (
    <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        {link.map(({url,text})=>{
          return(
            <div>
            <NavLink to={url}  style={{textDecoration:"none"}}
        ><h3>{text}</h3></NavLink>
        </div>
          )
        })}

    </Stack>
  )
}

export default Links