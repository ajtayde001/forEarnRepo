import { Avatar } from '@chakra-ui/react'
import React from 'react'
import Avatarcircle from '../../componant/Avatar/Avatar'
import { FaLongArrowAltRight } from "react-icons/fa";
function Taskmain() {
  return (
    <div>
      <div className='flex justify-between'>
    <h1 className='font-semibold text-xl'>
        Task
    </h1>
    <button className=" w-28 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4 mr-20">
                 All Done 
                </button>
</div>
<br />
<div className='flex gap-4 ml-20 mb-2'>
<img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://media.istockphoto.com/id/1491507378/photo/side-view-of-a-young-black-woman-standing-whilst-listening-to-music-on-her-headphones-with.jpg?s=1024x1024&w=is&k=20&c=pqNRsQf_CVRx2jTzdq8FDAeGxDwMep5un9RctzC7Lbs=" alt=""/>
<FaLongArrowAltRight size={28} className=''/>
<Avatarcircle/>
</div>

<div style={{maxHeight:"480px",overflowY:"auto"}} class="w-full p-4 flex flex-col gap-4  bg-white border  rounded-lg shadow sm:p-8 dark:bg-white-800   ">    

<div class="w-full "> 
        <div className='w-full flex justify-between '>
            <div className='w-1/2 flex justify-between ml-16 '>         
        <p>Title</p>
        <p>Discription</p>
        <p className='mr-10'>Assigned</p>
            </div>
      <div className=' w-96  flex justify-between mr-12'>
      <p>Status</p>
        <p>Check</p>
        <p>Marked</p>
      </div>
       
        </div>
        
    </div>

    <div className='flex gap-10 '>
        
        <div className='w-full  bg-white border border-gray-200 rounded-lg shadow-2xl p-6 '>
            <div className='flex justify-between'>
            <p className='text-sm font-semibold w-32 text-start'>Make an  automatic payments system that enable design.</p>
        <p className='text-sm font-semibold w-1/4 text-start '>Make an  automatic payments system that enable design.</p>

       <Avatarcircle/>


        <button className="h-12 inline-flex items-center justify-center 
        border-2 rounded-full bg-white py-1.5 px-4 text-center font-sm text-green hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Completed 
                </button>
                <a href="/progress-task">
                <button className=" h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Progress 
                </button>
       
                </a>
               
                <button className="h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Done 
                </button>
       
       
            </div>
       
        </div>
    </div>
    <div className='flex gap-10 '>
        
        <div className='w-full  bg-white border border-gray-200 rounded-lg shadow-2xl p-6 '>
            <div className='flex justify-between'>
            <p className='text-sm font-semibold w-32 text-start'>Make an  automatic payments system that enable design.</p>
        <p className='text-sm font-semibold w-1/4 text-start '>Make an  automatic payments system that enable design.</p>

        <Avatarcircle/>
        <button className="h-12 inline-flex items-center justify-center 
        border-2 rounded-full bg-white py-1.5 px-4 text-center font-sm text-green hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Completed 
                </button>
                <a href="/progress-task">
                <button className=" h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Progress 
                </button>
                </a>            
       
                <button className="h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Done 
                </button>
       
            </div>
       
        </div>
    </div>
    <div className='flex gap-10 '>
        
        <div className='w-full  bg-white border border-gray-200 rounded-lg shadow-2xl p-6 '>
            <div className='flex justify-between'>
            <p className='text-sm font-semibold w-32 text-start'>Make an  automatic payments system that enable design.</p>
        <p className='text-sm font-semibold w-1/4 text-start '>Make an  automatic payments system that enable design.</p>

        <Avatarcircle/>
        <button className="h-12 inline-flex items-center justify-center 
        border-2 rounded-full bg-white py-1.5 px-4 text-center font-sm text-green hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Completed 
                </button>
                <button className=" h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Progress 
                </button>
       
                <button className="h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Done 
                </button>
       
            </div>
       
        </div>
    </div>
    <div className='flex gap-10 '>
        
        <div className='w-full  bg-white border border-gray-200 rounded-lg shadow-2xl p-6 '>
            <div className='flex justify-between'>
            <p className='text-sm font-semibold w-32 text-start'>Make an  automatic payments system that enable design.</p>
        <p className='text-sm font-semibold w-1/4 text-start '>Make an  automatic payments system that enable design.</p>

        <Avatarcircle/>
        <button className="h-12 inline-flex items-center justify-center 
        border-2 rounded-full bg-white py-1.5 px-4 text-center font-sm text-green hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Completed 
                </button>
                <button className=" h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Progress 
                </button>
       
                <button className="h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Done 
                </button>
       
            </div>
       
        </div>
    </div>
    <div className='flex gap-10 '>
        
        <div className='w-full  bg-white border border-gray-200 rounded-lg shadow-2xl p-6 '>
            <div className='flex justify-between'>
            <p className='text-sm font-semibold w-32 text-start'>Make an  automatic payments system that enable design.</p>
        <p className='text-sm font-semibold w-1/4 text-start '>Make an  automatic payments system that enable design.</p>

        <Avatarcircle/>
        <button className="h-12 inline-flex items-center justify-center 
        border-2 rounded-full bg-white py-1.5 px-4 text-center font-sm text-green hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Completed 
                </button>
                <button className=" h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Progress 
                </button>
       
                <button className="h-12 inline-flex items-center justify-center rounded-full bg-blue py-1.5 px-4 text-center font-sm text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Done 
                </button>
       
            </div>
       
        </div>
    </div>
</div>
    </div>
  )
}

export default Taskmain
