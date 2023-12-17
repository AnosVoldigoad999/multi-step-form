import React from 'react'
import { useState } from 'react'
function Info({userInfo, setUserInfo, complete, setComplete}) {
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [numberError, setNumberError] = useState(false)
    const pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    function handleSubmit(e){
        e.preventDefault()
       handleError()

       if(userInfo.name && userInfo.email.match(pattern) && Number(userInfo.number)){
        setComplete({...complete, one:true})
       }



    }


    function handleError(){
      if(!userInfo.name){
        setNameError(true)
      } else{
        setNameError(false)
      }

      if(!userInfo.email.match(pattern)){
        setEmailError(true)
      } else{
        setEmailError(false)
      }

      
      /*if(!userInfo.phone){
        setNumberError(true)
      } else{
        setNumberError(false)
      }*/

      if(!Number(userInfo.number)){
        setNumberError(true)
      } else{
        setNumberError(false)
      }
    }
  return (
    <>
    <div className='container'>
        <div className="menu">
            <ul>
                <li>
                    <p className="num1">
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
        <div className="mobilemenu">
                    <p className="num1">
                        1
                    </p>
                    <p className="num">
                        2
                    </p>
                    <p className="num">
                        3
                    </p>
                    <p className="num">
                        4
                    </p>
        </div>
        <div className="deets">
            <div className="top">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className="bottom">
                <form>
                  <div className="texts">
                  <label>
                        <div className="labelPlusError">
                        <span>Name</span>
                        {nameError && <span className='errorMessage'>This field is required</span>}
                        </div>
                        <input value={userInfo.name} className={nameError && 'texterror'} type="text" placeholder='e.g. Stephen King' onChange={e=>{setUserInfo({...userInfo, name:e.target.value})}}/>
                    </label>
                    <label>
                    <div className="labelPlusError">
                        <span>Email Address</span>
                        {emailError && <span className='errorMessage'>This field is required</span>}
                        </div>
                        <input value={userInfo.email}  className={emailError && 'texterror'} type="text" placeholder='e.g. stephenking@lorem.com' onChange={e=>{setUserInfo({...userInfo, email:e.target.value})}}/>
                    </label>
                    <label>
                    <div className="labelPlusError">
                        <span>Phone Number</span>
                        {numberError && <span className='errorMessage'>This field is required</span>}
                        </div>
                        <input value={userInfo.number}  className={numberError && 'texterror'} type="text" placeholder='e.g. +1 234 567 890' onChange={e=>{
                            if(Number(e.target.value)){
                                setUserInfo({...userInfo, number:Number(e.target.value)})
                                setNumberError(false)
                                console.log(userInfo.number)
                            } else{
                                setUserInfo({...userInfo, number:e.target.value})
                                setNumberError(true)
                            }
                        }}/>
                    </label>
                  </div>
                    <button onClick={handleSubmit}>Next Step</button>
                </form>
            </div>
        </div>

        <div className="mobileInfo">
            <div className="top">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className="bottom">
                <form>
                  <div className="texts">
                  <label>
                        <div className="labelPlusError">
                        <span>Name</span>
                        {nameError && <span className='errorMessage'>This field is required</span>}
                        </div>
                        <input value={userInfo.name} className={nameError && 'texterror'} type="text" placeholder='e.g. Stephen King' onChange={e=>{setUserInfo({...userInfo, name:e.target.value})}}/>
                    </label>
                    <label>
                    <div className="labelPlusError">
                        <span>Email Address</span>
                        {emailError && <span className='errorMessage'>This field is required</span>}
                        </div>
                        <input value={userInfo.email}  className={emailError && 'texterror'} type="text" placeholder='e.g. stephenking@lorem.com' onChange={e=>{setUserInfo({...userInfo, email:e.target.value})}}/>
                    </label>
                    <label>
                    <div className="labelPlusError">
                        <span>Phone Number</span>
                        {numberError && <span className='errorMessage'>This field is required</span>}
                        </div>
                        <input value={userInfo.number}  className={numberError && 'texterror'} type="text" placeholder='e.g. +1 234 567 890' onChange={e=>{
                            if(Number(e.target.value)){
                                setUserInfo({...userInfo, number:Number(e.target.value)})
                                setNumberError(false)
                            } else{
                                setUserInfo({...userInfo, number:e.target.value})
                                setNumberError(true)
                            }
                        }}/>
                    </label>
                  </div>
                    <button onClick={handleSubmit}>Next Step</button>
                </form>
            </div>
        </div>
</div>

       
    <footer>
    <button style={{background:'none'}}></button>
    <button onClick={handleSubmit}>Next Step</button>
    </footer>
    </>
  )
}

export default Info