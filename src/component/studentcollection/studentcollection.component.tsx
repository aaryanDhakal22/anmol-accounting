import React from "react";
import StudentTile from "../studenttile/studenttile.component";
import { StudentProfile } from "../../gtypes";
const StudentCollection = ({searchStd,profiles}:{searchStd :string,profiles:StudentProfile[]})=>{

    

    const filtered_profiles = profiles.filter((item)=>{
        return item.name.toLocaleLowerCase().includes(searchStd.toLocaleLowerCase())
    }) 

    
    return <div>
    <div className="row gy-5" >
    {filtered_profiles.map((profile)=>{
        return  <StudentTile key ={profile.unid} profile={profile}/>
    })} 

    </div>
   
    </div>
}

export default StudentCollection