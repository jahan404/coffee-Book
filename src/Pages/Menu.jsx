import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { useState } from "react";

const Menu = () => {
    const data = useLoaderData()
    const [coffees,setCoffees] = useState(data)

    const handleSort = sortBy =>{
      if(sortBy=='popularity'){
      const sorted = [...data].sort((a,b)=>b.popularity-a.popularity)
      setCoffees(sorted)
      }
      else{
        const sortedCoffee = [...data].sort((a,b)=>b.rating-a.rating)
        setCoffees(sortedCoffee)
      }
    }

    return (
        <div className="w-11/12 mx-auto my-10">
          <div className="flex justify-between items-center">
            <h1 className='text-3xl font-thin'>Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>

            <div className="flex gap-4">
              <button className="btn btn-lg btn-warning text-black" onClick={()=>handleSort('popularity')}>Sort By Popularity</button>
              <button className="btn btn-lg btn-warning text-black" onClick={()=>handleSort('rating')}>Sort By Rating</button>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-10 my-14'>
        {
          coffees.map((oneCoffeeData)=><Card key={oneCoffeeData.id} oneCoffeeData={oneCoffeeData}></Card>)
        } 
       </div>
        </div>
    );
};

export default Menu;