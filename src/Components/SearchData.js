import React from 'react'
import { Stack,Box } from '@mui/system'
import Typography from '@mui/material/Typography';
const SearchData = ({data}) => {
    return (
        <>
        
        <Stack direction="column"  spacing={3} gap={2} sx={{marginLeft:"15px",marginRight:"15px"}}>
          {data?.map(({title,url,id,description})=>{
            return(
            <Box key={id} >
                <a href={url} style={{textDecoration:"none"}}>
                <Typography variant="h6" sx={{fontFamily:"sans-serif"}}>{title}</Typography>
                </a>
                <Typography variant="subtitle2" color="green">{url}</Typography>
                <Typography variant="body2">{description?.substring(0,200)}...</Typography>
                
             </Box>
            )
          })}
        </Stack>      
        </>
        
    )
}

export default SearchData