import Image from "next/image"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'

const Navbar = () => {
  return (
    <div className=" flex bg-green-400">
      <span><HiOutlineMenuAlt1 className=" cursor-pointer" /></span>
      <div>
        <input type="text" name="search" placeholder='Search' />
        <span><AiOutlineSearch className=" cursor-pointer" /></span>
      </div>
      <span><IoMdNotificationsOutline className=" cursor-pointer" /></span>
      <div>
        <Image src='/avtar.jpg' width='50' height='50' alt='me' className=" rounded-full" />
      </div>
    </div>
  )
}

export default Navbar