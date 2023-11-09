import Image from "next/image"
import { TbChristmasTree } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="flex bg-slate-700">
      <h1>Risk Wise</h1>
      <div className="flex items-center justify-center ">
        <span><TbChristmasTree /></span>
        <div className="flex">
          <input type="text" name="search" placeholder='Search' />
          <span><TbChristmasTree /></span>
        </div>
        <span>Notif</span>
        <div>
          <Image src='/avtar.jpg' width='50' height='50' alt='me' className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Navbar