import { useNavigate } from "react-router-dom";

export const GenHome = () => {
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-2 gap-10 mt-8 ml-10">
            <div className="gen-boxes" onClick={()=>navigate('/generate/trialBalance')}>Trial Balance</div>
            <div className="gen-boxes" onClick={()=>navigate('/generate/income')}>Income Sheet</div>
            <div className="gen-boxes" onClick={()=>navigate('/generate/balance')}>Balance Sheet</div>
        </div>
    )
}