import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './Check';
const Search = () => {
  const [text,setText] = useState()
  const {setSearchValue} = useContext(Context)
  const navigate = useNavigate();
  
 function handleSubmit(e){
  e.preventDefault();
  if(text){
    navigate("/search")
    setSearchValue(text);
  }
 }
  
  
  return (
    
    <div style={{display:"flex", marginTop:"10px"}}>
      <form onSubmit={(e)=>handleSubmit(e)} style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          sx={{width:"60%"}}
          
          onChange={(e)=>{setText(e.target.value)}}
        />
      </form>
    </div>
    
  )
}

export default Search