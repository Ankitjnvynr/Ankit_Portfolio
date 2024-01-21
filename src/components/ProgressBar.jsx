import React from "react";

function ProgressBar() {
  let dob = new Date("2022-09-01");
  let day = dob.getDate();
  let month = dob.getMonth();
  let year = dob.getFullYear();

  const now = new Date();
  console.log(now);
  let yearDiff = now.getFullYear() - year;
  let monthDiff = now.getMonth() - month;
  let dateDiff = now.getDate() - day;

  if (yearDiff < 0) console.log("invalid date");
  else if (monthDiff > 0) {
    console.log(yearDiff);
  } else if (monthDiff === 0 && dateDiff >= 0) {
    console.log(yearDiff);
  } else {
    yearDiff = yearDiff - 1;
    if (monthDiff <= 0)
      if (dateDiff > 0) monthDiff = 12 + monthDiff;
      else monthDiff = 11 - monthDiff;
  }
  if (dateDiff < 0) {
    dateDiff = 30 + dateDiff;
    monthDiff -= 1;
  }

  if (yearDiff < 0) var innerHTML = "Invalid Date";
  else
    var calculatedExperience = yearDiff + (yearDiff>1 ? " years " : " year ") + monthDiff + (monthDiff>1?" months ":" month ") ;


  return (
    <>
      <div className="w-[100%] relative h-1 rounded-md  my-4 mb-14 flex border">
        <div className="w-[15%] h-1 rounded-md bg-blue-700"></div>
        <span class="relative flex h-3 w-3 -translate-x-1 -translate-y-1">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-700 "></span>
          <span class="absolute translate-y-5 -translate-x-8 inline-flex rounded border border-blue-700 px-3 py-1 font-bold text-blue-700 ">
            BigByte
          </span>
          <span class="absolute translate-y-[14px] bg-white   inline-flex  border-l rotate-45  border-t border-blue-700 h-3 w-3 "></span>
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:mb-24">
        <div className=" text-xl text-slate-700">
          <h2>
            <b>{calculatedExperience}</b> in   Graphic and Web Designer
          </h2>
          at <b>BigByte Innovations Pvt. Ltd.</b> Kurukshetra,
          <br />
          from September 2022 to till now <br />
          <ul className="list-disc pl-5 text-justify">
            <li>
              Designed and developed visually appealing and user-friendly
              websites for clients across various industries.
            </li>
            <li>
              Translated client requirements into creative and functional
              designs, ensuring a seamless user experience.
            </li>
            <li>
              Collaborated with cross-functional teams including developers,
              content creators, and marketing specialists to achieve project
              goals.
            </li>
            <li>
              Created and optimized graphics, illustrations, and multimedia
              content for web and print materials.
            </li>
            <li>
              Implemented responsive design techniques to ensure consistent user
              experience across different devices.
            </li>
            <li>
              Conducted usability testing and gathered user feedback to iterate
              and improve designs.
            </li>
          </ul>
        </div>
        <div>
            <img src="/images/experience.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
