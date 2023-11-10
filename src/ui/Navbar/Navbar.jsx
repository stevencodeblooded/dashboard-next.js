import Image from "next/image"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'

const Navbar = () => {
  return (
    <div className=" flex justify-between custom-bg items-center py-3 px-6 shadow-lg">
      <div className="flex items-center gap-6">
        <span><HiOutlineMenuAlt1 className=" cursor-pointer text-3xl" /></span>
        <div className="relative">
          <input type="text" name="search" placeholder='Search...' className=" p-2 rounded-md border-0 focus:outline-none small-items-bg" />
          <span><AiOutlineSearch className=" cursor-pointer absolute top-1.5 right-2 text-3xl" /></span>
        </div>
      </div>

      <div className=" flex items-center gap-6">
        <span><IoMdNotificationsOutline className=" cursor-pointer text-3xl" /></span>
        <div>
          <Image src='/avtar.jpg' width='50' height='50' alt='me' className=" rounded-full cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Navbar