
import { Button } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import { Student } from "../../../gtypes";
import { useStudentQuery } from "../../../hooks/useStudentQuery";
import AccountForm from "../account_form/accountform.component";
import PersonalForm from "../personal_form/personalform.componenet";


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
        if(error instanceof Error){
            return <p>Error : {error.message}</p>
        }
    
    if(isSuccess){
        let foundStudent :Student
        let toAdd: boolean
        if(studentId!==undefined){
            
            foundStudent = data.filter(item=>item.studentId===studentId)[0]
            toAdd = false
        }
        else{
            foundStudent = initialStudentState
            toAdd = true
        }

        return(
            <>
            <div className="grid grid-cols-12 mt-14">
                <div className="col-start-4 col-span-6 mt-6 text-center">
                    <button className="btn" onClick={ ()=>handleFormState("Personal")} >Personal</button>
                    <button className="btn ml-44" onClick={ ()=>handleFormState("Account")}  >Account</button>
                    <div className="flex flex-col mt-8">
                        {formState ==="Account" && <AccountForm toAdd={toAdd} student={foundStudent} />}
                        {formState ==="Personal" && <PersonalForm toAdd={toAdd} student={foundStudent} />}
                    </div>
                </div>
            </div>
            
            </>
        )
        
        
        
           

    }
    return <p>An Error Has Occured</p>
}

export default Details