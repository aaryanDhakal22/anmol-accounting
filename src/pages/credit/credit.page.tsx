import { FormControl, InputLabel,Select, SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent, ChangeEventHandler, SelectHTMLAttributes } from "react";
import { Route, Routes } from "react-router-dom";
import TransactionCollection from "../../component/credit/creditcollection/collection.component";

const typeToSubType :{
    Donation:string[],
    SchoolMaintainance:string[]
    Supplies:string[]
    Bills:string[]
    Kitchen:string[]
    Select:string[]
} = {
    Donation:["Invidual","Company"],
    SchoolMaintainance :["Building","Reconstruction","Fixing","Furniture"],
    Supplies:["Stationaries","Toys"],
    Bills:["Electricity","Water","Telephone"],
    Kitchen:["Food","Beverages","Utensils","Pots and Pans"],
    Select:["Select"]
}

const CreditPage = ()=>{


    const [type,setType] = React.useState<"Donation"|"SchoolMaintainance"|"Supplies"|"Bills"|"Kitchen"|"Select">("Select")
    const [subType,setSubType] = React.useState<string>("")

    const handleTypeChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setType(e.currentTarget.value as "Donation"|"SchoolMaintainance"|"Supplies"|"Bills"|"Kitchen" |"Select" )
        setSubType("")
    }
    const handleSubTypeChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setSubType(e.target.value as string)
    }

    return (
        <>
        <div className="topbar">

            <select className="topbar-text" id="type" name="type" value={type} onChange={handleTypeChange}>     
                <option value={"Select"}>Select</option>
                <option value={"Donation"}>Donation</option>
                <option value={"SchoolMaintainance"}>School Maintainance</option>
                <option value={"Supplies"}>Supplies</option>
                <option value={"Bills"}>Bills</option>
                <option value={"Kitchen"}>Kitchen</option>
            </select>
            <select className="topbar-text" id="subType" name="subType"  value={subType} onChange={handleSubTypeChange}>     
                <option value={"Select"}>Select</option>
                {typeToSubType[type].map((item:string)=>{
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>
        </div>
        <Routes>
            <Route path="" element={<TransactionCollection type={type} subType ={subType} />}></Route>
        </Routes>
        </>
    )
}

export default CreditPage