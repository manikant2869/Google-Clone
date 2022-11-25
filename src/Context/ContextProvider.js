import React,{ useContext} from "react";
import axios from "axios";



export const getResult = async (type,searchTerm)=>{
   
   console.log(type);
   console.log(searchTerm);
  
        let searchthing ;
        if(type === "news"){
            searchthing="NewsSearchAPI"
        }else if(type === "web"){
            searchthing = "WebSearchAPI";
        }else{
            searchthing = "ImageSearchAPI"
        }

        const options = {
          method: 'GET',
          url: `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/${searchthing}`,
          params: {q: `${searchTerm}`, pageNumber: '1', pageSize: "50", autoCorrect: 'true'},
          headers: {
                'X-RapidAPI-Key': '2736f84ef8mshc853ea3253cd6adp17c39ajsn5e46431ba122',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
          }
        };
        
        const data = await axios.request(options).then( (response)=> response.data).catch(function (error) {
            console.error(error);
            
        });
        const { value} = data
       return value;
}

