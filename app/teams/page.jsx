"use client";

import React from "react";
import "./OurTeam.scss";

// data Image
import teamImageOne from "./dataImage/dataImage-1.jpg";
import teamImageTwo from "./dataImage/dataImage-2.jpg";
import teamImageThree from "./dataImage/dataImage-3.jpg";
import teamImageFour from "./dataImage/dataImage-4.jpg";
import Image from "next/legacy/image";

// Team Data
const teamMembers = [
  {
    name: "Name Of Team",
    jobOne: "Frontend Developer",
    jobTwo: "UI/UX Design",
    image: teamImageOne,
  },
  {
    name: "Name Of Team",
    jobOne: "Backend Developer",
    jobTwo: "Database Engineer",
    image: teamImageTwo,
  },
  {
    name: "Name Of Team",
    jobOne: "Marketing",
    jobTwo: "Content Relationship",
    image: teamImageThree,
  },
  {
    name: "Name Of Team",
    jobOne: "Server Engineer",
    jobTwo: "Backend Developer",
    image: teamImageFour,
  },
];

function page() {
  return (
    <>
      <div className="ourTeam-container">
        <div className="ourTeam-wrapper pt-[10rem]">
          <div className="relative teamItems">
            <span className="flex flex-col items-center text-center align-middle teamHeader">
              <h1 className="text-5xl md:text-6xl xl:text-9xl">Our Team</h1>
              <p className="py-8 text-center lg:w-[40rem] xl:w-[40rem] items-center text-sm xl:text-base">
                Kekuatan kami terletak pada orang-orang kami. Tim kami adalah
                kelompok profesional yang beragam dan dinamis yang berdedikasi
                untuk mencapai keunggulan dalam setiap aspek bisnis kami.
              </p>
            </span>
          </div>
          <div className="teamItems mt-[13rem]">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 teamGrid">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="p-4 rounded-lg teamsGrid-item bg-slate-900"
                >
                  <div className="flex flex-col overflow-hidden teamItem-about">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        height={900}
                        width={900}
                        className="xl:h-[30rem] md:h-[25rem] h-[15rem] w-[25rem] text-center align-bottom rounded-lg xl:w-[40rem] teamImage hover:scale-125 ease-in-out duration-1000 object-cover"
                        style={{
                          width: "100%",
                        }}
                      />
                    </div>
                    <span className="my-4 font-bold teamName">
                      {member.name}
                    </span>
                    <div className="flex gap-2.5 teamJobs-items flex-wrap text-sm">
                      <span className="px-3 rounded-lg py-2.5 border teamJobs">
                        {member.jobOne}
                      </span>
                      <span className="px-3 rounded-lg py-2.5 border teamJobs">
                        {member.jobTwo}
                      </span>
                    </div>
                  </div>
                  <p className="my-6 teamAbout">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quidem, nisi?
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
