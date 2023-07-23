import React, { useCallback, useMemo } from "react";
import axios from "axios";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface FavoriteBtnProps {
  movieId: string;
}

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [movieId, currentUser]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }
    const updatedFavIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavIds,
    });

    mutateFavorites();
  }, [movieId, currentUser, mutateFavorites, isFavorite, mutate]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-6 h-6
      lg:w-10 lg:h-10 border-white border-2 rounded-full flex
      justify-center items-center transition hover:border-neutral-300
        "
    >
      <Icon className="text-white" size={25} />
    </div>
  );
};

export default FavoriteBtn;
