
import { Button } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import { Student } from "../../gtypes"
import { useStudentQuery } from "../../hooks/useStudentQuery"
import PersonalForm from "../personalform/personalform.componenet"
import AccountForm from "../accountform/accountform.component"

const initialStudentState = {
    "studentId":"",
    "name":'',
    "phone":0,
    "age":0,
    "group":'',
    "gender":'',
    "father":'',
    "mother":'',
    "address":'',
    "dob": '',
    "speechTherapy":0,
    "therapy": 0 ,
    "transportation": 0 ,
    "tuition":0,
    "snacks":0,
    "isAdmission":false
}

const Details = ()=>{
    const studentId = useParams()["studentId"]
    const {data, isError,isLoading,error,isSuccess,isFetching} = useStudentQuery()
    const [formState,setFormState] = React.useState<"Account"|"Personal">("Personal")

    const handleFormState = (states:"Account"|"Personal")=>{
        
        setFormState(states)

    }

    if(isLoading || isFetching){
        return <div>Loading...</div>
    }
    if(isError){
        if(error instanceof Error){
            return <p>Error : {error.message}</p>
        }
    }
    if(isSuccess){
        let foundStudent :Student
        if(studentId!==undefined){

            foundStudent = data.filter(item=>item.studentId===studentId)[0]
        }
        else{
            foundStudent = initialStudentState
        }

        return(
            <>
            <br/>
            <br/>
            <Button variant="contained" onClick={ ()=>handleFormState("Personal")} >Personal</Button>
            <Button variant="contained" onClick={ ()=>handleFormState("Account")}  >Account</Button>
            {formState ==="Account" && <AccountForm student={foundStudent} />}
            {formState ==="Personal" && <PersonalForm student={foundStudent} />}
            
            </>
        )
        
        
        
           

    }
    return <p>An Error Has Occured</p>
}

export default Details