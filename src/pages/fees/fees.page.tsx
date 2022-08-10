import { Route, Routes } from "react-router-dom";

import FeeCollection from "../../component/fees/collection/collection.component";
import PerStudentFeeCollection from "../../component/fees/perstudentfeecollection/perstudentfeecollection.component";


// import Details from "../../component/details/details.component";

const FeesPage = ()=>{
    // The Search query State
    


    // Handles the search Query callback
    

    // Handle the add and details
    return (
        <>
        {/* <NavLink to="/student/add/" replace={false}><button>Add</button></NavLink> */}

        <Routes>
            <Route path="/" element={<FeeCollection/>} />
            <Route path="/:studentId" element={<PerStudentFeeCollection/>} />
        </Routes>
        </>
    )
    
    
}
export default FeesPage