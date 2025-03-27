import React from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header = () => {
  const navigate =useNavigate();
  const user = useSelector((store)=>store.user);
  console.log(user);

  //console.log(user?.uid);
  

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      console.log(error);
      navigate("/");
    });
  }

  return (
    <div className='absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="header-logo" className="w-44 h-26 "/>
        {user &&
        (<div className='flex p-2  justify-between' >
          <img className='w-12 h-14'
            alt="usericon"
            src="data:image/png;base64,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"
          />
          <button className='p-2 font-bold text-white cursor-pointer text-center' onClick={handleSignOut}>Sign Out</button>
        </div>)
      }
    </div>
  )
}

export default Header