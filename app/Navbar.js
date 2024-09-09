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
          <div class="text-lg font-medium text-azure-radiance-600 hover:text-azure-radiance-400 my-auto">
            <a href="#waitlist">Join Waitlist</a>
          </div>
        </div>
      </div>
    </nav>
  )
}