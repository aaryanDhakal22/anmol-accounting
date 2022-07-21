import TextField from "@mui/material/TextField";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Collection from "../../component/student/collection/collection.component";
import Details from "../../component/student/details/details.component";


const StudentPage = ()=>{
    // The Search query State
    const [searchstd,setSearchStd] = React.useState<string>("")


    // Handles the search Query callback
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }

    // Handle the add and details
    return (
        <>
        <TextField
        id="outlined-name"
        label="Search Student"
        value={searchstd}
        onChange={handleChange}
        />

        <NavLink to="/student/add/" replace={false}><button>Add</button></NavLink>

        <Routes>
            <Route path="/" element={<Collection searchStd={searchstd} />} />
            <Route path="/add/" element={<Details/>}></Route>
            <Route path="/details/:studentId" element={<Details/>} /> 
            {/* <Route path="/details/:unid" element= {<StudentDetails profiles={ImageData} />}/> */}
        </Routes>
        </>
    )
    
    
}
export default StudentPage