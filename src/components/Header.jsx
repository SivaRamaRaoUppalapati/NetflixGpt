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
import { LOGO_HEADER, LOGO_NETFLIX, SUPPORED_LANGUAGES } from '../utils/constant';
import {toggleGptSearchView} from '../utils/gptSlice'
import {changeLanguage} from '../utils/configSlice'

const Header = () => {
  const navigate =useNavigate();
  const user = useSelector((store)=>store.user);
 // console.log(user);
  const dispatch =useDispatch();
  //console.log(user?.uid);
  const showGptSearh =useSelector(store=>store.gpt.showGptSearch)

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

  const handleGptSearchClick =()=>{
    dispatch(toggleGptSearchView())
  }
  const handeleLanguageChange =(e)=>{
    //console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src={LOGO_HEADER} 
        alt="header-logo" className="w-44 h-26 "/>
        {user &&
        (<div className='flex p-2  justify-between' onChange={handeleLanguageChange}>
         {showGptSearh &&
          <select className='bg-red-900 text-white w-35 h-10 mt-4'>
          {
            SUPPORED_LANGUAGES.map(lang=><option  key ={lang.identifier} value={lang.identifier}>{lang.name}</option>)
          }
         
        </select>

         }
          <button className='py-1 px-4 my-2 text-white rounded-lg cursor-pointer'
          onClick={handleGptSearchClick}
          >{showGptSearh ? "HomePage" : "GptSearch"}</button>
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