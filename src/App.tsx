import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Student from './pages/student/student.page';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='student/*' element={<Student/>} />
      </Routes>
    </div>
  );
}

export default App;
