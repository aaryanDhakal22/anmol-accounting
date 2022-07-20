export const dateFormatter= (date:string)=>{
  
  let splitter;
  if(date.includes('-')){
    splitter = "-"
  }else{
    splitter = "/"
  }

  let dataArray = date.split(splitter)
  let year = dataArray[0]
  let month = dataArray[1]
  let day = dataArray[2]

  if(day.length<2){
    day = day.padStart(2,"0")
  }

  if(month.length<2){
    month = month.padStart(2,"0")
  }

  
    return year+"-"+month+'-'+day
  }

  
