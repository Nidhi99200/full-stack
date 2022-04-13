import logo from './logo.svg';
import './App.css';
import AS from './k.jpg'
import { useEffect, useState } from 'react'
function App() {
          const [userInput, setUserInput]=useState(
            {
              name:"",
              usn:"",
              gender:"",
              phoneno:"",
              college:""
            }            
          );
          const handleNameChange=(event)=>{
            const obj={
              ...userInput,
              name:event.target.value
            }
            setUserInput(obj)
          }
          const clickme
         /* const handleUSNChange=(event)=>{
            const obj={
              name:userInput.name,
              usn:event.target.value,
              gender:userInput.gender,
              phoneno:userInput.gender,
              college:userInput.college
            }
          }
          const handleGenderChange=(event)=>{
            const obj={
              name:u,
              usn:userInput.usn,
              gender:userInput.gender,
              phoneno:userInput.gender,
              college:userInput.college
            }
          }
          const handlePhoneNoChange=(event)=>{
            const obj={
              name:userInput.name,
              usn:event.target.value,
              gender:userInput.gender,
              phoneno:userInput.gender,
              college:userInput.college
            }
          }
          const handleCollegeChange=(event)=>{
            const obj={
              name:userInput.name,
              usn:event.target.value,
              gender:userInput.gender,
              phoneno:userInput.gender,
              college:userInput.college
            }
          }*/

          return (
            <div className="App">
            <input placeholder='name' onChange={handleNameChange} value={userInput.name}></input>
            <button onClick={clickme}></button>
            </div>); 
    
}

export default App;
