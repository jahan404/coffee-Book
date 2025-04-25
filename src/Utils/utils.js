import toast from "react-hot-toast"

// get all coffee data from LS
function getAllDataFromLS(){
const isExist = localStorage.getItem('favCoffee')
if(isExist){
    return JSON.parse(isExist)
}
else return []
}



// add selected fav coffee to LS
function addDataTOLS(coffee){
const previouslySavedData = getAllDataFromLS()
const isExist = previouslySavedData.find(c=>c.id==coffee.id)
if(isExist){
    return toast.error('ALready Added!')

}
else previouslySavedData.push(coffee)

const convertNewlyPushedCoffeeDataToStringify = JSON.stringify(previouslySavedData)

localStorage.setItem('favCoffee',convertNewlyPushedCoffeeDataToStringify)


toast.success('Successfully Added to Your Favs!')

}



// delete a coffee data from LS
const removeSelectedCoffeeCard =(id)=>{
    const previouslySavedData = getAllDataFromLS()
    const arrayAfterRemovingSelectedCard = previouslySavedData.filter(c=>c.id!== id)

    const convertNewlyPushedCoffeeDataToStringify = JSON.stringify(arrayAfterRemovingSelectedCard)

    localStorage.setItem('favCoffee',convertNewlyPushedCoffeeDataToStringify)

    toast.success('Successfully Removed From Cart!')
}



export {addDataTOLS,getAllDataFromLS,removeSelectedCoffeeCard}