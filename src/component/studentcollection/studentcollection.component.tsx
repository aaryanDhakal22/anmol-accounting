import React from "react";
import StudentTile from "../studenttile/studenttile.component";
import STUDENT_DATA from "../../studentData";
import {StudentProfile } from "../../gtypes";
import TextField from "@mui/material/TextField";

const StudentCollection = ()=>{

    const [profiles,setProfiles] = React.useState<StudentProfile[]>(STUDENT_DATA)
    const [searchstd,setSearchStd] = React.useState<string>("")

    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }
    const filtered_profiles = profiles.filter((item)=>{
        return item.name.toLocaleLowerCase().includes(searchstd.toLocaleLowerCase())
    }) 


    return <div>
    <div className="row gy-5">
    {filtered_profiles.map((profile)=>{
        return  <StudentTile profile={profile}/>
    })} 

    </div>
   
    </div>
}

export default StudentCollection