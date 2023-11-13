import Link from 'next/link'
import { AiFillCheckCircle, AiFillHome, AiOutlineIssuesClose, AiOutlineUserAdd, AiOutlineLogin } from 'react-icons/ai'
import { RiProfileFill, RiLockPasswordFill } from 'react-icons/ri'
import { MdOutlineManageHistory } from 'react-icons/md'
import { TfiControlShuffle } from 'react-icons/tfi'
import { SiGithubactions } from 'react-icons/si'
import { BiSolidError } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='py-6 px-6 custom-bg'>
      <div className='flex items-center gap-2 cursor-pointer mb-10'>
        <h1 className="text-3xl text-white font-bold"><Link href='/'>Risk Wise</Link></h1>
        <h1 className="text-2xl"><AiFillCheckCircle /></h1>
      </div>

      <div className='flex flex-col gap-3 mb-6'>
        <h2>Dashboard</h2> 
        <ul className='flex flex-col gap-2 ml-2'>
          <li className='flex gap-2 items-center'>
            <span><AiFillHome /></span>
            <Link href='welcome-screen'>Welcome Screen</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <span><RiProfileFill /></span>
            <Link href='risk-profile'>Risk Profile</Link>
          </li>
        </ul>
      </div>

      <div className='flex flex-col gap-3 mb-6'>
        <h2>Applications</h2> 
        <ul className='flex flex-col gap-2 ml-2'>
          <li className='flex gap-2 items-center'>
            <span><MdOutlineManageHistory /></span>
            <Link href='risk-management'>Risk Management</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <span><TfiControlShuffle /></span>
            <Link href='internal-controls'>Internal Controls</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <span><AiOutlineIssuesClose /></span>
            <Link href='issue-management'>Issue Management</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <span><SiGithubactions /></span>
            <Link href='action'>Action</Link>
          </li>
        </ul>
      </div>

      <div className='flex flex-col gap-3 mb-6'>
        <h2>Authentication</h2> 
        <ul className='flex flex-col gap-2 ml-2'>
          <li className='flex gap-2 items-center'>
            <span><AiOutlineLogin /></span>
            <Link href='/Login'>Login</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <span><AiOutlineUserAdd /></span>
            <Link href='/Register'>Register</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <span><RiLockPasswordFill /></span>
            <Link href='/Recovery'>Recover Password</Link>
          </li>
          <li className='flex gap-2 items-center'>
            <span><BiSolidError /></span>
            <Link href='/404'>Error</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar