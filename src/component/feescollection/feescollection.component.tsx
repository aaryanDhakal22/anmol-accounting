import React from "react";
import { StudentProfile } from "../../gtypes";
import FeeTile from "../feetile/feetile.component";
const FeesCollection = ({searchFeeStd,profiles}:{searchFeeStd :string,profiles:StudentProfile[]})=>{

    

    const filtered_profiles = profiles.filter((item)=>{
        return item.name.toLocaleLowerCase().includes(searchFeeStd.toLocaleLowerCase())
    }) 

    
    return <div>
    <div className="row gy-5" >
    {filtered_profiles.map((profile)=>{
        return  <FeeTile key ={profile.unid} profile={profile}/>
    })} 

    </div>
   
    </div>
}

export default FeesCollection