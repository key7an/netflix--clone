import React, { useCallback, useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import PlayBtn from "./PlayBtn";
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
    }, 1000);
  }, [onClose]);

  if (!visible) return null;

  return <div>InfoModal</div>;
};

export default InfoModal;
