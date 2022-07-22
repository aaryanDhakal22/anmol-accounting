import { useMutation, useQuery, UseQueryResult, useQueryClient } from "@tanstack/react-query";
import {Student} from '../gtypes'
import { getReq,putReq } from "../utils/axios-utils";
import { dateFormatter } from "../utils/temp_dateformatter";


const updateStudent = (student:Student):Promise<Student>=>{
    return putReq({url:`/student/details/${student.studentId}`, method:"put",data:student})
}
const addStudent = (student:Student):Promise<Student>=>{
    return putReq({url:'/student/', method:"post",data:student})
}

const fetchStudent = ():Promise<Student[]>=>{
   return getReq({url:'/student'})
}

export const useStudentQuery = ():UseQueryResult<Student[]>=>{
    return useQuery<Student[],Error>(['students'],fetchStudent,{
        // cacheTime:5000,
        refetchOnWindowFocus:false,
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
    const queryClient = useQueryClient()
    return useMutation(updateStudent,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['students'])
        }
    })
}
export const useAddStudentData = ()=>{
    const queryClient = useQueryClient()
    return useMutation(addStudent,{
        onSuccess: ()=>{
            queryClient.invalidateQueries(['students'])
        }
    })
}
