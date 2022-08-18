import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import LinedTile from "../../component/lined_tile/linedtile.component";
import { TrialBalanceType } from "../../gtypes";
import { createTrialBalance, useTrialBalance } from "../../hooks/useTrialBalance";

const TrialBalance= ()=>{
    const trialBalances = useTrialBalance()
    const [year,setYear] = React.useState<string>("")
    const [month,setMonth] = React.useState<string>("")
    const navigate = useNavigate()


    const handleYearChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setYear(e.currentTarget.value)
    }
    const handleMonthChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setMonth(e.currentTarget.value)
    }
     if ( trialBalances.isLoading){
        return <p>Loading...</p>
    }
    if (trialBalances.isError){
        if(trialBalances.error instanceof Error){
            return <p>An Error Occured : {trialBalances.error.message}</p>
        }
    }
    if(trialBalances.isSuccess){
        const filteredtbs = trialBalances.data.filter((item:any)=>{
            return item.date.includes(year) && item.month.toLowerCase().includes(month.toLowerCase())
        })
    return (
        <>
        
        <div className=" topbar">
        <button className="btn mr-auto ml-20" onClick={()=>createTrialBalance()} >(+)Add</button>
        <input  className="topbar-text " placeholder="YEAR" type="number"id="outlined-name"value={year}onChange={handleYearChange}/>
        <input  className="topbar-text mr-20" placeholder="MONTH"  type="text"id="outlined-name"value={month}onChange={handleMonthChange}/>
    </div>
        <div className="grid grid-cols-2 gap-5 p-10 mt-5">
        {filteredtbs.map((tbs:any)=>{
            return <LinedTile  onClick={()=>navigate(`/trialbalance/${tbs.trialBalanceId}`)}  left={" "} center={tbs.month+", "+tbs.year} right={" "} />
        })}
        
        </div>
        </>
    )
    }
    return <div>Unknown Error Occured</div>
}
export default TrialBalance