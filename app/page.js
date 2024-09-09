'use client'
import "./globals.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Image from 'next/image'
import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState('')

  function handlechange(e){
    setEmail(e.target.value)
    return null
  }
  
  async function  handleSubmit(){
    const r = await fetch('api/mongo',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({email})
    })
  }
  return (  
    <>
      <Navbar/>
      <main class="h-full flex flex-col flex-auto flex-shrink-0 min-h-screen">
        <section class="mt-36 mx-8 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
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
          <div class="flex flex-col md:flex-row justify-center align-middle text-xl mt-12" id="waitlist">
            <input class="mx-auto md:mx-2 p-3 rounded-lg w-80 drop-shadow-md border-azure-radiance-600 border-2 text-lg" type="text" id="email" name="email" placeholder="Enter your e-mail" value={email} onChange={handlechange}></input>
            <button class="mx-auto md:mx-2 my-4 md:my-0 p-3 rounded-lg w-40 drop-shadow-md bg-azure-radiance-600 hover:bg-azure-radiance-400 text-white font-semibold" onClick={handleSubmit}>Join Waitlist</button>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
