// Your code here
const createEmployeeRecord = (array) => {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
}

const createEmployeeRecords = rawData =>{
    return rawData.map((details)=>{
      return createEmployeeRecord(details)
    })
}

const createTimeInEvent =(employee, dateStamp)=>{
    let[date, hour] =dateStamp.split(' ')
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour,10),
      date,
    })
    return employee;
}

const createTimeOutEvent =(employee, dateStamp)=>{
    let[date, hour] =dateStamp.split(' ')
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour,10),
      date,
    })
    return employee
}

const hoursWorkedOnDate = (employee, dateSort)=>{
    let timeIn = employee.timeInEvents.find((event)=>{
        return event.date === dateSort
    }
    )
    let timeOut = employee.timeOutEvents.find((event)=>{
        return event.date === dateSort
    }

    )
    if(timeIn && timeOut){
        return timeOut.hour - timeIn.hour
    }
    else{
        return 0
    }
}

const outEvent =employee.timeOutEvents.find((event)=>{
    return event.date === dateSort
}
)

const wagesEarnedOnDate = (employee, dateSort)=>{
    let hours = hoursWorkedOnDate(employee, dateSort)
    return hours * employee.payPerHour
}

const allWagesFor = employee=>{
    let wages = []
    employee.timeInEvents.forEach((event)=>{
        wages.push(wagesEarnedOnDate(employee, event.date))
    }
    )
    return wages
}

const findEmployeeByFirstName = (scrArray, first)=>{
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
}
const calculatePayroll =(arrayOfEmployeeRecords)=>{
    return arrayOfEmployeeRecords.reduce((memo,rec)=>{
      return memo + allWagesFor(rec)
    },0)
}
