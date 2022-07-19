import React from "react";
import { useNavigate } from "react-router-dom";
import { NotificationProfile } from "../../../gtypes";
const NotificationTile = ({tsc}:{tsc:NotificationProfile})=>{

    const navigate = useNavigate()

    const month_index :any ={
        "1" : "Baisakh",
        "2" : "Jestha",
        "3": "Ashar",
        "4" : "Shrawan",
        "5":"Bhadra",
        "6":"Ashoj",
        "7":"Kartik",
        "8":"Mangsir",
        "9":"Paush",
        "10":"Magh",
        "11":"Falgun",
        "12":"Chaitra"
    }
    const handleNavigate=()=>{
        navigate('/')
    }
    return (
        <div className="col-6">
        <div className="card hover-pointer" >
            <div className="card-body">
                <div className="card-title h4">{tsc.date}</div>
                <div className="card-text">
                    <p>Amount : {tsc.paidAmount}</p>
                    <p>For Month: {month_index[tsc.forMonth]}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default NotificationTile