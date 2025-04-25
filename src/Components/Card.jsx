import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoTrashBinSharp } from "react-icons/io5";


const Card = ({oneCoffeeData,handleCartDeletion}) => {
  const { name, image, category, origin, type, id, rating, popularity } =
  oneCoffeeData || {}

  const location = useLocation()
  const {pathname} = location
  

  return (
    <div className='flex relative'>
      <Link
        to={`/coffee/${id}`}
        className='transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden'
      >
        <figure className='w-full h-48 overflow-hidden'>
          <img className='' src={image} alt='' />
        </figure>
        <div className='p-4'>
          <h1 className='text-xl'>Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>

      {pathname ==='/favs' && <div className='absolute -top-5 -right-5 bg-warning p-2 rounded-full hover:scale-105 cursor-pointer'>
          <p onClick={()=>handleCartDeletion(id)}><IoTrashBinSharp size={28}/>
          </p>
        </div>}
    </div>
  )
};

export default Card;