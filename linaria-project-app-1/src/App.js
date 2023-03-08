import './App.css';
import axios from "axios";
import { css } from '@linaria/core';
import { useEffect, useState } from 'react';
import randomColor from "randomcolor";
import { styled } from '@linaria/react';



 employeeContainer = css`
  width 1920px;
  text-transform: uppercase;
  display flex;
  background-color gray;
  
  `;
  
const employee = css`
  margin: 50px
  border: solid black 2px
  padding: 15px;
  background: ${randomColor()}
`

const employeeImg = css`
  width: 200px;`;

const searchBar = css`
  padding: 6px;
  font-size: 100%;
  border: none;
  float: right;
  flex-shrink: 0;
  font-size: 17px;
  `

function App() {

  const [userData,setUserData]=useState([])
  
  function fetchData () {
      axios.get("http://localhost:3000/employees").then(response=>{setUserData(response.data)});
  }
  
   useEffect(() => {
     fetchData();
   },
  []);

  function change() {
    employeeContainer = css`
    width 1920px;
    text-transform: uppercase;
    display flex;
    background-color black;`
  }

  const users = userData.map((data,id)=>{
    return (
    
    <div className={employee} key={id}>
      <p>{data.first_name} {data.last_name}</p>
      <p>{data.email}</p>
      <img className={employeeImg} src={data.img}></img>
      <button onClick={change()}> Mode</button>
    </div>
    
    
    )

  })


  return (
    <div className="App">      
        <div className={searchBar}></div>
        <input class="input" type="text" placeholder="Search..." name="searchString" ></input>
    <div className={employeeContainer}>
        {users}  
    </div>
  </div>
  );  
}

export default App;
