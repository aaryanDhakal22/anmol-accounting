import { useLiabilitiesQuery } from "../../hooks/useAOL";

export const LiabilitiesList = () => {
    const {isLoading,data,isError,isSuccess,error} = useLiabilitiesQuery()
    
    if(isLoading){
        return <div>LOADING</div>
    }
    if(isError){
        if(error instanceof Error){
            return <div>Error Occured : {error.message}</div>
        }
    }
    if(isSuccess){
        console.log(data[0])
        return (
            <>
            <div>
                <div className="aolLabels">Share Capital Archana :<span className="text-primaryText "> Rs. {data[0].shareCapitalArchana}</span></div>
                <div className="aolLabels">Share Capital Sangita :<span className="text-primaryText "> Rs. {data[0].shareCapitalSangita}</span></div>
                <div className="aolLabels">Borrowing Loan Bank :<span className="text-primaryText "> Rs. {data[0].borrowingLoanBank}</span></div>
                <div className="aolLabels">Borrowing Archana Rimal :<span className="text-primaryText "> Rs. {data[0].borrowingArchanaRimal}</span></div>
                <div className="aolLabels">Borrowing Sangita Neupane :<span className="text-primaryText "> Rs. {data[0].borrowingSangeetaNeupane}</span></div>
                <div className="aolLabels">Borrowing Others :<span className="text-primaryText "> Rs. {data[0].borrowingOthers}</span></div>
                <div className="aolLabels">Social Security Tax :<span className="text-primaryText "> Rs. {data[0].socialSecurityTax}</span></div>
                <div className="aolLabels">Salary Tax :<span className="text-primaryText "> Rs. {data[0].salaryTax}</span></div>
                <div className="aolLabels">Salary Payable :<span className="text-primaryText "> Rs. {data[0].salaryPayable}</span></div>
                <div className="aolLabels">Audit Fee Payable :<span className="text-primaryText "> Rs. {data[0].auditFeePayable}</span></div>
                <div className="aolLabels">Other Payable :<span className="text-primaryText "> Rs. {data[0].otherPayable}</span></div>
                <div className="aolLabels">Capital Reserve/Deficit :<span className="text-primaryText "> Rs. {data[0].capitalReserveOrDeficit}</span></div>
                

            </div>
            </>
        )
    }
    return <div>Unknown Error Occured</div>
    
}