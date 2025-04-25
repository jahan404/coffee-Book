import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from '../assets/nutrition.png'
import { useEffect, useState } from "react";
import { addDataTOLS, getAllDataFromLS } from "../Utils/utils";
const CardDetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [coffee,setCoffee] = useState([])
    const [isFav,setIsFav] = useState(false)

    useEffect(()=>{
        const foundCoffee = data.find((c)=>c.id==id)
        setCoffee(foundCoffee)

        // button disabling
        const getData = getAllDataFromLS()
        const isExist = getData.find(c=>c.id==foundCoffee.id)
        if(isExist)
          setIsFav(true)
    },[id,data,setCoffee])

    const {
        name,
        image,
        ingredients,
        nutrition_info,
        description,
        making_process,
        rating,
        popularity,
      } = coffee
    
    const handleFav=(favCoffee)=>{
       addDataTOLS(favCoffee)
       setIsFav(true)
    }

    return (
        <div className='my-12 w-11/12 mx-auto'>
      {/* Description */}
      <h1 className='text-2xl md:text-4xl font-thin mb-6'>{description}</h1>
      {/* Image */}
      <div className='w-full h-full md:h-[500px] overflow-hidden rounded-xl shadow-xl'>
        <img className='w-full h-full object-cover' src={image} alt='' />
      </div>
      {/* Title and Favorite Button */}
      <div className='flex justify-between items-center my-6'>
        <div>
          <h1 className='text-2xl md:text-3xl font-thin'>{name}</h1>
          <p className='text-base'>Popularity: {popularity}</p>
          <p className='text-base'>Rating: {rating}</p>
        </div>
        <div>
          <button disabled={isFav} onClick={()=>handleFav(coffee)}
            className='btn btn-warning'
          >
            Add Favorite
          </button>
        </div>
      </div>
      {/* Making Process */}
      <div className='my-6'>
        <h2 className='text-2xl font-thin'>Making Process:</h2>
        <p className='text-base '>{making_process}</p>
      </div>

      <div className='my-6 flex justify-between items-center'>
        <div className='flex-1'>
          <div className='flex flex-col justify-center gap-6'>
            <h1 className='text-2xl font-thin'>Ingredients:</h1>
            <ul className='text-xl ml-12'>
              {ingredients &&
                ingredients.map((item, i) => (
                  <li className='list-disc' key={i}>
                    {item}
                  </li>
                ))}
            </ul>
            <h1 className='text-2xl font-thin'>Nutrition:</h1>
            <ul className='text-xl ml-12'>
              {nutrition_info &&
                Object.keys(nutrition_info).map((n, i) => (
                  <li className='list-disc' key={i}>
                    {n}: {nutrition_info[n]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className='flex-1'>
          <img src={nutritionImg} alt='' />
        </div>
      </div>
    </div>
    );
};

export default CardDetails;