import React, { useState, useEffect } from "react";

export default function card({year,poster,aos,title}){
  
  return(
    <React.Fragment>
      <div data-aos={aos} className="card">
        <img className="card-img" src={poster}/>
         <div data-aos="flip-up" className="year">
         <p>{title}</p>
           <span className="">{year}</span>
        
          </div>
        </div>
    
    
      </React.Fragment>
    )
}
