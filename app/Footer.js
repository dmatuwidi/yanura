import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer class="bg-azure-radiance-600">
      <div class="flex justify-evenly p-10 text-center">
        <div class="my-auto text-white text-center">
          <a class="font-logo text-3xl">Yanura!</a>
          <p class="text-xs">Copyright © Yanura 2024</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer