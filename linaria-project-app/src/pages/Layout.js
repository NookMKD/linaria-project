import axios from "axios";
import { css } from '@linaria/core';
import { Children, useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import { Outlet, Link, Routes, Route,  } from "react-router-dom";




const Employeecontainer = styled.div`
  width: 100%;
  font-size: 10px;
  font-weight: bold;
  display: inline-block;
  background: #fedc97
  `;

  function Details () {
     return       
  }

const Layout = () => {
  return (
    <>
    <Employeecontainer></Employeecontainer>
      <nav>
        <ul>

            <Link to="/">Home</Link>

            {/* <Link to="Details/:id">Details</Link> */}

        </ul>
      </nav>
        <Routes>
             < Route path="Details/:id" element={<Details />} />
        </Routes>

      <Outlet />
    </>
  )
};

export default Layout;