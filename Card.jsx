import React from "react";
const Card = (props)=>{
  const{name,email,id}=props;
    return(
      <div className=' tc bg-light-green dib br3 pa3 ma2 grow shadow5'>
        <img alt="robo" src={'https://robohash.org/test'} height={200} width={200} />
      <div > 
        <h2>{name}</h2>
        <p>{email}</p>
       </div>
      </div>
    );
}
export default Card;