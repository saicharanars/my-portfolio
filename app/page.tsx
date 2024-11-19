"use client";

import { About } from "@/components/components/About";
import InfiniteScrollingLogosAnimation from "@/components/components/Infinite-Scrolling-Logos-Animation";
import Projects from "@/components/components/Projects";
import { Button } from "@/components/ui/button";
import { HoveredLink } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { DownloadIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-1  items-center justify-items-center mx-1   py-auto gap-16  font-sans">
        <Navbar />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center  max-w-5xl px-1 mt-24 mx-auto  md:p-4">
        <About />
        <div className=" max-w-5xl">
          <InfiniteScrollingLogosAnimation />
        </div>
        <div className=" max-w-5xl">
          <Projects />
        </div>
      </main>
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-0  max-w-5xl mx-auto z-50 my-6 grid grid-cols-2 md:grid-cols-6  items-center  bg-white border-r-2 rounded-xl w-full p-4",
        className
      )}
    >
      <div className="flex flex-row items-center  justify-start md:justify-center gap-3 px-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue-900 md:h-10 md:w-10"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path>
        </svg>
        <h1 className="text-sm md:text-xl line-clamp-1 font-semibold">
          Sai <span className=" text-[#fd7e41]">Charan</span>{" "}
        </h1>
      </div>
      <div className="hidden md:flex flex-row justify-center gap-5 col-span-4 ">
        <HoveredLink href="#">Home</HoveredLink>
        <HoveredLink href="#me"> Me</HoveredLink>
        <HoveredLink href="#skills"> Skills</HoveredLink>
        <HoveredLink href="#projects"> projects</HoveredLink>

        <HoveredLink href="#"> blog</HoveredLink>
      </div>
      <Link
        href={
          "https://drive.google.com/file/d/1srM1tzdqAbOE97lN_9OjheCJQFyGk_Y1/view?usp=sharing"
        }
        target="_blank"
        className="hidden md:block m-auto"
      >
        <Button className="px-2 py-2 md:px-4 flex flex-row justify-start align-middle   gap-2 rounded-xl bg-[#fd7e41] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
          Resume
          <span className="my-auto">
            <DownloadIcon className="h-4 w-4 text-white" />
          </span>
        </Button>
      </Link>
      <div className="md:hidden justify-self-end">
        <MenuIcon className="w-6 h-6 " />
      </div>
    </div>
  );
}
