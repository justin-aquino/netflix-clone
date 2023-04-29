import React from "react";

interface MovieCardProps {
 data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
 return (
  <div className="group bg-zinc-900 col-span relative h-[12vw]">
   <img
    src={data.thumbnailUrl}
    alt={data.title}
    className="cursor-pointer object-cover transition duration shadow-xl rounded-md w-full  h-full "
   />
  </div>
 );
};

export default MovieCard;
