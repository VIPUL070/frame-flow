import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full w-full md:w-[45%] tracking-tight p-4 md:p-6 lg:p-10 flex items-center justify-center overflow-hidden">
      <div className="w-full md:w-[75%] lg:w-[65%]  gap-1.5 lg:gap-2 px-2  max-w-xs md:max-w-none relative flex flex-col items-center justify-center">
        <div className="w-full">
          <h1 className="text-black text-sm md:text-base lg:text-lg">
            Create an Account
          </h1>
          <p className="text-[8px] lg:text-[9px] text-stone-400">
            You are few moments away from getting started!
          </p>
          <span className="text-black text-[8px] lg:text-[9px] flex items-center text-center gap-1 lg:gap-1.5 justify-start pt-1.5 lg:pt-2">
            <input type="checkbox" className="h-2.5 w-2.5 lg:h-3 lg:w-3" />
            <p>Send me tips, updates and offers.</p>
          </span>
        </div>
        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input type="text" placeholder="Enter your name" label="Name" />
            <Input type="text" placeholder="Enter your email" label="Email" />
            <Input type="password" placeholder="••••••••" label="Password" />

            <p className="text-[8px] lg:text-[9px] text-stone-500 leading-normal pt-1 pr-6">
              By signing up, you accept Frame Flow{" "}
              <a
                href="#"
                className="underline underline-offset-2 text-stone-800 hover:text-black transition-colors"
              >
                privacy policy
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline underline-offset-2 text-stone-800 hover:text-black transition-colors"
              >
                terms of services
              </a>
              .
            </p>

            <Button type="submit" variant="primary" size="lg">
              Sign Up
            </Button>

            <div className="relative flex p-1 items-center text-xs text-stone-300">
              <div className="grow border-t border-stone-200"></div>
              <span className="shrink mx-3 text-[8px] lg:text-[9px] font-medium uppercase tracking-wide text-black">
                or
              </span>
              <div className="grow border-t border-stone-200"></div>
            </div>

            <p className="text-[8px] lg:text-[9px] text-stone-500 text-center">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-medium text-black underline underline-offset-4 hover:text-stone-700 transition-colors cursor-pointer"
              >
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
