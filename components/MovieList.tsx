import React from "react";
import { isEmpty } from "lodash";

interface MovieListProps {
 data: Record<string, any>[];
 title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
 if (isEmpty(data)) {
  return null;
 }

 const mappedData = data.map((item) => {
  return (
   <p className="text-white" key={item.id}>
    movie
   </p>
  );
 });
 return (
  <div className="px-4 md:px-12 mt-4 space-y-8">
   <div className="grid grid-cols-4 gap-2">
    <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
     {title}
    </p>
    <div>{mappedData}</div>
   </div>
  </div>
 );
};

export default MovieList;
