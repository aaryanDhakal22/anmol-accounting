import React, { ChangeEvent } from "react";
import { Route, Routes } from "react-router-dom";

import TransactionCollection from "../../component/credit/creditcollection/collection.component";
import { incomeAndExpense } from "../../headers";

const CreditPage = ()=>{


    const [type,setType] = React.useState<string>("Select")
    const [year,setYear] = React.useState<string>("")
    const [month,setMonth] = React.useState<string>("")

    const handleYearChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setYear(e.currentTarget.value.trimEnd().trimStart())
    }
    const handleMonthChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setMonth(e.currentTarget.value.trimEnd().trimStart())
    }

    const handleTypeChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setType(e.currentTarget.value)
    }

    return (
        <>
        <div className="topbar">

            <select className="topbar-text" id="type" name="type" value={type} onChange={handleTypeChange}>     
            <option value={"Select"}>Select</option>
                    {incomeAndExpense.map((title)=>{
                        return <option value={title}>{title}</option>
                    })}
            </select>

            <input  className="topbar-text " placeholder="YEAR" type="number"id="outlined-name"value={year}onChange={handleYearChange}/>
            <input  className="topbar-text mr-20" placeholder="MONTH"  type="text"id="outlined-name"value={month}onChange={handleMonthChange}/>
            
        </div>
        <Routes>
            <Route path="" element={<TransactionCollection type={type} year={year} month={month} />}></Route>
        </Routes>
        </>
    )
}

export default CreditPage