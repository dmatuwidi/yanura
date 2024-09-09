"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <div class="flex flex-col fixed w-full drop-shadow-sm bg-white">
        {/* main Navbar */}
        <div class="flex p-6 justify-between">
          <div class="my-auto">
            <a class="font-logo text-3xl text-azure-radiance-600">Yanura!</a>
          </div>
          <div class="text-lg my-auto hidden sm:block">
            <a class="mx-2 md:mx-5">Search</a>
            <a class="mx-2 md:mx-5">Recommended</a>
            <a class="mx-2 md:mx-5">About</a>
          </div>
          <div class="text-lg font-medium text-azure-radiance-600 hover:text-azure-radiance-400 my-auto hidden sm:block">
            <a>Sign in</a>
          </div>
          <div class="sm:hidden flex justify-center align-middle my-auto text-azure-radiance-600">
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faBars} size="xl" />
            </button>
          </div>
        </div>
        {/* sm Menu Pop-Up */}
        <div class={`sm:hidden flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
          <ul class="flex flex-col justify-center align-middle text-center">
            <li class="p-2 hover:bg-white/50"><a>Search</a></li>
            <li class="p-2 hover:bg-white/50"><a>Reommended</a></li>
            <li class="p-2 hover:bg-white/50"><a>About</a></li>
            <li class="p-2 hover:bg-white/50 text-azure-radiance-600 font-medium"><a>Sign In</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}