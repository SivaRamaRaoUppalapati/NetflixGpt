
import Header from "./Header"
import { useState } from "react"

const Login =()=>{

    const[isSigninform ,setSignInform] = useState(true);

    const toggleSignInForm=()=>{
        setSignInform(!isSigninform);
    }

    return(
        <div >
            <Header/> 
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg" 
                alt='backgroundimage'  />    
            </div>
                <form className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 p-12 bg-black/80 text-white bg-opacity-80 rounded-lg shadow-lg">
                    <h1 className="font-blod text-3xl p-2 m-2">{isSigninform? "Sign In" :"Sign Up"}</h1>
                    {!isSigninform &&
                    <input type="text" placeholder="Name" className="p-4 m-2 w-full" />
                    }
                    <input type="text" placeholder="Email or Mobile Number" className="p-4 m-2 w-full" />
                    <input type="password" placeholder="Enter your Password" className="p-4 m-2 w-full"/>
                    {!isSigninform &&
                    <input type="password" placeholder="Confirm your Password" className="p-4 m-2 w-full" />
                    }
                    <button className="p-3 m-3 bg-red-700 w-full rounded-lg" >{isSigninform? "Sign In" :"Sign Up"}</button>
                    <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm}>{isSigninform? "New to Netflix?  Sign Up Now" :"Already Registered! Sign In Now"}</p>
                </form>
        </div>
    )  
        
}

export default Login