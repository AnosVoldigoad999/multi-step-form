import React from 'react'
import { useEffect, useState } from 'react'
function Summary({complete, setComplete, userPlan, userAddons, total, setTotal}) {
    const [isComplete, setIsComplete] = useState(false)
    useEffect(()=>{
        setTotal(total+userPlan.price)
    },[])
  return (
    <>
    <div className='container'>
          <div className="mobilemenu">
                    <p className="num">
                        1
                    </p>
                    <p className="num">
                        2
                    </p>
                    <p className="num">
                        3
                    </p>
                    <p className="num4">
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
                <p className="num">
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
                <p className="num4">
                    4
                </p>
                <div className="what">
                    <p className='step'>STEP 4</p>
                    <p>SUMMARY</p>
                </div>
            </li>
        </ul>
    </div>
    <div className="deets">
 {!isComplete?<>       <div className="top">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
        </div>
        <div className="bottom">
            <div className="summary">
                <div className="first">
                <div className="chosenPlan">
                    <div className="Plan">
                        <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>{`${userPlan.plan}(${userPlan.duration})`}</p>
                        <p style={{textDecoration:'underline', cursor:'pointer'}} onClick={()=>{setComplete({...complete, three:false, two:false})}}>Change</p>
                    </div>
                    <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>{`$${userPlan.price}/${userPlan.duration==='Yearly'?'yr':'mo'}`}</p>
                </div>
                <div className="otherThings">
                    {userAddons.map(addon=>{
                        if(addon.chosen){
                            return <div className="thing">
                            <p>{addon.name}</p>
                            <p>{`+$${addon.price}/${userPlan.duration==='Yearly'?'yr':'mo'}`}</p>
                        </div>
                        }
                    })}
                </div>
                </div>
                <div className="total">
                    <p>Total({userPlan.duration==='Yearly'?'per year':'per month'})</p>
                    <p style={{color:'hsl(243, 100%, 62%)', fontWeight:'bolder', fontSize:'1.2em'}}>{`+${total}/${userPlan.duration==='Yearly'?'yr':'mo'}`}</p>
                </div>
            </div>
        </div>
        <div className="buttons">
        <button className='back' onClick={()=>{setComplete({...complete, three:false}); setTotal(total-userPlan.price)}}>Go Back</button>
           <button className='confirm' onClick={()=>{setIsComplete(true)}}>Confirm</button>
                </div></>:<><div className="confirmation">
                    <img src="/assets/images/icon-thank-you.svg" alt="confirm" className="confirmImage" />
                    <h2>Thank you!</h2>
                    <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
                </div></>}
    </div>
    <div className="mobileSummary">
    {!isComplete?<>       <div className="top">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
        </div>
        <div className="bottom">
            <div className="summary">
                <div className="first">
                <div className="chosenPlan">
                    <div className="Plan">
                        <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>{`${userPlan.plan}(${userPlan.duration})`}</p>
                        <p style={{textDecoration:'underline', cursor:'pointer'}} onClick={()=>{setComplete({...complete, three:false, two:false})}}>Change</p>
                    </div>
                    <p style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>{`$${userPlan.price}/${userPlan.duration==='Yearly'?'yr':'mo'}`}</p>
                </div>
                <div className="otherThings">
                    {userAddons.map(addon=>{
                        if(addon.chosen){
                            return <div className="thing">
                            <p>{addon.name}</p>
                            <p>{`+$${addon.price}/${userPlan.duration==='Yearly'?'yr':'mo'}`}</p>
                        </div>
                        }
                    })}
                </div>
                </div>
                <div className="total">
                    <p>Total({userPlan.duration==='Yearly'?'per year':'per month'})</p>
                    <p style={{color:'hsl(243, 100%, 62%)', fontWeight:'bolder', fontSize:'1.2em'}}>{`+${total}/${userPlan.duration==='Yearly'?'yr':'mo'}`}</p>
                </div>
            </div>
        </div>
       </>:<><div className="confirmation">
                    <img src="/assets/images/icon-thank-you.svg" alt="confirm" className="confirmImage" />
                    <h2>Thank you!</h2>
                    <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
                </div></>}
    </div>
</div>
{!isComplete && <footer>
        <button className='back' onClick={()=>{setComplete({...complete, three:false}); setTotal(total-userPlan.price)}}>Go Back</button>
           <button className='next' onClick={()=>{setIsComplete(true)}}>Confirm</button>
</footer>}
</>
  )
}

export default Summary