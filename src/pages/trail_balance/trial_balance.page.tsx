import { useNotificationQuery } from "../../hooks/useNotification";
import { useTransactionQuery } from "../../hooks/useTransaction";

const TrialBalance= ()=>{
    const transactions = useTransactionQuery()
    const notsOfStudent = useNotificationQuery()
     if (notsOfStudent.isLoading  || transactions.isLoading){
        return <p>Loading...</p>
    }
    if (notsOfStudent.isError){
        if(notsOfStudent.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {notsOfStudent.error.message}</p>
        }
    }
    if (transactions.isError){
        if(transactions.error instanceof Error){
            return <p>An Error Occured in Fetching Notification : {transactions.error.message}</p>
        }
    }
    if(notsOfStudent.isSuccess && transactions.isSuccess){
    return (
        <div className="absolute bg-white aspect-[1/1.41] w-screen top-0 left-0 p-5 flex flex-col items-center">
            Hello
        </div>    
    )
    }
    return <div>Unknown Error Occured</div>
}
export default TrialBalance