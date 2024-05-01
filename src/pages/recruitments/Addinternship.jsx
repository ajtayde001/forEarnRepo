import React from 'react'

function Addinternship() {
  return (
    <div>
        <h1 className='text-black font-bold float-left'>Add Internship</h1>
        <br />
       <div className="flex flex-col gap-9 p-2 shadow-xl">
        
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark p-4 ">
           
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-black float-left font-semibold">
                      Internship Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded-2xl border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-black "
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-black float-left font-semibold">
                      Duration
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded-2xl border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-black "
                    />
                  </div>
                </div>

                

               

                <div className="mb-3">
                  <label className="mb-2.5 block text-black dark:text-black float-left font-semibold">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Type your message"
                    className="w-full rounded-2xl border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-black "
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="mb-2.5 block text-black dark:text-black float-left font-semibold">
                    Selected Skills <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="w-full rounded-2xl border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-black "
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-black float-left font-semibold">
                    Skills
                  </label>
                  <input
                    type="text"
                    placeholder="Select subject"
                    className="w-full rounded-2xl border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition   disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-black "
                  />
                </div>
                <div className='flex justify-end gap-4 mt-3'>
                <button className="inline-flex items-center justify-center rounded-xl bg-blue py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Create
                </button>
                <button className="inline-flex items-center justify-center rounded-xl bg-blue py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                  Delete
                </button>
                </div>
              
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Addinternship
