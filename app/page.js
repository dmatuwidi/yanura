import "./globals.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Home() {

  return (
    <>
      <Navbar/>
      <main class="h-full flex flex-col flex-auto flex-shrink-0 min-h-screen">
        <section class="mt-36 mx-8 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl" id="waitlist">
          <div class="flex justify-center align-middle">
            <h1 class="font-logo text-azure-radiance-600">Yanura! is</h1>
          </div>
          <div class="flex flex-col justify-center align-middle">
            <h2 class="text-center font-semibold tracking-tighter">Job Searching</h2>
            <h2 class="text-center text-azure-radiance-600 font-bold tracking-tighter">✨ Reimagined ✨</h2>
          </div>
          <div class="flex justify-center align-middle text-lg mt-12 mx-12 md:mx-24 lg:mx-48 xl:mx-72 font-light">
            <h3>
              Yanura, an AI-powered job search platform that analyzes your profile, skills, and preferences to recommend tailored job opportunities.
            </h3>
          </div>
          <div class="flex flex-col md:flex-row justify-center align-middle text-xl mt-12">
            <input class="mx-auto md:mx-2 p-3 rounded-lg w-80 drop-shadow-md border-azure-radiance-600 border-2 text-lg" type="text" id="email" name="email" placeholder="Enter your e-mail"></input>
            <button class="mx-auto md:mx-2 my-4 md:my-0 p-3 rounded-lg w-40 drop-shadow-md bg-azure-radiance-600 hover:bg-azure-radiance-400 text-white font-semibold">Join Waitlist</button>
          </div>
        </section>
        <section class="my-36 pt-16 mx-auto" id="features">
          <div class="flex justify-center align-middle">
            <h2 class="text-6xl font-semibold">Features</h2>
            <p class="text-2xl"></p>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-8 my-12 place-items-center">
            <div class="relative border-2 border-azure-radiance-600 drop-shadow-md rounded-lg aspect-square w-48 sm:w-64 md:w-72 lg:w-56 xl:w-72">
              <div class="p-6 w-full h-full hover:opacity-0 transition-opacity bg-white rounded-lg flex flex-col justify-end">
                <h2 class="text-2xl sm:text-3xl font-medium">🌟<br></br>AI-Driven</h2>
              </div>
              <div class="p-6 absolute bottom-0 -z-10 w-full h-full flex flex-col justify-end">
                <h2 class="text-2xl sm:text-3xl font-medium">AI-Driven</h2>
                <p class="text-sm sm:text-md"><span class="text-azure-radiance-600">Yanura</span> analyses user data to deliver highly personalised job matches, saving you time.</p>
              </div>
            </div>

            <div class="relative border-2 border-azure-radiance-600 drop-shadow-md rounded-lg aspect-square w-48 sm:w-64 md:w-72 lg:w-56 xl:w-72">
              <div class="p-6 w-full h-full hover:opacity-0 transition-opacity bg-white rounded-lg flex flex-col justify-end">
                <h2 class="text-2xl sm:text-3xl font-medium">💫<br></br>Curated</h2>
              </div>
              <div class="p-6 absolute bottom-0 -z-10 w-full h-full flex flex-col justify-end">
                <h2 class="text-2xl sm:text-3xl font-medium">Curated</h2>
                <p class="text-sm sm:text-md">
                <span class="text-azure-radiance-600">Yanura</span> highlights your key skills & experiences, increasing the chances of landing opportunities.</p>
              </div>
            </div>

            <div class="relative border-2 border-azure-radiance-600 drop-shadow-md rounded-lg aspect-square w-48 sm:w-64 md:w-72 lg:w-56 xl:w-72">
              <div class="p-6 w-full h-full hover:opacity-0 transition-opacity bg-white rounded-lg flex flex-col justify-end">
                <h2 class="text-2xl sm:text-3xl font-medium">🪽<br></br>Responsive</h2>
              </div>
              <div class="p-6 absolute bottom-0 -z-10 w-full h-full flex flex-col justify-end">
                <h2 class="text-2xl sm:text-3xl font-medium">Responsive</h2>
                <p class="text-sm sm:text-md">Description summary</p>
              </div>
            </div>

            <div class="relative border-2 border-azure-radiance-600 drop-shadow-md rounded-lg aspect-square w-48 sm:w-64 md:w-72 lg:w-56 xl:w-72">
              <div class="p-6 w-full h-full hover:opacity-0 transition-opacity bg-white rounded-lg flex flex-col justify-end">
                <h2 class="text-2xl sm:text-3xl font-medium">🔮<br></br>Reliable</h2>
              </div>
              <div class="p-6 absolute bottom-0 -z-10 w-full h-full flex flex-col justify-end">
                <h2 class="text-2xl sm:text-3xl font-medium">Reliable</h2>
                <p class="text-sm sm:text-md">Description summary</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
