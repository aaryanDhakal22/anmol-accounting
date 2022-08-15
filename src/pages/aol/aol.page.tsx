import React, { ChangeEvent } from "react";
import { Route, Routes } from "react-router-dom";
import { AssetList } from "../../component/asset/asset.component";
import { LiabilitiesList } from "../../component/liability/liability.component";
import { useAssetsQuery, useLiabilitiesQuery } from "../../hooks/useAOL";


const AOLPage = ()=>{


    const [mode,setMode] = React.useState<"ASSETS"| "LIABILITIES">("ASSETS")

    const handleTypeChange = (text: "ASSETS"|"LIABILITIES")=>{
        setMode(text)
    }
    return (
        <>
        <div className="topbar">
            <button className="topbar-text btn mr-20" onClick={()=>handleTypeChange("ASSETS")}>ASSETS</button>
            <button className="topbar-text btn" onClick={()=>handleTypeChange("LIABILITIES")}>LIABILITIES</button>
        </div>
            <div className="ml-14 text-2xl mt-10">
                {mode ==="ASSETS" && <AssetList/>}
                {mode === "LIABILITIES" && <LiabilitiesList/>}
            </div>
        
        </>
    )
    
}


export default AOLPage