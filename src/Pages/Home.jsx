import { Outlet, useLoaderData } from 'react-router-dom';
import image from '../assets/banner.jpg'

import ReusableHeading from '../Components/ReusableHeading';
import CategoryTabs from '../Components/CategoryTabs';
const Home = () => {

    const coffeeCategories = useLoaderData()
    console.log(coffeeCategories)

    return (
        <div className='w-11/12 mx-auto my-10'>
            {/* banner image */}
           <div className='h-[540px]'>
               <img src={image} alt="" className='h-full w-full object-cover rounded-2xl'/>
           </div>
           
           {/* heading */}
           <ReusableHeading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></ReusableHeading>
           
           {/* coffee categories tab */}
           <CategoryTabs categories={coffeeCategories}></CategoryTabs>
           

           {/* show All D Y N A M I C  Coffee Cards */}
           <Outlet></Outlet>
        </div>
    );
};

export default Home;