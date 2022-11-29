
import axios from "axios";



export const getResult = async (type,searchTerm)=>{
   
   console.log(type);
   console.log(searchTerm);
   
        let searchthing ;
        if(type === '/search'){
            searchthing="WebSearchAPI"
        }else if(type === '/news'){
            searchthing = "NewsSearchAPI";
        }else{
            searchthing = "ImageSearchAPI"
        }

        const options = {
          method: 'GET',
          url: `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/${searchthing}`,
          params: {q: `${searchTerm}`, pageNumber: '1', pageSize: "50", autoCorrect: 'true'},
          headers: {
            'X-RapidAPI-Key': 'ab598184f7mshfe09326f577f5dcp12a83ejsnc0c49d14f46d',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
          }
        };
        
        const data = await axios.request(options).then( (response)=> response.data).catch(function (error) {
            console.error(error);
            
        });
        const { value} = data
       return value;
}

