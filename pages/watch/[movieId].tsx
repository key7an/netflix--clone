import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

import useMovie from "@/hooks/useMovie";

const Watch = () => {
  const router = useRouter();

  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className=" h-screen w-screen bg-black">
      <nav
        className="fixed w-full p-4 z-10 flex items-center gap-8
         bg-black bg-opacity-70
        "
      >
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          color="white"
          size={30}
          className=" cursor-pointer hover:scale-110 hover:opacity-70"
        />
        <p className=" text-white text-xl md:text-3xl font-bold  ">
          <span className=" font-light">Watching: {"  "}</span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        autoPlay
        controls
        className="h-full w-full"
      ></video>
    </div>
  );
};

export default Watch;
