import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteBtn from "./FavoriteBtn";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";

interface InfoModalProps {
 visible?: boolean;
 onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
 const [isVisible, setIsVisible] = useState(!!visible);
 const { movieId } = useInfoModal();
 const { data = {} } = useMovie(movieId);

 useEffect(() => {
  setIsVisible(!!visible);
 }, [visible]);

 const handleClose = useCallback(() => {
  setIsVisible(false);
  setTimeout(() => {
   onClose();
  }, 300);
 }, [onClose]);

 if (!visible) {
  return null;
 }
 return (
  <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
   <div className="relative auto w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
    <div
     className={`${
      isVisible ? "scale:100" : "scale-0"
     } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
    >
     <div className="relative h-96">
      <video
       src={data?.videoUrl}
       poster={data?.thumbnailUrl}
       className="w-full brightness-[60%] object-cover h-full"
      ></video>
     </div>
    </div>
   </div>
  </div>
 );
};

export default InfoModal;
