export const Reducer = (state,action)=>{
    switch (action.type){
        case "spinningLoader":
          return {
                ...state,
                IsLoading: true
          }
        case "DataDisplay":
            return{
                ...state,
                IsLoading : false,
                Data : action.payLoad
            }
        default :
           return state
    }
} 