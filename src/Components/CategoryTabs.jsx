import { NavLink } from "react-router-dom";

const CategoryTabs = ({categories}) => {
    console.log(categories)
    return (
        <div role="tablist" className="tabs tabs-lift flex justify-center">
            {
                categories.map((category)=><NavLink to={`/coffeeCards/${category.category}`} key={category.category}  role="tab" className={({isActive})=>`tab ${isActive ? 'tab-active' : ''}`}>{category.category}</NavLink>)
            }
        </div>
    );
};

export default CategoryTabs;