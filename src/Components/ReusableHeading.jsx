
const ReusableHeading = ({title,subtitle}) => {
    return (
        <div className="text-center space-y-2 my-10">
           <h1 className="text-4xl font-semibold">{title}</h1> 
           <p className="text-gray-500">{subtitle}</p>
        </div>
    );
};

export default ReusableHeading;