import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useStudentQuery } from "../../../hooks/useStudentQuery";
import Tile from "../tile/tile.component";

const StudentCollection= ()=>{
    const profiles = useStudentQuery()
    // The Search query State
    const [searchStd,setSearchStd] = React.useState<string>("")
    const navigate = useNavigate()

    // Handles the search Query callback
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
                <div className=" topbar">
                    <button className="btn ml-24 mr-auto " onClick={()=>navigate('/student/add')}><MdAddCircleOutline style={{"display":"inline","fontSize":"25px"}} />ADD</button>
                    {/* <button className="btn mr-auto ml-8" > FILTER</button> */}
                    <input type="text" id="outlined-name" className="py-3 px-5 mr-32 text-2xl basis-1/3" placeholder="Search..."value={searchStd}onChange={handleChange}/>
                </div>
                <div className="grid grid-cols-3 gap-12 p-10 " >
                {filtered_profiles.map((profile)=>{
                    return  <Tile key ={profile.studentId} profile={profile}/>
                })} 
                </div>
            </div>
        )
    }
    return <div>An Error has Occured</div>
}

export default StudentCollection