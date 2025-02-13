

import {RestaurantList} from "../config";
import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";


function filterData(SearchText, restaurants){
   const filterData= restaurants.filter((restaurant) =>
    restaurant.info.name.includes(SearchText)
    );
    return filterData;
  }



const Body = () => {

//const SearchText    this way used in js for creating variable
const [restaurants,setRestaurantList] = useState(null);
console.log(restaurants)
const [SearchText,setSearchText] = useState(""); //returns array  [state variable name,   set function for updating local variable]   used in react to create variable


useEffect(() =>{
  getRestaurent();
},[])

  async function getRestaurent() {
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.1017996&lng=78.8519601&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );
    const json = await data.json();
    const resto = json?.data//?.cards[1]?.card?.card?.gridElements?.infoWithStyle//?.restaurants?.info;
    console.log(resto)
    //optional chaining
    setRestaurantList(resto);
  }



    return (
      // Restraunt ={RestaurantList[0]} passed as props
  
     // <RestrauntCards Restraunt ={RestaurantList[0]} />  like this  used for second level destrucring way

      <> 

     <div className="search-container">
        <input
        type="text"
        className="search-input"
        placeholder="search"
        value={SearchText}  //one way binding
        onChange={(e) =>{               //e for event =  what ever we print we can read the value
            setSearchText(e.target.value)  //two way binding
        }}
        
        
        />
       <button className="search-btn"
       onClick={() =>{
        
        const data=filterData(SearchText, restaurants);  //needs to filter RestaurantList data
        
        setRestaurantList(data);  //updating the restaurantList
       }}
       
       >Search</button>


     </div>
      <div className="restaurant-list"> 
                {
              restaurants?.map((restaurant) => {
                return < RestaurantCards {...restaurant.info} key={restaurant.info.id}/> ;
                
               })
      }  
       
    {/* <RestrauntCards {... RestaurantList[0].info} />
        <RestrauntCards {... RestaurantList[1].info}/>
        <RestrauntCards {... RestaurantList[2].info}/>
        <RestrauntCards {... RestaurantList[3].info}/>
        <RestrauntCards {... RestaurantList[4].info}/>
        <RestrauntCards {... RestaurantList[5].info}/>     -------------this way used when we do not do mapping on Restrauntlist.It will be difficult when we have more cards 
            <RestrauntCards {... RestaurantList[6].info}/>  */}
        
        
      </div>
      </>
    );
  };



  export  default Body; 