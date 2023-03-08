import React from 'react'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterCircle} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
        
<footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img src="/assets/images/healthidote.png" class="mr-3 w-[15%]" alt="Logo" />
        </a>
        <ul class="flex items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:text-[#c937a5] md:mr-6  px-8"><AiFillInstagram className='w-8 h-8'/></a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:text-[#1771e6] md:mr-6 px-8"><AiFillFacebook className='w-8 h-8'/></a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:text-[#1c93e4] md:mr-6  px-8"><AiFillTwitterCircle className='w-8 h-8'/></a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:text-[#1c93e4] md:mr-6 -mt-5 px-8"><BsLinkedin className='w-7 h-7'/></a>
            </li>
            
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Annunaki</a>. All Rights Reserved.
    </span>
</footer>

    </div>
  )
}

export default Footer