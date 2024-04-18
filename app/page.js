import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* {/* <div className="flex justify-center items-center h-screen w-screen"> */}

      <div class="flex flex-wrap">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <nav class="flex px-4 justify-between items-center">
              <div class="text-4xl font-bold">
                Form<span class="text-blue-700">.</span>
              </div>
              <div>
                
              </div>
            </nav>
            <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold">
                  Apply Now! <span class="text-blue-700">Only 20 </span> 
                  Seats left
                </h1>
                <div class="w-20 h-2 bg-blue-700 my-4"></div>

                <a href="/student-onboarding">
                  <button class="bg-blue-500 text-white text-xl font-medium px-4 py-2 rounded shadow">
                    Apply Now
                  </button>
                </a>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg"
          alt="Leafs"
          class="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
    </>
  );
}
