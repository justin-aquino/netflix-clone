import { useCallback, useState } from "react";
import Input from "../components/Input";
import axios from "axios";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
 const [userName, setUserName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [variant, setVariant] = useState("login");

 const toggleVariant = useCallback(() => {
  setVariant((currentVariant) =>
   currentVariant === "login" ? "register" : "login"
  );
 }, []);

 const register = useCallback(async () => {
  try {
   await axios.post("/api/register", {
    email,
    userName,
    password,
   });
  } catch (err) {
   console.log(err);
  }
 }, [email, userName, password]);

 return (
  <div className="relative h-full w-full bg-[url('/images/hero.jpg')]">
   <div className="bg-black w-full h-full lg:bg-opacity-50">
    <nav className="px-12 py-5">
     <img src="/images/logo.png" alt="netflix logo" className="h-12" />
    </nav>
    <section className="flex justify-center">
     <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-d rounded-md w-full">
      <h2 className="text-white text-4xl mb-8 font-semibold">
       {variant === "login" ? "Sign in" : "Sign Up"}
      </h2>
      <div className="flex flex-col gap-4">
       {variant === "register" && (
        <Input
         label="UserName"
         onChange={(e: any) => {
          setUserName(e.target.value);
         }}
         id="UserName"
         type="text"
         value={userName}
        />
       )}{" "}
       <Input
        label="Email"
        onChange={(e: any) => {
         setEmail(e.target.value);
        }}
        id="email"
        type="email"
        value={email}
       />
       <Input
        label="Password"
        onChange={(e: any) => {
         setPassword(e.target.value);
        }}
        id="password"
        type="password"
        value={password}
       />
      </div>
      <button
       onClick={register}
       className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-800"
      >
       {variant === "login" ? "login" : "Register"}
      </button>

      <div className="flex flex-row items-center gap-4 mt-8 justify-center">
       {" "}
       <button className="w-10 h-10 bg-white rounded-full flex items-center justfiy-center hover:opacity-80 transition">
        <FcGoogle size={30} className="m-auto" />
       </button>{" "}
       <button className="w-10 h-10 bg-white rounded-full flex items-center justfiy-center hover:opacity-80 transition">
        <FaGithub size={30} className="m-auto" />
       </button>
      </div>
      {variant === "login" ? (
       <p className="text-neutral-500 mt-12">
        First time using Netflix?
        <span
         onClick={toggleVariant}
         className="text-white ml-1 hover:underline cursor-pointer "
         role="link"
         tabIndex={0}
        >
         Create an account.
        </span>
       </p>
      ) : (
       <p className="text-neutral-500 mt-12">
        Already have an account?
        <span
         onClick={toggleVariant}
         className="text-white ml-1 hover:underline cursor-pointer"
         role="link"
         tabIndex={0}
        >
         Sign in.
        </span>
       </p>
      )}
     </div>
    </section>
   </div>
  </div>
 );
};
export default Auth;
