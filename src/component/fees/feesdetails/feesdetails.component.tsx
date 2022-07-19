import React from "react";
import { useParams } from "react-router-dom";
import { StudentProfile, NotificationProfile } from "../../../gtypes";
import FEES_DATA from "../../../transactionData";
import NotificationTile from "../../notification/notificationtile/notificationtile.component";

const FeesDetails=({profiles}:{profiles :StudentProfile[]})=>{
    let searchId = useParams()
    const found_profile = profiles.filter((item)=>{
        return item.unid === searchId['unid']
    })[0]

    const [tsc,setTsc] = React.useState<NotificationProfile[]>(FEES_DATA)

    React.useEffect(()=>{
        fetch("https://djangostudenttestapi.herokuapp.com/transaction/"+found_profile.unid)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setTsc(json)
            console.log(json)
        }).catch((error)=>{
            console.log(error)
        })
        },[found_profile.unid])
    return (
        <>
        <div className="row gy-5" >


        {tsc.map((item)=>{
           return <NotificationTile key={item.transactionunid} tsc={item} />
        })}
        </div>
        </>
    )
}
export default FeesDetails