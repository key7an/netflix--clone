import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import useBillboard from "@/hooks/useBillboard";

const Billboard = () => {
  const { data } = useBillboard();

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[40%] ml-8 md:ml-12">
        <p
          className="text-white text-2xl md:text-4xl h-full
          w-[50%] lg:text-6xl font-bold drop-shadow-xl opacity-80
        "
        >
          {data?.title}
        </p>
        <p
          className="text-white text-[10px] mt-3
        md:text-lg md:mt-8 w-[90%] lg:w-[50%] md:w-[80%]
        drop-shadow-xl lg:text-2xl opacity-70
        "
        >
          {data?.description}
        </p>
        <div className="flex flex-row items-center md:mt-4 gap-3">
          <button
            className="bg-white text-white bg-opacity-30
          rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs
          lg:text-lg font-semibold flex flex-row items-center
          hover:bg-opacity-10 transition mt-4
          "
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
