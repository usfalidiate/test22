import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';


export default function index() {
   
    const setAllAvailMeeks =()=>{
      if (confirm('Meeks, are you SURE that you want to set all dates as AVAILABLE?') == true) {
        setUsers1(prev=>{return {...prev, meeks1: true};}) 
        setUsers2(prev=>{return {...prev, meeks2: true};}) 
        setUsers3(prev=>{return {...prev, meeks3: true};}) 
        setUsers4(prev=>{return {...prev, meeks4: true};}) 
        setUsers5(prev=>{return {...prev, meeks5: true};}) 
        setUsers6(prev=>{return {...prev, meeks6: true};}) 
        setUsers7(prev=>{return {...prev, meeks7: true};}) 

      }
      else {}
      }

    const setAllAvailTheuns =()=>{
      if (confirm('Theuns, are you SURE that you want to set all dates as AVAILABLE?') == true) {
        setUsers1(prev=>{return {...prev, theuns1: true};}) 
        setUsers2(prev=>{return {...prev, theuns2: true};}) 
        setUsers3(prev=>{return {...prev, theuns3: true};}) 
        setUsers4(prev=>{return {...prev, theuns4: true};}) 
        setUsers5(prev=>{return {...prev, theuns5: true};}) 
        setUsers6(prev=>{return {...prev, theuns6: true};}) 
        setUsers7(prev=>{return {...prev, theuns7: true};})
        }
        else {}
        }  
      
    const setAllAvailNathan =()=>{
      if (confirm('Nathan, are you SURE that you want to set all dates as AVAILABLE?') == true) {
        setUsers1(prev=>{return {...prev, nathan1: true};}) 
        setUsers2(prev=>{return {...prev, nathan2: true};}) 
        setUsers3(prev=>{return {...prev, nathan3: true};}) 
        setUsers4(prev=>{return {...prev, nathan4: true};}) 
        setUsers5(prev=>{return {...prev, nathan5: true};}) 
        setUsers6(prev=>{return {...prev, nathan6: true};}) 
        setUsers7(prev=>{return {...prev, nathan7: true};})
        }
        else {}
        } 

    const setAllAvailTroy =()=>{
      if (confirm('Troy, are you SURE that you want to set all dates as AVAILABLE?') == true) {
        setUsers1(prev=>{return {...prev, troy1: true};}) 
        setUsers2(prev=>{return {...prev, troy2: true};}) 
        setUsers3(prev=>{return {...prev, troy3: true};}) 
        setUsers4(prev=>{return {...prev, troy4: true};}) 
        setUsers5(prev=>{return {...prev, troy5: true};}) 
        setUsers6(prev=>{return {...prev, troy6: true};}) 
        setUsers7(prev=>{return {...prev, troy7: true};})
        }
        else {}
        } 

    const setAllUnavailMeeks =()=>{
      if (confirm('Meeks, are you SURE that you want to set all dates as UNAVAILABLE?') == true) {
        setUsers1(prev=>{return {...prev, meeks1: false};}) 
        setUsers2(prev=>{return {...prev, meeks2: false};}) 
        setUsers3(prev=>{return {...prev, meeks3: false};}) 
        setUsers4(prev=>{return {...prev, meeks4: false};}) 
        setUsers5(prev=>{return {...prev, meeks5: false};}) 
        setUsers6(prev=>{return {...prev, meeks6: false};}) 
        setUsers7(prev=>{return {...prev, meeks7: false};}) 

        }
        else {}
        }
  
      const setAllUnavailTheuns =()=>{
        if (confirm('Theuns, are you SURE that you want to set all dates as UNAVAILABLE?') == true) {
          setUsers1(prev=>{return {...prev, theuns1: false};}) 
          setUsers2(prev=>{return {...prev, theuns2: false};}) 
          setUsers3(prev=>{return {...prev, theuns3: false};}) 
          setUsers4(prev=>{return {...prev, theuns4: false};}) 
          setUsers5(prev=>{return {...prev, theuns5: false};}) 
          setUsers6(prev=>{return {...prev, theuns6: false};}) 
          setUsers7(prev=>{return {...prev, theuns7: false};}) 
          }
          else {}
          }  
        
      const setAllUnavailNathan =()=>{
        if (confirm('Nathan, are you SURE that you want to set all dates as UNAVAILABLE?') == true) {
          setUsers1(prev=>{return {...prev, nathan1: false};}) 
          setUsers2(prev=>{return {...prev, nathan2: false};}) 
          setUsers3(prev=>{return {...prev, nathan3: false};}) 
          setUsers4(prev=>{return {...prev, nathan4: false};}) 
          setUsers5(prev=>{return {...prev, nathan5: false};}) 
          setUsers6(prev=>{return {...prev, nathan6: false};}) 
          setUsers7(prev=>{return {...prev, nathan7: false};}) 
          }
          else {}
          } 
  
      const setAllUnavailTroy =()=>{
        if (confirm('Troy, are you SURE that you want to set all dates as UNAVAILABLE?') == true) {
          setUsers1(prev=>{return {...prev, troy1: false};}) 
          setUsers2(prev=>{return {...prev, troy2: false};}) 
          setUsers3(prev=>{return {...prev, troy3: false};}) 
          setUsers4(prev=>{return {...prev, troy4: false};}) 
          setUsers5(prev=>{return {...prev, troy5: false};}) 
          setUsers6(prev=>{return {...prev, troy6: false};}) 
          setUsers7(prev=>{return {...prev, troy7: false};}) 
          }
          else {}
          } 
  
const [users1, setUsers1] = useState({meeks1:true,theuns1:false,nathan1:false,troy1:true})
const [users2, setUsers2] = useState({meeks2:true,theuns2:false,nathan2:false,troy2:true})
const [users3, setUsers3] = useState({meeks3:true,theuns3:false,nathan3:false,troy3:true})
const [users4, setUsers4] = useState({meeks4:true,theuns4:false,nathan4:false,troy4:true})
const [users5, setUsers5] = useState({meeks5:true,theuns5:false,nathan5:false,troy5:true})
const [users6, setUsers6] = useState({meeks6:true,theuns6:false,nathan6:false,troy6:true})
const [users7, setUsers7] = useState({meeks7:true,theuns7:false,nathan7:false,troy7:true})

const [unlock, setUnlock] = useState({meeksUnlock: true, theunsUnlock: true, nathanUnlock:true, troyUnlock:true})

const allAvailable =()=>{
  
}
   
      console.log(allAvailable)


  return (
    
    <div>
    {/* <h1>Jam Availabilities</h1> */}
    <table className='tableNude'>
    <tbody>
    <tr>
      <th className='thNude'></th>
      <th className='thNude'></th>
      <th className ='thNude'><button onClick={()=>setUnlock(prev=>{return {...prev, meeksUnlock: !unlock.meeksUnlock};})} className={ unlock.meeksUnlock ? 'myButtonUnlocked' : 'myButtonLocked' }> { unlock.meeksUnlock ? 'Locked' : 'Unlocked'} </button></th>
      <th className ='thNude'><button onClick={()=>setUnlock(prev=>{return {...prev, theunsUnlock: !unlock.theunsUnlock}})} className={ unlock.theunsUnlock ? 'myButtonUnlocked' : 'myButtonLocked' }> { unlock.theunsUnlock ? 'Locked' : 'Unlocked'} </button></th>
      <th className ='thNude'><button onClick={()=>setUnlock(prev=>{return {...prev, nathanUnlock: !unlock.nathanUnlock}})} className={ unlock.nathanUnlock ? 'myButtonUnlocked' : 'myButtonLocked' }> { unlock.nathanUnlock ? 'Locked' : 'Unlocked'} </button></th>
      <th className ='thNude'><button onClick={()=>setUnlock(prev=>{return {...prev, troyUnlock: !unlock.troyUnlock}})} className={ unlock.troyUnlock ? 'myButtonUnlocked' : 'myButtonLocked' }> { unlock.troyUnlock ? 'Locked' : 'Unlocked'} </button></th>
    </tr> 
    <tr>
      <th className='thNude'></th>
      <th className='thNude'></th>
      <th className='thNude'><button disabled={unlock.meeksUnlock} className='myButtonSetAllAvail' onClick={setAllAvailMeeks}>Set All Avail<br></br> Meeks</button></th>
      <th className='thNude'><button disabled={unlock.theunsUnlock} className='myButtonSetAllAvail' onClick={setAllAvailTheuns}>Set All Avail <br></br> Theuns</button></th>
      <th className='thNude'><button disabled={unlock.nathanUnlock} className='myButtonSetAllAvail' onClick={setAllAvailNathan}>Set All Avail <br></br> Nathan</button></th>
      <th className='thNude'><button disabled={unlock.troyUnlock} className='myButtonSetAllAvail' onClick={setAllAvailTroy}>Set All Avail <br></br>Troy</button></th> 
    </tr>
    <tr>
      <th className='thNude'></th>
      <th className='thNude'></th>
      <th className='thNude'><button disabled={unlock.meeksUnlock} className='myButtonSetAllUnavail' onClick={setAllUnavailMeeks}>Set All Unavail <br></br> Meeks</button></th>
      <th className='thNude'><button disabled={unlock.theunsUnlock} className='myButtonSetAllUnavail' onClick={setAllUnavailTheuns}>Set All Unavail<br></br> Theuns</button></th>
      <th className='thNude'><button disabled={unlock.nathanUnlock} className='myButtonSetAllUnavail' onClick={setAllUnavailNathan}>Set All Unavail <br></br> Nathan</button></th>
      <th className='thNude'><button disabled={unlock.troyUnlock} className='myButtonSetAllUnavail' onClick={setAllUnavailTroy}>Set All Unavail <br></br>Troy</button></th> 
    </tr>
    </tbody>
    </table>
    <div></div>
    <table className='tableDefault'>
    <tbody>
    <tr>
      <th scope="topRow">Date</th>
      <th scope="topRow">Day</th>
      <th scope="topRow">Meeks</th>
      <th scope="topRow">Theuns</th>
      <th scope="topRow">Nathan</th>
      <th scope="topRow">Troy</th>
    </tr>
    <tr>
      <th scope="colDate">Nov 28</th>
      <th scope="rowDay">Monday</th>
      <td><button disabled={unlock.meeksUnlock} onClick={()=>setUsers1(prev=>{return {...prev, meeks1: !users1.meeks1}})} className={ users1.meeks1 ? 'avail' : 'unavail'}> { users1.meeks1 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.theunsUnlock} onClick={()=>setUsers1(prev=>{return {...prev, theuns1: !users1.theuns1}})} className={ users1.theuns1 ? 'avail' : 'unavail'}> { users1.theuns1 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.nathanUnlock} onClick={()=>setUsers1(prev=>{return {...prev, nathan1: !users1.nathan1}})} className={ users1.nathan1 ? 'avail' : 'unavail'}> { users1.nathan1 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.troyUnlock} onClick={()=>setUsers1(prev=>{return {...prev, troy1: !users1.troy1}})} className={ users1.troy1 ? 'avail' : 'unavail'}> { users1.troy1 ? 'Available' : 'Unavailable' }</button></td>
    </tr>
    <tr>
      <th scope="colDate">Nov 29</th>
      <th scope="rowDay">Tuesday</th>
      <td><button disabled={unlock.meeksUnlock} onClick={()=>setUsers2(prev=>{return {...prev, meeks2: !users2.meeks2}})} className={ users2.meeks2 ? 'avail' : 'unavail'}> { users2.meeks2 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.theunsUnlock} onClick={()=>setUsers2(prev=>{return {...prev, theuns2: !users2.theuns2}})} className={ users2.theuns2 ? 'avail' : 'unavail'}> { users2.theuns2 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.nathanUnlock} onClick={()=>setUsers2(prev=>{return {...prev, nathan2: !users2.nathan2}})} className={ users2.nathan2 ? 'avail' : 'unavail'}> { users2.nathan2 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.troyUnlock} onClick={()=>setUsers2(prev=>{return {...prev, troy2: !users2.troy2}})} className={ users2.troy2 ? 'avail' : 'unavail'}> { users2.troy2 ? 'Available' : 'Unavailable' }</button></td>
    </tr>
    <tr>
      <th scope="colDate">Nov 30</th>
      <th scope="rowDay">Wednesday</th>
      <td><button disabled={unlock.meeksUnlock} onClick={()=>setUsers3(prev=>{return {...prev, meeks3: !users3.meeks3}})} className={ users3.meeks3 ? 'avail' : 'unavail'}> { users3.meeks3 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.theunsUnlock} onClick={()=>setUsers3(prev=>{return {...prev, theuns3: !users3.theuns3}})} className={ users3.theuns3 ? 'avail' : 'unavail'}> { users3.theuns3 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.nathanUnlock} onClick={()=>setUsers3(prev=>{return {...prev, nathan3: !users3.nathan3}})} className={ users3.nathan3 ? 'avail' : 'unavail'}> { users3.nathan3 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.troyUnlock} onClick={()=>setUsers3(prev=>{return {...prev, troy3: !users3.troy3}})} className={ users3.troy3 ? 'avail' : 'unavail'}> { users3.troy3 ? 'Available' : 'Unavailable' }</button></td>
    </tr>
    <tr>
      <th scope="colDate">Dec 1</th>
      <th scope="rowDay">Thursday</th>
      <td><button disabled={unlock.meeksUnlock} onClick={()=>setUsers4(prev=>{return {...prev, meeks4: !users4.meeks4}})} className={ users4.meeks4 ? 'avail' : 'unavail'}> { users4.meeks4 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.theunsUnlock} onClick={()=>setUsers4(prev=>{return {...prev, theuns4: !users4.theuns4}})} className={ users4.theuns4 ? 'avail' : 'unavail'}> { users4.theuns4 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.nathanUnlock} onClick={()=>setUsers4(prev=>{return {...prev, nathan4: !users4.nathan4}})} className={ users4.nathan4 ? 'avail' : 'unavail'}> { users4.nathan4 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.troyUnlock} onClick={()=>setUsers4(prev=>{return {...prev, troy4: !users4.troy4}})} className={ users4.troy4 ? 'avail' : 'unavail'}> { users4.troy4 ? 'Available' : 'Unavailable' }</button></td>
    </tr>
    <tr>
      <th scope="colDate">Dec 2</th>
      <th scope="rowDay">Friday</th>
      <td><button disabled={unlock.meeksUnlock} onClick={()=>setUsers5(prev=>{return {...prev, meeks5: !users5.meeks5}})} className={ users5.meeks5 ? 'avail' : 'unavail'}> { users5.meeks5 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.theunsUnlock} onClick={()=>setUsers5(prev=>{return {...prev, theuns5: !users5.theuns5}})} className={ users5.theuns5 ? 'avail' : 'unavail'}> { users5.theuns5 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.nathanUnlock} onClick={()=>setUsers5(prev=>{return {...prev, nathan5: !users5.nathan5}})} className={ users5.nathan5 ? 'avail' : 'unavail'}> { users5.nathan5 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.troyUnlock} onClick={()=>setUsers5(prev=>{return {...prev, troy5: !users5.troy5}})} className={ users5.troy5 ? 'avail' : 'unavail'}> { users5.troy5 ? 'Available' : 'Unavailable' }</button></td>
    </tr>
    <tr>
      <th scope="colDate">Dec 3</th>
      <th scope="rowDay">Saturday</th>
      <td><button disabled={unlock.meeksUnlock} onClick={()=>setUsers6(prev=>{return {...prev, meeks6: !users6.meeks6}})} className={ users6.meeks6 ? 'avail' : 'unavail'}> { users6.meeks6 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.theunsUnlock} onClick={()=>setUsers6(prev=>{return {...prev, theuns6: !users6.theuns6}})} className={ users6.theuns6 ? 'avail' : 'unavail'}> { users6.theuns6 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.nathanUnlock} onClick={()=>setUsers6(prev=>{return {...prev, nathan6: !users6.nathan6}})} className={ users6.nathan6 ? 'avail' : 'unavail'}> { users6.nathan6 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.troyUnlock} onClick={()=>setUsers6(prev=>{return {...prev, troy6: !users6.troy6}})} className={ users6.troy6 ? 'avail' : 'unavail'}> { users6.troy6 ? 'Available' : 'Unavailable' }</button></td>
    </tr>
    <tr>
      <th scope="colDate">Dec 4</th>
      <th scope="rowDay">Sunday</th>
      <td><button disabled={unlock.meeksUnlock} onClick={()=>setUsers7(prev=>{return {...prev, meeks7: !users7.meeks7}})} className={ users7.meeks7 ? 'avail' : 'unavail'}> { users7.meeks7 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.theunsUnlock} onClick={()=>setUsers7(prev=>{return {...prev, theuns7: !users7.theuns7}})} className={ users7.theuns7 ? 'avail' : 'unavail'}> { users7.theuns7 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.nathanUnlock} onClick={()=>setUsers7(prev=>{return {...prev, nathan7: !users7.nathan7}})} className={ users7.nathan7 ? 'avail' : 'unavail'}> { users7.nathan7 ? 'Available' : 'Unavailable' }</button></td>
      <td><button disabled={unlock.troyUnlock} onClick={()=>setUsers7(prev=>{return {...prev, troy7: !users7.troy7}})} className={ users7.troy7 ? 'avail' : 'unavail'}> { users7.troy7 ? 'Available' : 'Unavailable' }</button></td>
    </tr>
    </tbody>
    </table>
 
    {/* <h1>Available Dates</h1>
  
    <h2> hi </h2>*/}
    </div>
      )     
      console.log('luigi anus');
} 