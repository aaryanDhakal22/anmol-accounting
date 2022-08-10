import { Route, Routes } from "react-router-dom";

import { Navbar } from "./component/navbar/navbar.collection";
import CreditPage from "./pages/credit/credit.page";
import { EmptyPage } from "./pages/empty/empty.page";
import FeesPage from "./pages/fees/fees.page";
import NotificationPage from "./pages/notifications/notification.page";
import { PrintPage } from "./pages/print/print.page";
import StudentPage from "./pages/student/student.page";
import TransactionPage from "./pages/transaction/transaction.page";

function App() {

  return (
    <div className="">
      <Navbar />
      <div className="ml-[22.9rem] mt-[-1.3rem] bg-softerBackground w-[94.9rem] h-auto">
        <Routes>



          {/* <Route path='/' element={<StudentPage/>} /> */}
          <Route path='student/*' element={<StudentPage />} />
          <Route path='fees/*' element={<FeesPage />} />
          <Route path='notification/*' element={<NotificationPage />} ></Route>
          <Route path='transaction/*' element={<TransactionPage />} ></Route>
          <Route path='credit/*' element={<CreditPage />} ></Route>
          <Route path='print/:notificationId' element={<PrintPage />} ></Route>

        </Routes>
      </div>
    </div>
  )
}

export default App;
