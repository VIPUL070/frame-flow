import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full w-full md:w-[45%] tracking-tight p-4 md:p-6 lg:p-10 flex items-center justify-center overflow-hidden">
      <div className="w-full md:w-[75%] lg:w-[65%] gap-1.5 lg:gap-2 px-2 max-w-xs md:max-w-none relative flex flex-col items-center justify-center">
        <div className="w-full">
          <h1 className="text-black text-sm md:text-base lg:text-lg">Welcome Back</h1>
          <p className="text-[8px] lg:text-[9px] text-stone-400">
            Enter your credentials to access your account!
          </p>
        </div>
        <div className="w-full">
          <form onSubmit={(e) => { e.preventDefault() }}>

            <Input type="text" placeholder="Enter your email" label="Email" />
            <Input type="password" placeholder="••••••••" label="Password" />

            <Button type="submit" variant="primary" size="lg">Log In</Button>

            <div className="relative flex p-1 items-center text-xs text-stone-300">
              <div className="grow border-t border-stone-200"></div>
              <span className="shrink mx-3 text-[8px] lg:text-[9px] font-medium uppercase tracking-wide text-black">
                or
              </span>
              <div className="grow border-t border-stone-200"></div>
            </div>

            <p className="text-[8px] lg:text-[9px] text-stone-500 text-center">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="font-medium text-black underline underline-offset-4 hover:text-stone-700 transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;