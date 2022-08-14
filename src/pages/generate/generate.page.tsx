import { Route, Routes, useNavigate } from "react-router-dom";
import { GenHome } from "../../component/gen_home/gen_hone.component";
import TrialBalance from "../trail_balance/trial_balance.page";

export const GeneratePage = () => {
    const navigate = useNavigate()
    return (
        <>
        
        <Routes>
            <Route path="/home" element={<GenHome/>}/>
            <Route path="/trialBalance" element={<TrialBalance/>} /> 
            <Route path="/incomeSheet" element={<TrialBalance/>} /> 
            <Route path="/balanceSheet" element={<TrialBalance/>} /> 
        </Routes>
        </>


    )
}
