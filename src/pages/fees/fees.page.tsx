import React from "react";
import {Route,Routes } from "react-router-dom";
import TextField from "@mui/material/TextField";
import STUDENT_DATA from "../../studentData";
import {StudentProfile} from "../../gtypes";

import FeesCollection from "../../component/feescollection/feescollection.component";
import FeesDetails from "../../component/feesdetails/feesdetails.component";

const Fees = ()=>{

    const [searchFeeStd,setSearchFeeStd] = React.useState<string>("")
    
    const [profiles,setProfiles] = React.useState<StudentProfile[]>(STUDENT_DATA)
    
    const [webState,setWebState] = React.useState<string>("LOADING")
    React.useEffect(()=>{
        fetch("https://djangostudenttestapi.herokuapp.com/student/")
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setProfiles(json)
            setWebState("LOADED")
        }).catch((error)=>{
            console.log(error)
        })
        },[])
        
    const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
        const new_search = e.currentTarget.value
        setSearchFeeStd(new_search)
    }
    if(webState==="LOADING"){
        return <div className="display-1">LOADING...</div>
    }else{

        return (
            <>
            <TextField
            id="outlined-name"
            label="Search Student"
            value={searchFeeStd}
            onChange={handleChange}
            />
            <Routes>
                <Route path="/" element={<FeesCollection searchFeeStd={searchFeeStd} profiles = {profiles}/>} />
                <Route path="/student/:unid" element= {<FeesDetails profiles={profiles} />}/>
            </Routes>
            </>
        )
    }
}
export default Fees