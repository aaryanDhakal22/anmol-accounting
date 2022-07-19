import React from "react";
import {useNavigate} from 'react-router-dom'
import {  StudentProfile } from "../../../gtypes";
import './feetile.styles.css'

const FeeTile =(profile: {profile:StudentProfile})=>{
    const {name,group,unid} = profile.profile
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`student/${unid}`)
    }
    return <div className="col-6">
        <div className="card hover-pointer"  onClick={handleNavigate}>
            <div className="card-body">
                <div className="card-title h4">{name}</div>
                <div className="card-text">
                <p>Group : {group}</p>   
                </div>
            </div>
        </div>
        
        </div>
}

export default FeeTile