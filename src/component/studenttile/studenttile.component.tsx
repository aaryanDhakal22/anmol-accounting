import React from "react";

import { StudentPersonal, StudentProfile } from "../../gtypes";

const StudentTile =(profile: {profile:StudentProfile})=>{
    const {name,personal,id,account} = profile.profile
    
    return <div className="col-6">
        <div className="card "  >
            <div className="card-body">
                <div className="card-title h4">{name}</div>
                <p className="card-text">
                <p>Group : {personal.group}</p>
                <p>Age : {personal.age}</p>
                <p>Phone : {personal.phone}</p>
                <p>Address : {personal.address}</p>       
                </p>
            </div>
        </div>
        
        </div>
}

export default StudentTile