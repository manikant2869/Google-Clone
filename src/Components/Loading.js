import React from 'react'
import {Audio} from 'react-loader-spinner'

const Loading = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20%"}}>
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
         ariaLabel="loading"
         
         />
    </div>
  )
}

export default Loading