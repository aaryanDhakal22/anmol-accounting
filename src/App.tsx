import {Route,Routes} from 'react-router-dom'
import { Navbar } from './component/navbar/navbar.collection';

import StudentPage from './pages/student/student.page';

function App() {

  return (
      <div>
          <Navbar/>
          <Routes>
            <Route path='student/*' element={<StudentPage/>} />
            <Route path='fees/*' element={<StudentPage/>} />
          </Routes>
      </div>
    )
}

export default App;
