import React from 'react';
import './App.scss';
import { GuestPage } from './components/pages/guestPage';
import { AuthPage } from './components/pages/authPage';
import { useEffect, useState } from 'react';

function App() {

  interface ISigned {
    signed: string | null
  }

  const [signed, setSigned] =useState<ISigned>()

  useEffect(()=>{
      setSigned(JSON.parse(localStorage.getItem('loginToken')|| 'false')) 
  },[])

  return (
    <div className="App">
      {signed ? <AuthPage/> : <GuestPage/>}
    </div>
  );
}

export default App;
