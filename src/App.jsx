import { useState } from 'react'


import Header from './Componenes/Header'
import Category from './Componenes/Category'
import Top_Resturent from './Componenes/Top_Resturent'
import OnlineDelivey from './Componenes/OnlineDelivey'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
     <Header />
     <Category />
     <Top_Resturent />
     <OnlineDelivey />
     
    </div>
  )
}

export default App
