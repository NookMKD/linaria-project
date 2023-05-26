// import './App.css';
import axios from "axios";
import { css } from '@linaria/core';
import { useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import {
    useParams,
  } from "react-router-dom";
  


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
  margin: auto;
  width: 100%;
  height: 1000px;
  font-size: 10px;
  font-weight: bold;
  display: inline-block;
  background: #fedc97
  `;

const Employee = styled.div`
  color: black;
  min-height: 900px;
  height: 90%;
  width: 95%;
  margin: auto;
  border: solid black 2px
  padding: 15px;
  background: white;
`

const Username = styled.div`

font-size 25px

  `;

const Topbar = styled.div`
height: 100px;
width: 100%;
display: flex;
background: #033f63
`

const Logo = styled.p`
z-index: 0
margin-top: 10px
margin-left: 15px
color: white
font-size: 50px;
`

const Title = styled.div`
position: relative;
color: White
margin: auto
left: -50px
font-weight: bold
font-size: 35px
`

const Imgbox = styled.div`
margin: auto;
width: 230px;
height: 230px;
margin-bottom: 200px;
&: hover {
  margin: auto;
  margin-bottom: 200px;
}
`;

const employeeImg = css`
margin: 0;
width: 230px;
&: hover {
  width: 300px;
  margin-left: -20px
  z-index: 1;
}
`;


function App() {
  const [userData,setUserData]=useState([])

  function fetchData () {
      axios.get("http://localhost:3000/employees").then(response=>{setUserData(response.data)}).catch(function (error) { 
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log('Error', error.message);

      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('Error', error.message);

        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
      console.log('Error', error.message);

       });
  }

   useEffect(() => {
     fetchData();
   },
  []);

  const {id} = useParams();

  const user = userData.filter(userData => userData.id == id);

   console.log(user);
  return (    
    <div className='App'>      
        <Topbar><Logo>N∞K</Logo><Title>Details</Title></Topbar>
          <Employeecontainer background="">
            <Header>
            <Employee>
            {
            user.map(user => (

              <div key={`${id}`}>
              <Imgbox><img className={employeeImg} src={user.img}></img></Imgbox>
              
              <Username>{user.first_name} {user.last_name}</Username>
              <p>{user.email}</p>
              <p>{user.bio}</p>    

              <p>{user.id}</p>
            </div>
            ))}
            </Employee>
     </Header>    
          </Employeecontainer>       
    </div>
  );    
}

export default App;