import React from 'react';


export default function Form({ setShowForm }) {

  const handleButtonClick = () => {
    console.log('display hero');
    setShowForm(false);
  };

  return (
    <div className="bg-white w-full">
      <div className="relative isolate flex justify-center">
        <div
          className="absolute -z-10 h-full w-full blur-sm"
          aria-hidden="true"
        >
          <img
            src="/hero.jpeg"
            alt=""
            className="inset-0 -z-10 h-full w-full object-cover"
          />
        </div>
        <div className="max-w-3xl h-screen py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6"></div>
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
            Start Date
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
            
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
            End Date
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-start-name" type="text" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
            Budget
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-budget" type="decimal" placeholder="e.g. 1000" />
            
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
            City
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
            State
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
            Zip
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                
                onClick={handleButtonClick}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back
              </a>
              <a href="#" className="text-sm font-semibold leading-6">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
    </form>
    </div>
    </div>
    </div>
    </div>
  );
}