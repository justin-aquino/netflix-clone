import { Inter } from "next/font/google";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navibar from "@/components/Navibar";
import Billboard from "@/components/Billboard";
import MovieList from "../components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

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
 const { data: movies = [] } = useMovieList();
 const { data: favorites = [] } = useFavorites();
 const { isOpen, closeModal } = useInfoModal();
 //  console.log(user);
 return (
  <>
   <InfoModal visible={isOpen} onClose={closeModal} />
   <Navibar />
   <Billboard />
   <div className="pb-40">
    <MovieList title="Trending Now" data={movies} />
    <MovieList title="My List" data={favorites} />
   </div>
  </>
 );
}
