import React from "react";
import {Route,Routes, NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Collection from "../../component/collection/collection.component";

import Details from "../../component/details/details.component";

const StudentPage = ()=>{
    // The Search query State
    const [searchstd,setSearchStd] = React.useState<string>("")


    // Handles the search Query callback
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }

    // Handle the add
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