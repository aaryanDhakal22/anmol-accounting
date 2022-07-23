import { Route, Routes } from "react-router-dom";
import TransactionEdit from "../../component/notification/notificationedit/notificationedit.component";
import TransactionAdd from "../../component/transaction/transactionadd/transactionadd.componenet";

const TransactionPage = ()=>{


    return (
        
        <>
        <Routes>
            <Route path="/add/" element={<TransactionAdd/>}></Route>
            <Route path="/edit/:transactionId" element={<TransactionEdit/>} /> 
        </Routes>
        </>
    )
}

export default TransactionPage