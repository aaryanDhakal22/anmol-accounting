import React from "react";
import { useParams } from "react-router-dom";
import { StudentProfile, TransactionProfile } from "../../gtypes";
import FEES_DATA from "../../transactionData";
import Transaction from "../transaction/transaction.component";

const FeesDetails=({profiles}:{profiles :StudentProfile[]})=>{
    let searchId = useParams()
    const found_profile = profiles.filter((item)=>{
        return item.unid === searchId['unid']
    })[0]

    const [tsc,setTsc] = React.useState<TransactionProfile[]>(FEES_DATA)
    const [webState,setWebState] = React.useState<string>("LOADING")

    React.useEffect(()=>{
        fetch("https://djangostudenttestapi.herokuapp.com/transaction/"+found_profile.unid)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setTsc(json)
            setWebState("LOADED")
            console.log(json)
        }).catch((error)=>{
            console.log(error)
        })
        },[])
    return (
        <>
        <div className="row gy-5" >


        {tsc.map((item)=>{
           return <Transaction key={item.transactionunid} tsc={item} />
        })}
        </div>
        </>
    )
}
export default FeesDetails