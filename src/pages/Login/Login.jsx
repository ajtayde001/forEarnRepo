import React, { useState } from 'react'
import Logo from "../../Images/06c1820c-d74a-4dff-a052-88d14580f029 3.png"

import Showpass from "../../Images/icons8-show-password-30.png"
import Hidepass from "../../Images/icons8-hide-password-30.png"
function Login() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <section class="bg-navBg">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <div className='w-full  text-center flex justify-center mb-4 '>
      <img class="h-full w-96" src={Logo} alt="logo"/>
      </div>
         

      <div class="w-full dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form class="space-y-4 md:space-y-6" action="#">
              <div class="relative z-0">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_standard" class="absolute  text-sm text-black font-semibold dark:text-gray-400 duration-300 transform -translate-y-6 scale-175 top-3 left-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
</div>
<div className="relative z-0">
      <input
        type={showPassword ? 'text' : 'password'}
        id="floating_standard"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label
        htmlFor="floating_standard"
        className="absolute font-semibold text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        Password
      </label>
      <button
        type="button"
        className="absolute top-3 right-3"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
       
          <img  className="h-5 w-5 text-gray-500 dark:text-gray-400" src={Showpass} alt="" />
        ) : (
        
          <img  className="h-5 w-5 text-gray-500 dark:text-gray-400" src={Hidepass} alt="" />
        )}
      </button>
    </div>
                  <div class="flex items-center justify-between">
                      
                  </div>
                  <button type="submit" class="w-full text-white bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login
