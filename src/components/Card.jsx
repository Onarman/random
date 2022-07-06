import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiMail,
    FiMap ,
 } from "react-icons/fi";
 import {FaTransgender,FaBirthdayCake} from "react-icons/fa"


const Card = ({user}) => {

    const {
        picture:{ large },
        name : {title,first,last},
        dob:{age},
        gender,
        location:{city,country},
        email
    } = user


   
    
  return (
        <div className=' main-container d-flex align-item-center justify-content-center  mt-4  '>
            <div className='card-container  rounded   min-w-50 p-5 shadow-lg  text-dark  '>
        
            <img className='rounded-2 mt-3 d-flex mx-auto' src= {large}alt="" />
            <h1 className='text-center mb-5 mt-2 ' >{`${title}.${first} ${last}`}</h1>  
            <h3><FaBirthdayCake size={30} className='text-dark me-3'/>{age}</h3>
            <h3><FaTransgender size={30} className='text-left text-dark me-3 '/>{gender}</h3>
            <h3>< FiMap size={30} className='text-dark me-3'/>{`${city}/${country}`}</h3>
            <h3><FiMail size={30}  className='text-dark me-3' />{email}</h3> 
       
     </div>
</div>
        

      
    
    
  )
}

export default Card