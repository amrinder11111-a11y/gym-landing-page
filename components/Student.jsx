import React from 'react'

const Student = ({name,Age,course}) => {
  return (
    <div>
<h1>{name}</h1>
<h1>{Age}</h1>
<h1>
    {course}
</h1>
    </div>
  )
}

export default Student
