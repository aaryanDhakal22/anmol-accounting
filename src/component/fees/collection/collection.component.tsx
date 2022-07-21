import { TextField } from "@mui/material";
import React from "react";
import { useStudentQuery } from "../../../hooks/useStudentQuery";
import FeeTile from "../tile/tile.component";



const FeeCollection = ()=>{
    const profiles = useStudentQuery()
    const [searchStd,setSearchStd] = React.useState<string>("")
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchStd(new_search)
    }
    if(profiles.isLoading){
        return <div className="display-1">LOADING...</div>
    }
    if(profiles.isError){
        if(profiles.error instanceof Error){
            return <span>Error: {profiles.error.message}</span>
        }
    }
    if(profiles.isSuccess){

        const filtered_profiles = profiles.data.filter((item)=>{
            return item.name.toLocaleLowerCase().includes(searchStd.toLocaleLowerCase())
        }) 

    
        return (
            <div>

                
                <TextField
                id="outlined-name"
                label="Search Student"
                value={searchStd}
                onChange={handleChange}
                />
                <div className="row gy-5" >
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