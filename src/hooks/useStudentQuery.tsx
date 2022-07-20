import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import {Student} from '../gtypes'
import { getReq,putReq } from "../utils/axios-utils";
import { dateFormatter } from "../utils/temp_dateformatter";


const updateStudent = (student:Student):Promise<Student>=>{
    return putReq({url:`/student/details/${student.studentId}`, method:"put",data:student})
}

const fetchStudent = ():Promise<Student[]>=>{
   return getReq({url:'/student'})
}

export const useStudentQuery = ():UseQueryResult<Student[]>=>{
    return useQuery<Student[],Error>(['students'],fetchStudent,{
        // cacheTime:5000,
        staleTime:10000,
        select:(data)=>{
            return data.map((student)=>{
                return {...student,dob:dateFormatter(student.dob)}
            })
        },
        onError:(error)=>{
            console.log(error)
        }
        }
    )
}
export const useUpdateStudentData = ()=>{
    return useMutation(updateStudent)
}
