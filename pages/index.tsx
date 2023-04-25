import { Inter } from "next/font/google";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
 const session = await getSession(context);

 //check if a session exists, if non, redirect to /auth
 if (!session) {
  return {
   redirect: {
    destination: "/auth",
    permanent: false,
   },
  };
 }
 return {
  props: {},
 };
}

export default function Home() {
 const { data: user } = useCurrentUser();

 console.log(user);
 return (
  <>
   <h1 className=" text-2x1 text-green-500">Netflix Clone</h1>
   <p className="text-white"> Logged in as: {user?.userName} </p>
   <button
    className="h-10 w-full bg-white"
    onClick={() => {
     signOut();
    }}
   >
    logout
   </button>
  </>
 );
}
