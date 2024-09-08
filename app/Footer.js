import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer class="bg-azure-radiance-600">
      <div class="flex justify-evenly p-10 text-center">
        <div class="hidden sm:block my-auto text-white text-center">
          <a class="font-logo text-3xl">Yanura!</a>
          <p class="text-xs">Copyright © Yanura 2024</p>
        </div>
        <div>
          <ul class="flex flex-col justify-center align-middle text-white">
            <li class="mx-2 md:mx-5"><a>Search</a></li>
            <li class="mx-2 md:mx-5"><a>Recommended</a></li>
            <li class="mx-2 md:mx-5"><a>About</a></li>
          </ul>
        </div>
        <div>
          <ul class="flex flex-col justify-center align-middle text-white">
            <li class="mx-2 md:mx-5"><a>Contact</a></li>
            <li class="mx-2 md:mx-5"><a>Privacy</a></li>
            <li class="mx-2 md:mx-5"><a>Terms</a></li>
          </ul>
        </div>
        <div>
          <ul class="flex flex-col justify-center align-middle text-white">
            <li class="mx-2 md:mx-5"><a>Facebook</a></li>
            <li class="mx-2 md:mx-5"><a>Twitter</a></li>
            <li class="mx-2 md:mx-5"><a>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="sm:hidden my-auto text-white text-center pb-10">
        <a class="font-logo text-3xl">Yanura!</a>
        <p class="text-xs">Copyright © Yanura 2024</p>
      </div>
    </footer>
  )
}

export default Footer