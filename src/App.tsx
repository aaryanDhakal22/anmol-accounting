import { Route, Routes } from "react-router-dom";

import { Navbar } from "./component/navbar/navbar.collection";
import AccountsPage from "./pages/accounts/accounts.page";
import AOLPage from "./pages/aol/aol.page";
import CreditPage from "./pages/credit/credit.page";
import FeesPage from "./pages/fees/fees.page";
import { GeneratePage } from "./pages/generate/generate.page";
import NotificationPage from "./pages/notifications/notification.page";
import { PrintPage } from "./pages/print/print.page";
import StudentPage from "./pages/student/student.page";
import TransactionPage from "./pages/transaction/transaction.page";

function App() {

  return (
    <div className="">
      <Navbar />
      <div className="ml-[13.2rem] mt-[-1.3rem] bg-softerBackground w-[94.9rem] h-auto">
        <Routes>
          {/* <Route path='/' element={<StudentPage/>} /> */}
          <Route path='student/*' element={<StudentPage />} />
          <Route path='fees/*' element={<FeesPage />} />
          <Route path='notification/*' element={<NotificationPage />} ></Route>
          <Route path='transaction/*' element={<TransactionPage />} ></Route>
          <Route path='credit/*' element={<CreditPage />} ></Route>
          <Route path='aol/*' element={<AOLPage />} ></Route>
          <Route path='account/*' element={<AccountsPage/>} ></Route>
          <Route path='generate/*' element={<GeneratePage />} ></Route>
          <Route path='print/:notificationId' element={<PrintPage />} ></Route>

        </Routes>
      </div>
    </div>
  )
}

export default App;
