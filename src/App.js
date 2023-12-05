import React from 'react'
import Sign from './login/Sign'
import Signup from './login/Signup'
import Home from './login/Home'

const func1=()=>{
  if(window.location.pathname==="/Home.js"){   //Routing
    return <Home />
  }
}
const func2=()=>{
  if(window.location.pathname==="/Sign.js"){  //Routing
    return <Sign />
  }
}
const func3=()=>{
  if(window.location.pathname==="/"){    //Routing
    return <Signup />
  }
}
const App=()=>{
  return(
    <div className="ui container">
    {func1()}
    {func2()}
    {func3()}
    </div>
  )
}
export default App