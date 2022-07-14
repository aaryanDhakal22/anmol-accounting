import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Student from './pages/student/student.page';
import Fees from './pages/fees/fees.page';
import Nav from './component/tempnav.component';
function App() {

  return (
    <div className="App">
        <Nav/>
      <Routes>
        <Route path='student/*' element={<Student/>} />
        <Route path='fees/*' element={<Fees/>} />
        
      </Routes>
    </div>
  );
}

export default App;
