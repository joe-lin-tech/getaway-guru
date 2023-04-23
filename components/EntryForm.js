import React from 'react';

const EntryForm = ({ handleSubmit, formValues, setFormValues }) => {
  return (
    <div className="w-full">
      <div className="relative isolate flex justify-center text-black">
        <form className="w-full max-w-lg">
          <p className="text-3xl font-bold">Find your recommendations.</p>
          <div className="flex flex-wrap -mx-3 mb-6 mt-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                Start Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="date"
                value={formValues.startDate}
                onChange={(e) => setFormValues({ ...formValues, startDate: e.target.value })}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                End Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="date"
                value={formValues.endDate}
                onChange={(e) => setFormValues({ ...formValues, endDate: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                Budget
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="decimal"
                placeholder="e.g. 1000"
                value={formValues.budget}
                onChange={(e) => setFormValues({ ...formValues, budget: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Los Angeles"
                value={formValues.city}
                onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={formValues.state}
                  onChange={(e) => setFormValues({ ...formValues, state: e.target.value })}
                >
                  <option>California</option>
                  <option>Washington</option>
                  <option>Maine</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" >
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="90210"
                value={formValues.zipcode}
                onChange={(e) => setFormValues({ ...formValues, zipcode: e.target.value })}
              />
            </div>
          </div>

          {/* <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              onClick={() => console.log("HI")}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div> */}
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              Generate Recommendations
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EntryForm