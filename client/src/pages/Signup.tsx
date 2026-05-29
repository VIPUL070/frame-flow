import Dither from "@/components/Dither"
import SignupForm from "@/components/SignupForm"

const Signup = () => {
  return (
    <div className="h-dvh w-screen bg-canvas py-5 px-10 flex justify-center items-center">
        <div className="bg-offwhite relative text-black w-full h-full rounded-xl border border-stone-200 shadow-2xl p-3 flex items-center justify-between">
            <Dither />
            <SignupForm />
        </div>
    </div>
  )
}

export default Signup