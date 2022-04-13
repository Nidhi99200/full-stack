import logo from './logo.svg';
import './App.css';
import AS from './k.jpg'
import { useEffect, useState } from 'react'
function App() {
          const [userInput, setUserInput]=useState(
            {
              english:0,
              hindi:0
            }            
          );
          const [userInput1, setUserInput1]=useState(
            {
              english:0,
              hindi:0
            }            
          );
          //const [showVal, setShowVal] = useState(false);
        

          const handleNameChange1=(event)=>{
            const obj1={
              ...userInput,
              english:event.target.value
            }
            setUserInput(obj1)
          }
          const handleNameChange2=(event)=>{
            const obj1={
              ...userInput,
              hindi:event.target.value
            }
            setUserInput(obj1)
          }
          const handleNameChange3=(event)=>{
            const obj2={
              ...userInput1,
              english:event.target.value
            }
            setUserInput1(obj2)
          }
          const handleNameChange4=(event)=>{
            const obj2={
              ...userInput1,
              hindi:event.target.value
            }
            setUserInput1(obj2)
          }
         
          const comp=()=>{
            if(userInput.english>userInput1.english){
                alert("Student 1 Scored more in english")
            }
            else{
              alert("Student 2 Scored more in english")
            }
            if(userInput.hindi>userInput1.hindi){
              alert("Student 1 Scored more in hindi")
          }
          else{
            alert("Student 2 Scored more in hindi")
          }
          }

          return (
            <div className="App">
            <form>
              Student 1 English:
              <input placeholder='st1english' onChange={handleNameChange1} value={userInput.english}></input><br></br>
              Student 1 Hindi:
              <input placeholder='st1hindi' onChange={handleNameChange2} value={userInput.hindi}></input><br></br>
              Student 2 English:
              <input placeholder='st2english' onChange={handleNameChange3} value={userInput1.english}></input><br></br>
              Student 2 Hindi:
              <input placeholder='st2hindi' onChange={handleNameChange4} value={userInput1.hindi}></input><br></br>
              <button onClick={comp}>Compare</button>
              
            </form>
            
            </div>); 
    
}

export default App;
