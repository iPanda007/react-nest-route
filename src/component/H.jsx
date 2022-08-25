import React from 'react'
import { UserComsumer } from '../useCarrier'


function H() {
  return (
    <div>
     
       <UserComsumer>
       {
            (item)=>{
               return <h1>
                  {item.akk}
                  {item.panda}
                  {item.chitTal}
               </h1>
            }
          }
       </UserComsumer>
      
    </div>
  )
}

export default H
