import React from "react";
import { useState } from "react";
function Seven(props){
    
    const cit=props.rrr;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cit}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
        res=> res.json()).then(
          data => {
            var f=[];
            for(let i=0;i<5;i++)
            {
             // console.log(data.list[i].main.temp);
            f.push(data.list[i].main.temp);
             
            }
            console.log(f)
            document.getElementById("tr").innerHTML=f;
          
          }
        )


  return(
      <h1 id="tr"></h1>
  );
}

export default Seven;