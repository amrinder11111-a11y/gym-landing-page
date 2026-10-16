// import React from 'react'

// const Username = (props) => {
//   return (
//     <div>
//       <h1>{ props.name}</h1>
//       <h1>{props.age}</h1>
//     </div>
//   )
// }

// export default Username


// data destructuring method

import React from 'react'

const Username = ({name,age,email}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
      
    </div>
  )
}

export default Username
