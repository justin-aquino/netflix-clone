import { useState } from "react";
import Input from "../components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')]">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="netflix logo" className="h-12" />
        </nav>
        <section className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-d rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
            <div className="flex flex-col gap-4">
              {" "}
              <Input
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Auth;
