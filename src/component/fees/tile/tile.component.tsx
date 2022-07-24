

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Student } from "../../../gtypes";
import { useFeeStatus } from "../../../hooks/useFeeStatus";
import { useNotificationQuery } from "../../../hooks/useNotification";
import { feePaidStatus } from "../../../utils/feePaidStatus";

const FeeTile =({profile}:{profile:Student})=>{
    const {name,group,age,phone,address,studentId} = profile
    const navigate = useNavigate()

    const fee_status = useFeeStatus(studentId)
    const handleNavigate = ()=>{
            navigate(`/fees/${studentId}`)
    }
    if(fee_status.isLoading){
        return <div>Loading</div>
    }
    if(fee_status.isError){
        return <div>error in fee status</div>
    }
    if(fee_status.isSuccess){
        const paidClass = "feePaid"
        const unpaidClass = "feeUnpaid"

        const feeStatusClass = fee_status.data.status==="paid"?paidClass:unpaidClass

    return (
        <div className={feeStatusClass+" feeTile "} onClick={handleNavigate}>
            <div className="text-white">
                <div className="text-4xl"><span className="text-primaryText">Name </span>: {name}</div><br></br>
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
    return <div>Unknown error occured</div>
}

export default FeeTile