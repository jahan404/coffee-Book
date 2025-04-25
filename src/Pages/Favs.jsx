import { useEffect, useState } from "react";
import ReusableHeading from "../Components/ReusableHeading";
import Card from "../Components/Card";
import { getAllDataFromLS, removeSelectedCoffeeCard } from "../Utils/utils";

const Favs = () => {
    const [coffees,setCoffees] = useState([])

    useEffect(()=>{
    const getFromLS = getAllDataFromLS()
    setCoffees(getFromLS)
    },[])

    const handleCartDeletion = id =>{
        removeSelectedCoffeeCard(id)

        // remove cart from UI
        const getFromLS = getAllDataFromLS()
        setCoffees(getFromLS)
    }
    return (
        <div className="w-11/12 mx-auto">

        <ReusableHeading title={'Welcome to Dashboard'} subtitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'}></ReusableHeading>
            
        <div className="grid grid-cols-4 gap-10 my-14">
            {
                coffees.map((oneCoffeeData)=><Card key={oneCoffeeData.id} oneCoffeeData={oneCoffeeData} handleCartDeletion={handleCartDeletion}></Card>)
            }
        </div>
        </div>
    );
};

export default Favs;