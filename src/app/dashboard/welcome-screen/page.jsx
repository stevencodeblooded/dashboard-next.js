import { BsFillEnvelopePlusFill } from "react-icons/bs"

const WelcomeScreen = () => {
  return (
    <div className=" p-6">
      <h1 className=" my-3 text-xl">Welcome! <span className="text-white">Shaira Diaz</span></h1>
      <p className=" mb-4">The dashboard below provides a comprehensive and personalized view, tailored to your needs. It offers a wealth of insights and information that empowers you to make informed and effective decisions. Unlock the power of data-driven decision-making and seize new opportunities with confidence.</p>
      <div className="p-4 custom-bg rounded-sm">
        <div className="p-4 rounded-sm">
          <div className=" inline-flex gap-4 w-full">
            <div className="flex justify-between p-2 border-2 items-center rounded-md w-1/4 hover:scale-105 transition-all">
              <BsFillEnvelopePlusFill className=" font-semibold text-3xl" />
              <section>
                <p className="text-5xl font-bold">74</p>
                <p>Total Active</p>
              </section>
            </div>
            <div className="flex justify-between p-2 border-2 items-center rounded-md w-1/4 hover:scale-105 transition-all">
              <BsFillEnvelopePlusFill className=" font-semibold text-3xl" />
              <section>
                <p className="text-5xl font-bold">74</p>
                <p>Total Active</p>
              </section>
            </div>
            <div className="flex justify-between p-2 border-2 items-center rounded-md w-1/4 hover:scale-105 transition-all">
              <BsFillEnvelopePlusFill className=" font-semibold text-3xl" />
              <section>
                <p className="text-5xl font-bold">74</p>
                <p>Total Active</p>
              </section>
            </div>
            <div className="flex justify-between p-2 border-2 items-center rounded-md w-1/4 hover:scale-105 transition-all">
              <BsFillEnvelopePlusFill className=" font-semibold text-3xl" />
              <section>
                <p className="text-5xl font-bold">74</p>
                <p>Total Active</p>
              </section>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen