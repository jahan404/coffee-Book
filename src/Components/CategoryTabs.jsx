import { Link } from "react-router-dom";

const CategoryTabs = ({categories}) => {
    console.log(categories)
    return (
        <div role="tablist" className="tabs tabs-lift flex justify-center">
            {
                categories.map((category)=><Link to={`/coffeeCards/${category.category}`} key={category.category}  role="tab" className="tab">{category.category}</Link>)
            }
        </div>
    );
};

export default CategoryTabs;