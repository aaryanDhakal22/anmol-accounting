import { TextField } from "@mui/material";
import React from "react";
import { useNotificationQuery } from "../../../hooks/useNotification";
import { useStudentQuery } from "../../../hooks/useStudentQuery";
import FeeTile from "../tile/tile.component";



const FeeCollection = ()=>{
    const profiles = useStudentQuery()
    const notifications = useNotificationQuery()
    const [searchStd,setSearchStd] = React.useState<string>("")
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }
    
    if(profiles.isLoading || notifications.isLoading){
        return <div className="display-1">LOADING...</div>
    }
    if(profiles.isError){
        if(profiles.error instanceof Error){
            return <span>Error: {profiles.error.message}</span>
        }
    }
    if(notifications.isError){
        return <div>Notificaion didnt get recieved</div>
    }

    if(profiles.isSuccess && notifications.isSuccess){
        const filtered_profiles = profiles.data.filter((item)=>{
            return item.name.toLocaleLowerCase().includes(searchStd.toLocaleLowerCase())
        }) 

    
        return (
            <div>

            <div className=" flex flex-row gap-5 items-center max-w-full bg-background h-28">
                <input type="text" id="outlined-name" className="py-3 px-5 mr-auto ml-auto text-2xl basis-1/3" placeholder="Search..."value={searchStd}onChange={handleChange}/>     
            </div>
                
                <div className="grid grid-cols-3 gap-9 p-10" >
                {filtered_profiles.map((profile)=>{
                    return  <FeeTile key ={profile.studentId} profile={profile}/>
                })} 
                </div>
            </div>
        )
    }
    return <div>An Error has Occured</div>
}

export default FeeCollection