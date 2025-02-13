


import { IMG_CDN_URL } from "../config";   //named export and import thats why we use curly braces

const RestaurantCards = ({Restraunt,name,cuisines,avgRating,cloudinaryImageId}) => { //first level destrucring
    //const RestrauntCards = (props) => {}------- a way to use props.the above used way is destructuring which is a good practice for clean code
    //second level destrucring   const {name,cuisines,avgRating,cloudinaryImageId}= Restraunt.info ;              
    return (
      // here object data are passed as props in functional component
      <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };
  


  export default  RestaurantCards;
 