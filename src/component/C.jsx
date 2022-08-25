import React from 'react'
import { UserProvider } from '../useCarrier'
import E from './E'



const array = [{
  akk:"Aung Kyaw Khaing",
},
{
  panda:"Sandi Tin Moe"
},
{
  chitTal:"I love You"
}
]
function C() {
  return (
    <div>
     {
        array.map((item,index)=>{
          return <UserProvider
            key={index}
            value={item}
          >
              <E/>
          </UserProvider>
        })
     }
    </div>
  )
}

export default C
