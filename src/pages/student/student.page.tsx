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
    const [webState,setWebState] = React.useState<string>("LOADING")
    React.useEffect(()=>{
        fetch("https://djangostudenttestapi.herokuapp.com/student/")
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setProfiles(json)
            setWebState("LOADED")
        }).catch((error)=>{
            console.log(error)
        })
        },[])
        
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }
    if(webState==="LOADING"){
        return <div className="display-1">LOADING...</div>
    }else{

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
                <Route path="/details/:unid" element= {<StudentDetails profiles={profiles} />}/>
            </Routes>
            </>
        )
    }
}
export default Student