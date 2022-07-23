import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent } from "react";
import { Route, Routes } from "react-router-dom";
import TransactionCollection from "../../component/credit/creditcollection/collection.component";

const typeToSubType :{
    Donation:string[],
    SchoolMaintainance:string[]
    Supplies:string[]
    Bills:string[]
    Kitchen:string[]
} = {
    Donation:["Invidual","Company"],
    SchoolMaintainance :["Building","Reconstruction","Fixing","Furniture"],
    Supplies:["Stationaries","Toys"],
    Bills:["Electricity","Water","Telephone"],
    Kitchen:["Food","Beverages","Utensils","Pots and Pans"],
}

const CreditPage = ()=>{


    const [type,setType] = React.useState<"Donation"|"SchoolMaintainance"|"Supplies"|"Bills"|"Kitchen">("Donation")
    const [subType,setSubType] = React.useState<string>("")

    const handleTypeChange = (e:SelectChangeEvent)=>{
        setType(e.target.value as "Donation"|"SchoolMaintainance"|"Supplies"|"Bills"|"Kitchen" )
        setSubType("")
    }
    const handleSubTypeChange = (e:SelectChangeEvent)=>{
        setSubType(e.target.value as string)
    }

    return (
        <>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
            <InputLabel id="subTypeLabel">Type</InputLabel>
            <Select id="type" name="type" defaultValue={"Donation"} value={type} label="Paid" onChange={handleTypeChange}>     
                <MenuItem value={"Donation"}>Donation</MenuItem>
                <MenuItem value={"SchoolMaintainance"}>School Maintainance</MenuItem>
                <MenuItem value={"Supplies"}>Supplies</MenuItem>
                <MenuItem value={"Bills"}>Bills</MenuItem>
                <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
            <InputLabel id="subTypeLabel">Sub-Type</InputLabel>
            <Select id="subType" label="subTypeLabel" labelId="subTypeLabel" name="subType"  value={subType} onChange={handleSubTypeChange}>     
                {typeToSubType[type].map((item:string)=>{
                    return <MenuItem value={item}>{item}</MenuItem>
                })}
            </Select>
            </FormControl>
        <div>{type}  {subType}</div>
        <Routes>
            <Route path="" element={<TransactionCollection type={type} subType ={subType} />}></Route>
        </Routes>
        </>
    )
}

export default CreditPage