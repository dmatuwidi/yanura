"use client"
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <div class="flex flex-col fixed w-full drop-shadow-sm bg-white z-10">
        <div class="flex p-6 justify-between">
          <div class="my-auto">
            <a class="font-logo text-3xl text-azure-radiance-600">Yanura!</a>
          </div>
          <div class="flex">
            <div class="text-lg font-medium text-azure-radiance-600 hover:text-azure-radiance-400 my-auto">
              <a href="#waitlist">Join Waitlist</a>
            </div>
            <div class="ml-4 text-lg font-medium hover:text-gray-500 my-auto">
              <a href="#features">Features</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}