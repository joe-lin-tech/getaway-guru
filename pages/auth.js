import {useState} from 'react';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router'
import Navigation from '@/components/navigation';

const Auth = () => {
  const handleClick = async (e) => {
    e.preventDefault();
    console.log("hey got to sign in")
    const result = await signIn('google');
    console.log(result);
  };

  return (
    <>
      <Navigation />
      <div
        className="absolute -z-10 h-full w-full backdrop-filter backdrop-blur-xl bg-[url('/hero.jpeg')] bg-cover blur-sm"
        aria-hidden="true"
      ></div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login with Google.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-lg font-bold leading-9 tracking-tight text-white">
          <form className="space-y-6" action="#" method="POST">
            <button onClick = {handleClick} type="button" className="py-2 px-4 max-w-md flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
              </svg>
              Sign in with Google
            </button>

            
          </form>

          
        </div>
      </div>
    </>
  )

}

export default Auth
