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
    }else{
        type = "images"
    }
    useEffect( ()=>{
         const fetchApi = async ()=>{
            const data = await getResult(type,searchValue)
            
              setResult(data);
        }
        fetchApi();
    },[searchValue,Location.pathname])
    
    console.log(result)
   
    
    switch(Location.pathname){
        case "/":
            return(
                <Stack direction="column" spacing={3} sx={{marginLeft:"10%",marginRight:"10%"}}>
                  {result?.map(({title,url,id,description})=>{
                    return(
                    <Box key={id}>
                        <a href={url} style={{textDecoration:"none"}}>
                        <Typography variant="h6" >{title}</Typography>
                        </a>
                        <Typography variant="subtitle2" color="green">{url}</Typography>
                        <Typography variant="body2">{description}...</Typography>
                        
                     </Box>
                    )
                  })}
                </Stack>      
                
            )

        case '/search':
            return (
                <>
                
                <Stack direction="column" spacing={3} sx={{marginLeft:"10%",marginRight:"10%"}}>
                  {result?.map(({title,url,id,description})=>{
                    return(
                    <Box key={id}>
                        <a href={url} style={{textDecoration:"none"}}>
                        <Typography variant="h6" >{title}</Typography>
                        </a>
                        <Typography variant="subtitle2" color="green">{url}</Typography>
                        <Typography variant="body2">{description}...</Typography>
                        
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
                   {result.map(({url,webpageUrl,title})=>{
                    return(
                    <a href={webpageUrl} style={{textDecoration:"none"}}>
                      <Card sx={{width:{xs:'100%',sm:'190px',md:'100px'},boxShadow:'none',borderRadius:'none' }}>
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
                
                <Stack direction="column" spacing={1} sx={{marginLeft:"5%"}}>
                  {result?.map(({title,url,id,description,image})=>{
                    return(
                    <Box key={id} border="1px solid lightgray" borderRadius="5px" display="flex" >
                        <div style={{width:"75%"}}>
                        <a href={url} style={{textDecoration:"none"}}>
                        <Typography variant="h6" >{title}</Typography>
                        </a>
                        <Typography variant="subtitle2" color="green">{url}</Typography>
                        <Typography variant="body2">{description}...</Typography>
                        </div>
                        <div>
                            <img src={image.url} style={{height:"100%",width:"150px"}}/>
                        </div>
                     </Box>
                    )
                  })}
                </Stack>      
                </>
            )
    }
}

export default Results