import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const Menu = () => {
    const data = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-10 my-14 w-11/12 mx-auto'>
        {
          data.map((oneCoffeeData)=><Card key={oneCoffeeData.id} oneCoffeeData={oneCoffeeData}></Card>)
        } 
       </div>
    );
};

export default Menu;