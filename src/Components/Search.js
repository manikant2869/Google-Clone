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
      <span style={{color:'blue'}} ><h1 style={{display:"inline",fontSize:'17px'}}>S</h1></span>
      <span style={{color:'red'}}><h2 style={{display:"inline",fontSize:'17px'}}>e</h2></span>
      <span style={{color:'orange'}}><h2 style={{display:"inline",fontSize:'17px'}}>a</h2></span>
      <span style={{color:'green'}}><h2 style={{display:"inline",fontSize:'17px'}}>r</h2></span>
      <span style={{color:'blue'}}><h2 style={{display:"inline",fontSize:'17px'}}>c</h2></span>
      <span style={{marginRight:"5px",color:'orange'}}><h2 style={{display:"inline",fontSize:'17px'}}>h</h2></span>
      <span style={{color:'blue'}}><h2 style={{display:"inline",fontSize:'17px'}}>I</h2></span>
      <span style={{marginRight:"20px",color:'green'}}><h2 style={{display:"inline",fontSize:'17px'}}>t!</h2></span>
      <form onSubmit={(e)=>handleSubmit(e)} style={{width:"75%",display:"flex",justifyContent:"center"}}>
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