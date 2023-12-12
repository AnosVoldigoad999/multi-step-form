import React from 'react'

function Addons({setComplete, complete, userAddons, setUserAddons, plan, total, setTotal}) {

    function handleAddons(Index, price){
        setUserAddons(userAddons.map((addon, index)=>{
            if(index===Index){
                const chosen = addon.chosen
                !chosen? setTotal(total+price): setTotal(total-price)
                return{...addon, chosen:!chosen, price:price}
            }else{
                return addon
            }
        }))
        console.log(total)
    }
    /*function handleSummary(){
        console.log(userAddons)
    }*/
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
                    <p className="num3">
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
                <p className="num">
                    2
                </p>
                <div className="what">
                    <p className='step'>STEP 2</p>
                    <p>SELECT PLAN</p>
                </div>
            </li>
            <li>
                <p className="num3">
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
    <div className="deets">
        <div className="top">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="bottom">
            <div className='addons' >
              
                <div className={userAddons[0].chosen ? 'chosenAddon':"addon"} onClick={()=>{handleAddons(0, plan==='Yearly'?10:1)}} >
                    <input type="checkbox" checked={userAddons[0].chosen} />
                    <div className="addondes">
                        <p className='addonName'>Online service</p>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p>{plan==='Yearly'?"+$10/yr":"+$1/mo"}</p>
                </div>
                <div className={userAddons[1].chosen ? 'chosenAddon':"addon"} onClick={()=>{handleAddons(1, plan==='Yearly'?20:2)}}>
                    <input type="checkbox" checked={userAddons[1].chosen}/>
                    <div className="addondes">
                        <p className='addonName'>Larger storage</p>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <p>{plan==='Yearly'?"+$20/yr":"+$2/mo"}</p>
                </div>
                <div className={userAddons[2].chosen ? 'chosenAddon':"addon"} onClick={()=>{handleAddons(2, plan==='Yearly'?20:2)}}>
                    <input type="checkbox" checked={userAddons[2].chosen}/>
                    <div className="addondes">
                        <p className='addonName'>Customizable profile</p>
                        <p>Custom theme on profile</p>
                    </div>
                    <p>{plan==='Yearly'?"+$20/yr":"+$2/mo"}</p>
                </div>
            </div>
        </div>
        <div className="buttons">
        <button className='back' onClick={()=>{setComplete({...complete, two:false})}}>Go Back</button>
           <button className='next' onClick={()=>{setComplete({...complete, three:true})}}>Next Step</button>
           </div>
    </div>
    <div className="mobileAddons">
    <div className="top">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="bottom">
            <div className='addons' >
              
                <div className={userAddons[0].chosen ? 'chosenAddon':"addon"} onClick={()=>{handleAddons(0, plan==='Yearly'?10:1)}} >
                    <input type="checkbox" checked={userAddons[0].chosen} />
                    <div className="addondes">
                        <p className='addonName'>Online service</p>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p>{plan==='Yearly'?"+$10/yr":"+$1/mo"}</p>
                </div>
                <div className={userAddons[1].chosen ? 'chosenAddon':"addon"} onClick={()=>{handleAddons(1, plan==='Yearly'?20:2)}}>
                    <input type="checkbox" checked={userAddons[1].chosen}/>
                    <div className="addondes">
                        <p className='addonName'>Larger storage</p>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <p>{plan==='Yearly'?"+$20/yr":"+$2/mo"}</p>
                </div>
                <div className={userAddons[2].chosen ? 'chosenAddon':"addon"} onClick={()=>{handleAddons(2, plan==='Yearly'?20:2)}}>
                    <input type="checkbox" checked={userAddons[2].chosen}/>
                    <div className="addondes">
                        <p className='addonName'>Customizable profile</p>
                        <p>Custom theme on profile</p>
                    </div>
                    <p>{plan==='Yearly'?"+$20/yr":"+$2/mo"}</p>
                </div>
            </div>
        </div>
        <div className="buttons">
        <button className='back' onClick={()=>{setComplete({...complete, two:false})}}>Go Back</button>
           <button className='next' onClick={()=>{setComplete({...complete, three:true})}}>Next Step</button>
           </div>
    </div>
</div>
<footer>
        <button className='back' onClick={()=>{setComplete({...complete, two:false})}}>Go Back</button>
           <button className='next' onClick={()=>{setComplete({...complete, three:true})}}>Next Step</button>
</footer>
</>
  )
}

export default Addons