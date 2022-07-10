import React from 'react';
import './App.css';
import Student from './pages/student/student.page';
import {Route,Routes} from 'react-router-dom'
import StudentCollection from './component/studentcollection/studentcollection.component';
import StudentDetails from './component/studentdetails/studentdetails.component';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="student/" >
          <Route path="list" element={<StudentCollection/>} />
          <Route path=":id" element={<StudentDetails/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
