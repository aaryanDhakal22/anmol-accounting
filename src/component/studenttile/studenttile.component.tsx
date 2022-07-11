import React from "react";
import {useNavigate} from 'react-router-dom'
import { StudentPersonal, StudentProfile } from "../../gtypes";
import './studenttile.styles.css'

const StudentTile =(profile: {profile:StudentProfile})=>{
    const {name,personal,id,account} = profile.profile
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`details/${id}`)
    }
    return <div className="col-6">
        <div className="card hover-pointer"  onClick={handleNavigate}>
            <div className="card-body">
                <div className="card-title h4">{name}</div>
                <div className="card-text">
                <p>Group : {personal.group}</p>
                <p>Age : {personal.age}</p>
                <p>Phone : {personal.phone}</p>
                <p>Address : {personal.address}</p>       
                </div>
            </div>
        </div>
        
        </div>
}

export default StudentTile