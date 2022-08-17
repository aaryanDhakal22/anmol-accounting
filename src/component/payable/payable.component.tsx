import { useNavigate } from "react-router-dom";
import { idText } from "typescript";
import { useTransactionQuery } from "../../hooks/useTransaction";

export const PayableList = () => {
    const {isLoading,data,isError,isSuccess,error} = useTransactionQuery()
    
    if(isLoading){
        return <div>LOADING</div>
    }
    if(isError){
        if(error instanceof Error){
            return <div>Error Occured : {error.message}</div>
        }
    }
    if(isSuccess){
        return (
            <>
            <div className="grid grid-cols-3 gap-12 p-10 ">
            
            {data.filter((item)=>{
                return item.mode.substring(item.mode.length-3, item.mode.length) === "DO]"
            }).map((item)=>{
                return <PayableTile note={item.note} amount={item.amount} date={item.date} type={item.type} mode ={item.mode} transactionId = {item.transactionId}/>
            })}

            </div>
            </>
        )
    }
    return <div>Unknown Error Occured</div>
    
}

const PayableTile = ({note,amount,date,type,mode,transactionId}:{note:string,amount:number,date:string,type:string,mode:string,transactionId:string})=>{
    const navigate = useNavigate()
    return  <div  onClick={()=>navigate(`/transaction/edit/${transactionId}`)} className="bg-background p-10 rounded-2xl hover:scale-105 transition-all ease-linear hover:shadow-primaryText hover:shadow-xl ">
                <div className="text-3xl text-white"><span className="text-primaryText text-3xl">Note</span> : {note}</div>
                <div className="text-white mt-3">
                    <p><span className="text-primaryText text-xl">Date</span> : {date}</p>
                    <p><span className="text-primaryText text-xl">Type</span> : {type}</p>
                    <p><span className="text-primaryText text-xl">Amount</span> : {amount}</p>  
                    <p><span className="text-primaryText text-xl">Mode</span> : {mode}</p>  
                </div>
          
        </div>
    
}