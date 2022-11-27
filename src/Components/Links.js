import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
import ImageIcon from '@mui/icons-material/Image';
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import './NewsImage.css'

const Links = () => {

  return (
    <Stack direction="row" spacing={2} justifyContent="center" mt={2} mb={2}>
      
      <div className='navbar'>
      <Link to="/search" style={{textDecoration:"none"}}  ><SearchIcon   sx={{fontSize:13,color:'green'}}/><h3  className="navbar-all">ALL</h3></Link>
      </div>
      <div className=''>
       <Link to="/news" style={{textDecoration:"none"}}><ArticleIcon sx={{fontSize:13,color:'gray'}}/><h3 className="navbar-all">NEWS</h3></Link>
      </div>
      <div >
      <Link to="/images" style={{textDecoration:"none"}}><ImageIcon sx={{fontSize:13,color:'darkorange'}}/><h3 className="navbar-all">IMAGES</h3></Link>
      </div>
       

    </Stack>
  )
}

export default Links