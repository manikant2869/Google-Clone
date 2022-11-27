import React,{useEffect,useState,useContext} from 'react'
import { useLocation } from 'react-router-dom';
import { getResult } from '../Context/ContextProvider';
import { Stack } from '@mui/system';
import { Box, CardMedia,Card,CardContent } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Context } from './Check';

const Results = () => {
    const Location = useLocation()
    const { searchValue} = useContext(Context);
    const [result,setResult] = useState([])
    let type ;
    
    if(Location.pathname === '/search'){
        type = "web"
    }else if(Location.pathname === '/news'){
        type = "news"
    }else if (Location.pathname === '/images'){
        type = "images"
    }else{
      type = "web"
    }
    useEffect( ()=>{
         const fetchApi = async ()=>{
            const data = await getResult(type,searchValue)
            
              setResult(data);
        }
        fetchApi();
    },[searchValue,type])
    
    console.log(result)
   
    
    switch(Location.pathname){
        case "/":
            return(
                  <Stack direction="column"  spacing={3} sx={{marginLeft:"15px",marginRight:"15px",width:"100%"}}>
                  {result?.map(({title,url,id,description})=>{
                    return(
                    <Box key={id} >
                        <a href={url} style={{textDecoration:"none"}}>
                        <Typography variant="h6" >{title}</Typography>
                        </a>
                        <Typography variant="subtitle2" color="green" width="100%">{url}</Typography>
                        <Typography variant="body2" width="100%" >{description}...</Typography>
                        
                     </Box>
                    )
                  })}
                </Stack>      
                
            )

        case '/search':
            return (
                <>
                
                <Stack direction="column"  spacing={3} gap={2} sx={{marginLeft:"15px",marginRight:"15px"}}>
                  {result?.map(({title,url,id,description})=>{
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
        case '/images':
            return (
                <>
                
                <Stack direction={ 'row'} flexWrap="wrap" justifyContent="start" gap={2}  sx={{marginTop:"20px"}}>
                   {result?.map(({url,webpageUrl,title})=>{
                    return(
                    <a href={webpageUrl} style={{textDecoration:"none"}}>
                      <Card sx={{width:{xs:'100%',sm:'190px',md:'150px'},boxShadow:'none',borderRadius:'none' }}>
                        <CardMedia 
                           component="img"
                           height="194"
                           image={url}
                           alt="Paella dish"
                        />
                        <CardContent sx={{background:'#1e1e1e',height:'100px'}}>
                        <Typography variant='body2' fontWeight="bold" color="gray">
                           {title}    
                        </Typography>                 
                        </CardContent>
                      </Card>
                    </a>
                    )
                   })}
                </Stack>
                </>
            )
        case '/news':
            return(
                <>
                
                <Stack direction="column"  spacing={1} sx={{marginLeft:"5%"}}>
                  {result?.map(({title,url,id,description,image})=>{
                    return(
                    <Box  key={id} border="1px solid lightgray" borderRight="none" borderRadius="5px 1px 1px 5px" display="flex" >
                        <Box marginLeft="5px" paddingTop="3px" width="100%" borderRight="1px solid lightgray">
                        <a href={url} style={{textDecoration:"none"}}>
                        <Typography variant="inherit" sx={{fontFamily:"sans-serif" ,fontWeight:"600"}} >{title}</Typography>
                        </a>
                        <Typography variant="subtitle2" color="green">{url?.substring(0,100)}</Typography>
                        <Typography variant="inherit">{description?.substring(0,200)}...</Typography>
                        </Box>
                        <Box width="20%">
                            <img src={image?.url}  alt={image?.title} style={{width:"100px",height:"100px",margin:"10px"}}/>
                        </Box>
                     </Box>
                    )
                  })}
                </Stack>      
                </>
            )
        default :
            return "Invalid"
    }
}

export default Results