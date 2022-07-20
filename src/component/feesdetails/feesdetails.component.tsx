import React from "react";
import { useParams } from "react-router-dom";
import { Student, Notification} from "../../gtypes";
import FEES_DATA from "../../transactionData";
import NotificationTile from "../notification/notificationtile/notificationtile.component";

const FeesDetails=({profiles}:{profiles :Student[]})=>{
    let searchId = useParams()
    const found_profile = profiles.filter((item)=>{
        return item.studentId === searchId['studentId']
    })[0]

    const [tsc,setTsc] = React.useState<Notification[]>()

    React.useEffect(()=>{
        fetch("https://djangostudenttestapi.herokuapp.com/transaction/"+found_profile.studentId)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setTsc(json)
            console.log(json)
        }).catch((error)=>{
            console.log(error)
        })
        },[found_profile.studentId])
    return (
        <>
        <div className="row gy-5" >
        Hello
{/* 
        {tsc.map((item)=>{
           return <NotificationTile key={item.transactionstudentId} tsc={item} />
        })} */}
        </div>
        </>
    )
}
export default FeesDetails