import React from "react";
import {useParams} from 'react-router-dom'
import { StudentProfile } from "../../gtypes";


const StudentDetails = ({profiles}:{profiles :StudentProfile[]})=>{
    let searchId = useParams()
    console.log(profiles)
    const found_profile = profiles.filter((item)=>{
        return item.unid === searchId['unid']
    })[0]
    return (
        <>
        <p>{found_profile.name}</p>
        
        </>
    )
}

export default StudentDetails