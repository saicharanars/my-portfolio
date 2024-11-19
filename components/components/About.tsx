"use client";
import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import { Button } from "../ui/button";
import {
  ArrowRightCircle,
} from "lucide-react";


export function About() {
  return <Profile />;
}

const Profile = () => (
  <div id="me" className="grid  grid-cols-1 md:grid-cols-3 gap-3  w-full    md:px-10  bg-white rounded-lg border-2 p-16  shadow-lg   ">
    <div className="   line-clamp-2 md:col-span-2   ">
      <div className="flex flex-col items-start justify-start text-pretty gap-4 px-2 py-4 md:p-10 ">
        <p className="text-sm md:text-xl   text-secondary-foreground line-clamp-1">
          <span className="relative inline-flex mr-3 h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Available for work
        </p>
        <p className="text-xl  md:text-3xl lg:text-4xl font-grotesk font-bold text-primary line-clamp-1">
          Building the
        </p>
        <p className="text-xl md:text-3xl lg:text-4xl font-grotesk font-bold text-primary line-clamp-1">
          {" "}
          Future with Design
        </p>

        <p className="text-xl  md:text-3xl lg:text-4xl font-grotesk font-bold text-primary line-clamp-1">
          & Code Synergy
        </p>
        <p className="text-md md:text-2xl   text-secondary-foreground line-clamp-1">
          Full Stack Developer
        </p>
        <Button
          variant={"outline"}
          className="px-2 py-2 mt-4 md:px-4 flex flex-row justify-start align-middle   gap-2 rounded-xl text-[#fd7e41] border-[#fd7e41] font-bold  tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
        >
          Get in Touch{" "}
          <span className="my-auto">
            <ArrowRightCircle className="h-4 w-4 text-[#fd7e41]" />
          </span>
        </Button>
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>

    <div className="order-first md:order-last my-auto mx-2">
      <div
        className="px-2 py-auto rounded-full  my-auto h-52 mx-4 w-52 md:h-60 md:w-60  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/KzBv68M/profile.jpg')",
        }}
      ></div>
    </div>
  </div>
);
