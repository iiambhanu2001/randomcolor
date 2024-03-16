import React, { useState } from 'react'

function Randomecolor() {
const [color, setColor]=useState('#000000')
const [typeofcolor,settypeofcolor]=useState("hex");
function randomnumber(length){
    return Math.floor(Math.random()*length);

}
function generatehexcolor(){
       
    const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexcolor='#';
    for(let i=0;i<6;i++){
        hexcolor+=hex[randomnumber(hex.length)];
    }
    setColor(hexcolor);
}

function generatergbcolor(){
       
    const r=randomnumber(256)
    const g=randomnumber(256)
    const b=randomnumber(256)
    setColor(`rgb(${r},${g}, ${b})`);
    
}

 return (
      <div style={{
    width:'100vw',
    height:'100vh',
    background: color,
 }} >

  
   
   <button onClick={()=> settypeofcolor("hex")} >create hex color</button>
   <button onClick={()=> settypeofcolor("rgb")}>create rgb color</button>
   <button onClick={typeofcolor==="hex"?generatehexcolor:generatergbcolor}>generate random color 🤩</button>
   <div style={{display:"flex"}}>
   <h1>{typeofcolor==='hex'? "Hex Color: " : "RGB Color: "}</h1>
   <h1>{color}</h1>
   </div>
   
 </div>

  )
}

export default Randomecolor;
