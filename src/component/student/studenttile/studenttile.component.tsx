import React from "react";
import {useNavigate} from 'react-router-dom'
import {  StudentProfile } from "../../../gtypes";
import './studenttile.styles.css'

const StudentTile =(profile: {profile:StudentProfile})=>{
    const {name,group,age,phone,address,unid} = profile.profile
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`details/${unid}`)
    }
    return <div className="col-6">
        <div className="card hover-pointer"  onClick={handleNavigate}>
            <div className="card-body">
                <div className="card-title h4">{name}</div>
                <div className="card-text">
                <p>Group : {group}</p>
                <p>Age : {age}</p>
                <p>Phone : {phone}</p>
                <p>Address : {address}</p>       
                </div>
            </div>
        </div>
        
        </div>
}

export default StudentTile