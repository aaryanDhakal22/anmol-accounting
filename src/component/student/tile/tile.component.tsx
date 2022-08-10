import { useNavigate } from "react-router-dom";

import { Student } from "../../../gtypes";




const Tile =({profile}:{profile:Student})=>{
    const {name,group,age,phone,address,studentId} = profile
    const navigate = useNavigate()
    
    const handleNavigate = ()=>{
            navigate(`/student/details/${studentId}`)
    }
    
    return (
        <div className="bg-background p-10 rounded-2xl hover:scale-105 transition-all ease-linear hover:shadow-primaryText hover:shadow-xl " onClick={handleNavigate}>
            <div className="text-white">
                <div className="text-3xl"><span className="text-primaryText">Name </span>: {name}</div><br></br>
                <div className="">
                    <p><span className="text-primaryText text-xl">Group</span> : {group}</p>
                    <p><span className="text-primaryText text-xl">Age</span> : {age}</p>
                    <p><span className="text-primaryText text-xl">Phone</span> : {phone}</p>
                    <p><span className="text-primaryText text-xl">Address</span> : {address}</p>       
                </div>
            </div>
        </div>
    )
    }

export default Tile