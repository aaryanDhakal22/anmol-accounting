import { useAssetsQuery } from "../../hooks/useAOL";

export const AssetList = () => {
    const {isLoading,data,isError,isSuccess,error} = useAssetsQuery()
    
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
                <div className="aolLabels">Cash Balance :<span className="text-primaryText "> Rs. {data[0].cashBalance}</span></div>
                <div className="aolLabels">Account Receivable :<span className="text-primaryText "> Rs. {data[0].accountReceivable}</span></div>
                <div className="aolLabels">P.T. Cash :<span className="text-primaryText "> Rs. {data[0].ptCash}</span></div>
                

            </div>
            </>
        )
    }
    return <div>Unknown Error Occured</div>
    
}