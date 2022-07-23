import { Route, Routes } from "react-router-dom";

import { Navbar } from "./component/navbar/navbar.collection";
import CreditPage from "./pages/credit/credit.page";
import FeesPage from "./pages/fees/fees.page";
import NotificationPage from "./pages/notifications/notification.page";
import StudentPage from "./pages/student/student.page";
import TransactionPage from "./pages/transaction/transaction.page";

function App() {

  return (
      <div>
          <Navbar/>
          <Routes>
            <Route path='student/*' element={<StudentPage/>} />
            <Route path='fees/*' element={<FeesPage/>} />
            <Route path='notification/*' element={<NotificationPage/>} ></Route>
            <Route path='transaction/*' element={<TransactionPage/>} ></Route>
            <Route path='credit/*' element={<CreditPage/>} ></Route>

          </Routes>
      </div>
    )
}

export default App;
