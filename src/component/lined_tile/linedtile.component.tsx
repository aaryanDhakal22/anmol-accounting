import React from "react";

interface LinedTileProp{
    left : string
    center:string
    right:string
    onClick():void
}

const LinedTile = ({left,center,right,onClick}:LinedTileProp)=>{
    return (
        <div className="d-flex justify-content-between border mb-2 p-4" onClick={onClick} ><h3>{left}</h3> <h3>{center}</h3> <h3>{right}</h3></div>
        
    )
}

export default LinedTile