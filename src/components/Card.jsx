import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const Card = ({user}) => {

    const {
        picture:{ large },
        name : {title,first,last},
        dob:{age},
        gender:{gender},
        location:{city,country},
        email
    } = user


   
    
  return (
        <div className=' p-4 border border-dark d-flex justify-content-center bg-info mt-5 w-50 '>
            <div className='card-container text-center   mt-5 rounded  '>
        
            <img className='rounded-5 mt-3' src= {large}alt="" />
            <h1>{`${title}.${first} ${last}`}</h1>  
            <h2>{age}</h2>
            <h2>{gender}</h2>
            <h2>{`${city}/${country}`}</h2>
            <h2>{email}</h2> 
       
     </div>
</div>
        

      
    
    
  )
}

export default Card