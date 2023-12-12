import React from 'react'
import { useState } from 'react'


function Plan({setComplete, complete, userPlan, setUserPlan, setuserAddons, setTotal}) {

    const [plan , setPlan] = useState(userPlan.duration)



    function handleSubmit(){
        setComplete({...complete, two:true})
        console.log(userPlan)
    }


    function handlePlan(chosen, price){
        setTotal(0)
        setuserAddons([{name:"Online service", chosen:false, price:''}, {name:"Larger storage", chosen:false, price:''}, {name:"Customizable profile", chosen:false, price:''}])
        setUserPlan({...userPlan, plan:chosen, price:price})
    }



  return (
    <>
    <div className='container'>
         <div className="mobilemenu">
                    <p className="num">
                        1
                    </p>
                    <p className="num2">
                        2
                    </p>
                    <p className="num">
                        3
                    </p>
                    <p className="num">
                        4
                    </p>
        </div>
    <div className="menu">
        <ul>
            <li>
                <p className="num">
                    1
                </p>
                <div className="what">
                    <p className='step'>STEP 1</p>
                    <p>YOUR INFO</p>
                </div>
            </li>
            <li>
                <p className="num2">
                    2
                </p>
                <div className="what">
                    <p className='step'>STEP 2</p>
                    <p>SELECT PLAN</p>
                </div>
            </li>
            <li>
                <p className="num">
                    3
                </p>
                <div className="what">
                    <p className='step'>STEP 3</p>
                    <p>ADD-ONS</p>
                </div>
            </li>
            <li>
                <p className="num">
                    4
                </p>
                <div className="what">
                    <p className='step'>STEP 4</p>
                    <p>SUMMARY</p>
                </div>
            </li>
        </ul>
    </div>


    <div className="mobilePlan" style={{minHeight:`${plan==='Yearly' ? '800px':''}`}}>
    <div className="top">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div className="bottom">
            <div className="plans">
                <div className="boxes">
                    <div className={userPlan.plan==='Arcade'?'chosenBox':"box"} onClick={()=>{plan==='Yearly'?handlePlan('Arcade', 90):handlePlan('Arcade', 9)}}>
                        <img src="/assets/images/icon-arcade.svg" alt="arcade" />
                        <div className="boxdown">
                            <p className='plan'>Arcade</p>
                            <p>{plan==='Monthly'?"$9/mo":"$90/yr"}</p>
                            {plan==='Yearly' && <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold', fontSize:'0.9em'}}>2 months free</p>}
                        </div>
                    </div>
                    <div className={userPlan.plan==='Advanced'?'chosenBox':"box"}  onClick={()=>{plan==='Yearly'?handlePlan('Advanced', 120):handlePlan('Advanced', 12)}}>
                        <img src="/assets/images/icon-advanced.svg" alt="arcade" />
                        <div className="boxdown">
                            <p className='plan'>Advanced</p>
                            <p>{plan==='Monthly'?"$12/mo":"$120/yr"}</p>
                            {plan==='Yearly' &&  <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold', fontSize:'0.9em'}}>2 months free</p>}
                        </div>
                    </div>
                    <div className={userPlan.plan==='Pro'?'chosenBox':"box"}  onClick={()=>{plan==='Yearly'?handlePlan('Pro', 150):handlePlan('Pro', 15)}}>
                        <img src="/assets/images/icon-pro.svg" alt="arcade" />
                        <div className="boxdown">
                            <p className='plan'>Pro</p>
                            <p>{plan==='Monthly'?"$15/mo":"$150/yr"}</p>
                            {plan==='Yearly' &&  <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold', fontSize:'0.9em'}}>2 months free</p>}
                        </div>
                    </div>
                </div>
            </div>
           <div className="paymenttype">
            <p style={{color:`${plan==='Monthly'?'hsl(213, 96%, 18%)':''}`, fontWeight:`${plan==='Monthly' ? 'bold':''}`}}>Monthly</p>
            <div className="slider" onClick={()=>{
                if(plan==='Monthly'){
                    setPlan('Yearly')
                    setUserPlan({plan:'Arcade', duration:'Yearly', price:90})
                    setuserAddons([{name:"Online service", chosen:false, price:''}, {name:"Larger storage", chosen:false, price:''}, {name:"Customizable profile", chosen:false, price:''}])
                    setTotal(0)
                } else{
                    setPlan('Monthly')
                    setUserPlan({...userPlan, duration:'Monthly'})
                    setUserPlan({plan:'Arcade', duration:'Monthly', price:9})
                    setuserAddons([{name:"Online service", chosen:false, price:''}, {name:"Larger storage", chosen:false, price:''}, {name:"Customizable profile", chosen:false, price:''}])
                    setTotal(0)
                }
            }}>
                <div className={plan==='Monthly' ? "slideeOnMonthly" : "slideeOnYearly"} />
            </div>
            <p style={{color:`${plan==='Yearly'?'hsl(213, 96%, 18%)':''}`, fontWeight:`${plan==='Yearly' ? 'bold':''}`}}>Yearly</p>
           </div>
        </div>
          
    </div>



    <div className="deets">
        <div className="top">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div className="bottom">
            <div className="plans">
                <div className="boxes">
                    <div className={userPlan.plan==='Arcade'?'chosenBox':"box"} onClick={()=>{plan==='Yearly'?handlePlan('Arcade', 90):handlePlan('Arcade', 9)}}>
                        <img src="/assets/images/icon-arcade.svg" alt="arcade" />
                        <div className="boxdown">
                            <p className='plan'>Arcade</p>
                            <p>{plan==='Monthly'?"$9/mo":"$90/yr"}</p>
                            {plan==='Yearly' && <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold', fontSize:'0.9em'}}>2 months free</p>}
                        </div>
                    </div>
                    <div className={userPlan.plan==='Advanced'?'chosenBox':"box"}  onClick={()=>{plan==='Yearly'?handlePlan('Advanced', 120):handlePlan('Advanced', 12)}}>
                        <img src="/assets/images/icon-advanced.svg" alt="arcade" />
                        <div className="boxdown">
                            <p className='plan'>Advanced</p>
                            <p>{plan==='Monthly'?"$12/mo":"$120/yr"}</p>
                            {plan==='Yearly' &&  <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold', fontSize:'0.9em'}}>2 months free</p>}
                        </div>
                    </div>
                    <div className={userPlan.plan==='Pro'?'chosenBox':"box"}  onClick={()=>{plan==='Yearly'?handlePlan('Pro', 150):handlePlan('Pro', 15)}}>
                        <img src="/assets/images/icon-pro.svg" alt="arcade" />
                        <div className="boxdown">
                            <p className='plan'>Pro</p>
                            <p>{plan==='Monthly'?"$15/mo":"$150/yr"}</p>
                            {plan==='Yearly' &&  <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold', fontSize:'0.9em'}}>2 months free</p>}
                        </div>
                    </div>
                </div>
            </div>
           <div className="paymenttype">
            <p style={{color:`${plan==='Monthly'?'hsl(213, 96%, 18%)':''}`, fontWeight:`${plan==='Monthly' ? 'bold':''}`}}>Monthly</p>
            <div className="slider" onClick={()=>{
                if(plan==='Monthly'){
                    setPlan('Yearly')
                    setUserPlan({plan:'Arcade', duration:'Yearly', price:90})
                    setuserAddons([{name:"Online service", chosen:false, price:''}, {name:"Larger storage", chosen:false, price:''}, {name:"Customizable profile", chosen:false, price:''}])
                    setTotal(0)
                } else{
                    setPlan('Monthly')
                    setUserPlan({...userPlan, duration:'Monthly'})
                    setUserPlan({plan:'Arcade', duration:'Monthly', price:9})
                    setuserAddons([{name:"Online service", chosen:false, price:''}, {name:"Larger storage", chosen:false, price:''}, {name:"Customizable profile", chosen:false, price:''}])
                    setTotal(0)
                }
            }}>
                <div className={plan==='Monthly' ? "slideeOnMonthly" : "slideeOnYearly"} />
            </div>
            <p style={{color:`${plan==='Yearly'?'hsl(213, 96%, 18%)':''}`, fontWeight:`${plan==='Yearly' ? 'bold':''}`}}>Yearly</p>
           </div>
        </div>
        <div className="buttons">
        <button className='back' onClick={()=>{setComplete({...complete, one:false})}}>Go Back</button>
           <button className='next' onClick={handleSubmit}>Next Step</button>
           </div>
           <div className="mobileButtons">
        <button className='back' onClick={()=>{setComplete({...complete, one:false})}}>Go Back</button>
           <button className='next' onClick={handleSubmit}>Next Step</button>
           </div>
    </div>
</div>
<footer>
        <button className='back' onClick={()=>{setComplete({...complete, one:false})}}>Go Back</button>
           <button className='next' onClick={handleSubmit}>Next Step</button>
</footer>
</>
  )
}

export default Plan