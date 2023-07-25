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
    }, 300);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className="z-50 transition duration-300 bg-black
      bg-opacity-80 flex justify-center items-center overflow-x-hidden
      overflow-y-auto fixed inset-0"
    >
      <div
        className="relative w-auto mx-auto max-w-3xl rounded-md
         overflow-hidden"
      >
        <div
          className={`${isVisible ? "scale-100" : "scale-0"}
        transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md
        `}
        >
          <div className="relative h-96">
            <video
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
              autoPlay
              muted
              loop
              className="w-full brightness-[60%] object-cover h-full"
            ></video>
            <div
              onClick={handleClose}
              className=" cursor-pointer flex bg-black bg-opacity-70
               absolute top-3 right-3 h-10 w-10 rounded-full items-center
                justify-center hover:bg-red-600 hover:scale-110 transition duration-300"
            >
              <AiOutlineClose
                color="white"
                size={20}
                className=" hover:scale-110 transition duration-300 "
              />
            </div>
            <div className=" absolute bottom-[10%] left-10">
              <p
                className="text-white text-3xl md:text-4xl h-full
                lg:text-5xl font-bold mb-8"
              >
                {data?.title}
              </p>
              <div className="flex flex-row gap-4 items-center ">
                <PlayBtn movieId={data?.id} />
                <FavoriteBtn movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className=" py-8 px-12 text-green-400">
            <p className=" font-semibold text-lg">New</p>
            <p className="text-white text-lg">Duration: {data?.duration}</p>
            <p className="text-white text-lg">Genre: {data?.genre}</p>
            <p className="text-white text-lg">
              Description: {data?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
