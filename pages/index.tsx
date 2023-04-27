import { Inter } from "next/font/google";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navibar from "@/components/Navibar";
import Billboard from "@/components/Billboard";

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
   <Navibar />
   <Billboard />
  </>
 );
}
