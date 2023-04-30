import React, { useCallback, useMemo } from "react";
import axios from "axios";

import useCurrentUser from "../hooks/useCurrentUser";
import useFavorites from "../hooks/useFavorites";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface FavoriteBtnProps {
  movieId: string;
}

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites(); //mutate function from useFavorites, given an alias of mutateFavorites
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || []; //search current users fave list

    return list.includes(movieId); //if the current list includes the passed ID
  }, [movieId, currentUser]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      //favorite, not favorite for delete and post route
      response = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({ ...currentUser, favoriteIds: updatedFavoriteIds });

    mutateFavorites();
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <button
      className="
      cursor-pointer 
      group/item 
      w-6 
      h-6 
      lg:w-10 
      lg:h-10 
      border-white 
      border-2 
      rounded-full
      flex
      justify-center
      items-center
      transition
      hover:border-neutral-300
      "
      onClick={toggleFavorites}
    >
      <Icon className="text-white" size={25} />
    </button>
  );
};

export default FavoriteBtn;
