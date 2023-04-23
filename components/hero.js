import ReactTypingEffect from 'react-typing-effect';
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-white w-full">
      <div className="relative isolate flex justify-center">
        <div
          className="absolute -z-10 h-full w-full backdrop-filter backdrop-blur-xl bg-[url('/hero.jpeg')] bg-cover"
          aria-hidden="true"
        >
          {/* <img
            src="/hero.jpeg"
            alt=""
            className="inset-0 -z-10 h-full w-full object-cover"
          /> */}
        </div>
        <div className="max-w-3xl py-32 sm:py-48 lg:py-56 h-screen">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6">
              
              
              
            </div>
          </div>
          <div className="text-center">
            {/*<ReactTypingEffect
              text={["Welcome back."]}
              cursorRenderer={cursor => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1 className="font-sans text-lg">
                    {text.split('').map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}

                        >{char}</span>
                      );
                    })}
                  </h1>
                );
              }}
            /> */}
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-6xl">
              Plan your next vacation trip with&nbsp;
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 lg:inline">
                Getaway-Guru
              </span>.
            </h1>
            <p className="mt-6 text-lg leading-8">
              Explore the world. Share your adventures.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/recommendations"
                onClick={console.log("GET STARTED")}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <a onClick={(e) => { e.preventDefault(); window.location.replace('/#about'); }} href="#" className="text-sm font-semibold leading-6">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;