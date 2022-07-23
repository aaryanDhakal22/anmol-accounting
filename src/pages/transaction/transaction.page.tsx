import { Route, Routes } from "react-router-dom";
import TransactionAdd from "../../component/transaction/transactionadd/transactionadd.componenet";
import TransactionEdit from "../../component/transaction/transactionedit/transactionedit.componenet";

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