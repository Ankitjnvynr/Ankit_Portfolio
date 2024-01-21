import React from "react";
import SocialMediaPost from "./workItems/SocialMediaPost";

function MyWork() {
  const SocialMediaPosts = {
    image1: {
      src: "/images/kichri utsav gieo gita.jpg",
      alt: "GIEO Gita Kichri utsav",
    },
    image2: {
      src: "/images/kichri utsav gieo gita.jpg",
      alt: "GIEO Gita Kichri utsav",
    },
    image3: {
      src: "/images/kichri utsav gieo gita.jpg",
      alt: "GIEO Gita Kichri utsav",
    },
  };

  return (
    <>
      {/* Graphic designing */}
      <h1 className="text-center text-3xl font-bold mt-6 mb-2 text-blue-700 ">
        {" "}
        My Creativivty
      </h1>
      <h2 className="text-2xl">Graphic Designs:- </h2>
      <p className="text-xl text-slate-600 text-justify">
        Mostly for the Graphic Designing I&apos;m mostly using Adobe Photoshop.
        And also I can use Canva for designing.
      </p>
      <div className="flex flex-wrap gap-2 my-3">
      {Object.entries(SocialMediaPosts).map(([key, image]) => {
        return <SocialMediaPost className='w-[10%] border-4  md:w-1/3' key={key} src={image.src} alt={image.alt} />;
      })}
      </div>
    </>
  );
}

export default MyWork;
