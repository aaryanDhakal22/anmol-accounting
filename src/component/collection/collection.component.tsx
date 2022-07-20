import React from "react";
import { useStudentQuery } from "../../hooks/useStudentQuery";
import Tile from "../tile/tile.component";

interface CollectionProps{
    searchStd:string
}

const Collection = ({searchStd}:CollectionProps)=>{
    const profiles = useStudentQuery()

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
                <div className="row gy-5" >
                {filtered_profiles.map((profile)=>{
                    return  <Tile key ={profile.studentId} profile={profile}/>
                })} 
                </div>
            </div>
        )
    }
    return <div>An Error has Occured</div>
}

export default Collection