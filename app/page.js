import "./globals.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main class="h-full flex flex-col flex-auto flex-shrink-0 min-h-screen">
        <section class="my-auto mx-8 text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          <div class="flex justify-center align-center">
            <h1 class="font-logo text-azure-radiance-600">Yanura! is</h1>
          </div>
          <div class="flex flex-col justify-center align-center">
            <h2 class="text-center font-semibold tracking-tighter">Job Searching</h2>
            <h2 class="text-center text-azure-radiance-600 font-bold tracking-tighter">Reimagined</h2>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
