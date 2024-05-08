import axios from 'axios';
import './App.css';
import { useState } from "react";
import React, { useEffect } from "react";
import reportWebVitals from './reportWebVitals';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  const [inputValue, setInputValue] = useState('s');

  const handleInputChange = (event) => {
    console.log(inputValue);

    setInputValue(event.target.value);

  };

  const fetchUniversities = (event) => {
    console.log(inputValue);

    //setInputValue(event.target.value);

  };
//  function fetchUniversities () {
//     //console.log(this.state.inputValue);
  
//      // CustomReactQuery(inputValue)
    
//   };

  let onInputChange = (event, value) => {
    console.log('event: ', event);
    // event is the onCLickEvent, value is '0'
  }

const [universities,error,loading]= CustomReactQuery(inputValue);

 if(loading){
  return <h1>Loading...</h1>
   }
   if(error){
     return <h1>Error</h1>
      }

  return (

<div className="row mt-4">
          <div className="col-sm-4">
            <h4 className="mb-2">
              <u>GET: List Of universities By Country</u>
            </h4>
            <input
              type="text"
              placeholder="Enter Country"
              className="form-control mt-3"
              id="country"
              style={{ width: "300px" }}
              value={inputValue} 
              onChange={handleInputChange} 
            />
            <button
              onClick={() => this.fetchUniversities(this)}
             
            >
              Fetch
            </button>

            <a>
         Number Of Universities : {universities.length}
        </a>

          </div>

        
          </div>
  


   
  );
}

export default App

const CustomReactQuery=(country)=>{
  const [universities, setUniversities] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
 
  
  React.useEffect(() => { 
 
    ;(async()=>{


     try {
       setError(false);
        const response= await axios.get('http://universities.hipolabs.com/search?country=');
         setLoading(true);
         //console.log(response.data);
         setUniversities(response.data);
         setLoading(false);
     
     } catch (error) {
      console.log(error)
      setError(true);
     }

    })()

 
 }, []);

    return [universities,error,loading];
}
