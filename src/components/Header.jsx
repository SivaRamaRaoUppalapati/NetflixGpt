import React from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userslice'
import { useSelector } from 'react-redux';
import  { useEffect } from 'react'
import Login from './Login';
import { LOGO_HEADER, LOGO_NETFLIX } from '../utils/constant';

const Header = () => {
  const navigate =useNavigate();
  const user = useSelector((store)=>store.user);
 // console.log(user);
  const dispatch =useDispatch();
  //console.log(user?.uid);
  

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate("/");
    }).catch((error) => {
      // An error happened.
      console.log(error);
      //navigate("/");
    });
  }

  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log("User detected:", user);
        const {uid,email,displayName,photoURL} = user
        dispatch(addUser({uid : uid ,email :email, displayName:displayName,photoURL:photoURL}))
       navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });

    return ()=> unsubscribe();
  },[dispatch,navigate]);

  return (
    <div className='absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src={LOGO_HEADER} 
        alt="header-logo" className="w-44 h-26 "/>
        {user &&
        (<div className='flex p-2  justify-between' >
          <img className='w-12 h-14'
            alt="usericon"
            src={LOGO_NETFLIX}
          />
          <button className='p-2 font-bold text-white cursor-pointer text-center' onClick={handleSignOut}>Sign Out</button>
        </div>)
      }
    </div>
  )
}

export default Header