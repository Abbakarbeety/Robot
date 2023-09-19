import React from "react";
const SearchBox=({seachField, searchChange})=>{
    return(
        <div className="pa2">
            <input 
            className="tc bg-light-blue dib br3 pa3 ma2 grow shadow5"
             type="Search" 
             placeholder="enter robot name" 
             onChange={searchChange}
             />
        </div>
    )
}
export default SearchBox;  