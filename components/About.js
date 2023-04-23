const About = () => {
        return (
<div class="py-16 bg-gray-200 w-full h-full" id="about">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12 drop-shadow-2xl">
          <img src="/demo.png" alt="image" loading="lazy" width="" height="" />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Find popular trips or discover new adventures using Gateway Guru!</h2>
          <p class="mt-6 text-gray-600">Tell us your dream vacation details and we'll help you plan the rest. Don't know where to go? Getaway Guru searches the web for the hottest tourist locations nearby and develops a plan to provide you with the best possible trip!</p>
          <p class="mt-4 text-gray-600">After you're back, quickly export the details of your recent trip with a single click to help others find their dream vacations!</p>
        </div>
      </div>
  </div>
</div>

        )
}

export default About;