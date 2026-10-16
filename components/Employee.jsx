import React from 'react'

const Employee = ({Employeename,jobrole,salary}) => {
  return (
    <div>
     <h1>{Employeename}</h1> 
     <h1>{jobrole}</h1>
     <h1>{salary}</h1>
    </div>
  )
}

export default Employee
