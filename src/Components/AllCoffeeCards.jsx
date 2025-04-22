import React, {  useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const AllCoffeeCards = () => {


    const {category} = useParams()

    const data = useLoaderData()
    
    const [selectedCoffee,setSelectedCoffee] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        if(category){
    
            const filteredCoffee = [...data].filter((coffee)=> coffee.category == category)
            setSelectedCoffee(filteredCoffee)
        }
        else{
            setSelectedCoffee(data.slice(0,6))
        }
        },[data,category])


    return (
      <div>
        <div className='grid grid-cols-3 gap-10 my-14'>
        {
          selectedCoffee.map((oneCoffeeData)=><Card key={oneCoffeeData.id} oneCoffeeData={oneCoffeeData}></Card>)
        } 
       </div>

     <div>
        <button onClick={()=>navigate('/menu')}  className='btn btn-lg btn-warning text-black'>View All</button>
     </div>
      </div>
    );
};

export default AllCoffeeCards;