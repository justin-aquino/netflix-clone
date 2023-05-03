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
 return <div>Modal</div>;
};

export default InfoModal;
