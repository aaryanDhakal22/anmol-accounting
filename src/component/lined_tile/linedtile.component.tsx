import React from "react";

interface LinedTileProp{
    left : string
    center:string
    right:string
    onClick():void
}

const LinedTile = ({left,center,right,onClick}:LinedTileProp)=>{
    return (
        <div className="flex text-primaryText text-2xl rounded-2xl justify-between bg-background p-8" onClick={onClick} >
            <h3 className="ml-10" >{left}</h3>
            <h3 className="text-3xl">{center}</h3>
            <h3 className="mr-10 text-white">{right}</h3>
        </div>
        
    )
}

export default LinedTile