import React from 'react'
import './App.css'
import { useState } from 'react'
import Info from './components/Info'
import Plan from './components/Plan'
import Addons from './components/Addons'
import Summary from './components/Summary'
function App() {
const [complete, setComplete] = useState({one:false, two:false, three:false})
const [userInfo, setUserInfo] = useState({name:'', email:'', number:''})
const [userPlan, setUserPlan] = useState({plan:'Arcade', duration:'Monthly', price: 9})
const [userAddons, setUserAddons] = useState([{name:"Online service", chosen:false, price:''}, {name:"Larger storage", chosen:false, price:''}, {name:"Customizable profile", chosen:false, price:''}])
const [total, setTotal] = useState(0)
  return (
    <div>
      {!complete.one && <Info userInfo={userInfo}
       setUserInfo={setUserInfo}
        complete={complete}
         setComplete={setComplete}/>}
         
      {complete.one && !complete.two && <Plan complete={complete}
       setComplete={setComplete}
       userPlan={userPlan}
       setUserPlan={setUserPlan}
       setuserAddons={setUserAddons}
       setTotal={setTotal}
        />}

      {complete.two && !complete.three && <Addons complete={complete}
       setComplete={setComplete}
       userAddons={userAddons}
       setUserAddons={setUserAddons}
       plan={userPlan.duration}
       total={total}
       setTotal={setTotal}/>}

      {complete.three && <Summary complete={complete}
      setComplete={setComplete} 
      userAddons={userAddons}
      userPlan={userPlan}
      total={total}
      setTotal={setTotal}
      />}
    </div>
  )
}

export default App