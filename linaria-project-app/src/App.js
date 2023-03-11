import './App.css';
import axios from "axios";
import { css } from '@linaria/core';
import { useEffect, useState } from 'react';
import randomColor from "randomcolor";
import { styled } from '@linaria/react';


/////////////////////////////////////
// Random Color Generator
const colors = {
  light: {
    text: 'black',
  },
  dark: {
    text: 'white',
  },
};

const theming = cb =>
  Object.keys(colors).reduce((acc, name) => Object.assign(acc, {
    [`.theme-${name} &`]: cb(colors[name]),
  }), {});

  const Header = styled.h1`
  text-transform: uppercase;

  ${theming(c => ({
    color: c.text,
  }))};
`;
/////////////////////////////////////

const Employeecontainer = styled.div`
  width: 100%;
  font-size: 10px;
  font-weight: bold;
  display: inline-block;
  background: #fedc97
  `;

const Logo = styled.p`
z-index: 0
margin-top: 10px
margin-left: 15px
color: white
font-size: 50px;
`

const employee = css`
  display: inline-block;
  color: black;
  height 300px;
  width 400px;
  margin: 20px
  border: solid black 2px
  border-radius: 5%;
  padding: 15px;
  background: white;
  &:hover{
    color: white
    border: 2px solid black;
    background: #033f63

  }
`

const Topbar = styled.div`
height: 100px;
width: 100%;
display: flex;
background: #033f63
`
const Title = styled.div`
color: White
margin: auto
font-weight: bold
font-size: 35px
`
const Imgbox = styled.div`
width: 130px;
margin: 0;

`


const employeeImg = css`
margin: 0;
width: 130px;
&: hover {
  max-width: 100%;
  z-index: 1;

}
`;

function App() {
  const [userData,setUserData]=useState([])

  function fetchData () {
      axios.get("http://localhost:3000/employees").then(response=>{setUserData(response.data)});
  }

   useEffect(() => {
     fetchData();
   },
  []);

  const users = userData.map((data,id)=>{
    return (
    
    <div className={employee} key={id}>
      <Imgbox><img className={employeeImg} src={data.img}></img></Imgbox>
      
      <p>{data.first_name} {data.last_name}</p>
      <p>{data.email}</p>
      
    </div>
    )
  })


  return (
    <div className='App'>
      <Topbar><Logo>N∞K</Logo><Title>Meet The Team</Title></Topbar>
      <Employeecontainer background="">
      <Header>{users} </Header>    
    </Employeecontainer> 
    </div>
    // <div className="App">      
    //     <div className={searchBar}></div>
    //     <input type="text" placeholder="Search..." name="searchString" ></input>
    
  // </div>
  );  
}

export default App;