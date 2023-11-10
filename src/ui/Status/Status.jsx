import {BsFillStarFill} from 'react-icons/bs'

const Status = () => {
  return (
    <div className=" py-0 px-4">
      <div className="flex items-center gap-2">
        <h2><BsFillStarFill className=' mr-1' /></h2>
        <h1 className=' m-b'>Online</h1>
      </div>
      <p className=" text-xs">Support expires in <span className="text-white">61</span> days.</p>
    </div>
  )
}

export default Status