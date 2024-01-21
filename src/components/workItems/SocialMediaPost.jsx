import React from "react";

function SocialMediaPost({ src, alt }) {
  return (
    <div className='w-[100%] border  md:w-1/3'>
      <img
        className="rounded w-[100%] "
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default SocialMediaPost;
