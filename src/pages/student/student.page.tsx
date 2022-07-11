import React from "react";
import {Route,Routes } from "react-router-dom";
import StudentCollection from "../../component/studentcollection/studentcollection.component";
import StudentDetails from "../../component/studentdetails/studentdetails.component";
import TextField from "@mui/material/TextField";
import STUDENT_DATA from "../../studentData";
import {StudentProfile } from "../../gtypes";

const Student = ()=>{

    const [searchstd,setSearchStd] = React.useState<string>("")
    const [profiles,setProfiles] = React.useState<StudentProfile[]>(STUDENT_DATA)

    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }
    return (
        <>
        <TextField
        id="outlined-name"
        label="Search Student"
        value={searchstd}
        onChange={handleChange}
        />
        <Routes>
            <Route path="/" element={<StudentCollection searchStd={searchstd} profiles = {profiles}/>} />
            <Route path="/details/:id" element= {<StudentDetails profiles={profiles} />}/>
        </Routes>
        </>
    )
}
export default Student