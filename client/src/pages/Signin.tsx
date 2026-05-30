import Dither from "@/components/Dither/Dither";
import LoginForm from "@/components/AuthForm/LoginForm";

const Signin = () => {
  return (
    <div className="h-dvh w-screen bg-canvas py-3 px-3 lg:py-5 lg:px-10 flex justify-center items-center overflow-hidden">
        <div className="bg-offwhite relative text-black w-full h-full rounded-xl border border-stone-200 shadow-2xl p-1.5 flex items-center justify-between overflow-hidden">
            <Dither />
            <LoginForm />
        </div>
    </div>
  )
}

export default Signin;