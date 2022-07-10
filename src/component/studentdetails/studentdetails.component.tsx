import React from "react";
import {useParams} from 'react-router-dom'
const StudentDetails = ()=>{
    let id = useParams()
    return <p>{id["id"]}</p>
}

export default StudentDetails