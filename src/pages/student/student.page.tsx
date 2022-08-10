import TextField from "@mui/material/TextField";
import React from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";

import Collection from "../../component/student/collection/collection.component";
import Details from "../../component/student/details/details.component";


const StudentPage = ()=>{
   

    // Handle the add and details
    return (
        <>

        

        <Routes>
            <Route path="/" element={<Collection  />} />
            <Route path="/add/" element={<Details/>}></Route>
            <Route path="/details/:studentId" element={<Details/>} /> 
            {/* <Route path="/details/:unid" element= {<StudentDetails profiles={ImageData} />}/> */}
        </Routes>
        </>
    )
    
    
}
export default StudentPage