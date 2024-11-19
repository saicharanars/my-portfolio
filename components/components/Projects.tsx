"use client";
import Image from "next/image";
import React from "react";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import mystore from "@/public/mystore1.avif";
import jobboard from "@/public/jobboard2.avif";
import expense from "@/public/expense.png";
import grouptalk from "@/public/grouptalk.png";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "My Store",
    description:
      " A full-stack e-commerce application with a clean,responsive UI for an intuitive shopping experience. ",
    imageSrc: mystore,
    repo: "https://github.com/saicharanars/mystore",
    link: "https://mystore-client.vercel.app/",
  },
  {
    title: "JobHunt",
    description:
      "A modern job board platform designed for seamless interaction between job seekers and employers",
    imageSrc: jobboard,
    link: "https://jobboard-4vpn.vercel.app/",
    repo: "https://github.com/saicharanars/jobboard",
  },
  {
    title: "Expense Tracker",
    description:
      "Expense Tracker is a simple app for logging expenses and understanding spending habits.",
    imageSrc: expense,
    repo: "https://github.com/saicharanars/expense-tracker",
  },
  {
    title: "Group Talk",
    description:
      "A chat app with live messaging, quick message access, and smooth media sharing.",
    imageSrc: grouptalk,
    repo: "https://github.com/saicharanars/group-talk",
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <div className="p-5 rounded-md m-4 " id="projects">
      <h2 className="text-center font-grotesk  capitalize text-5xl text-primary font-bold my-5">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <CardContainer
            className="py-2 flex items-center justify-center"
            key={index}
          >
            <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold font-grotesk  hover:text-[#fd7e41] text-neutral-800 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.imageSrc}
                  height="1000"
                  width="1000"
                  loading="lazy"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-end items-end gap-2 align-middle mt-20">
                {project.link && (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    aria-label="Try now"
                  >
                    <Globe className="h-6 w-6" />
                  </CardItem>
                )}
                {project.repo && (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.repo}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    aria-label="repo link"
                  >
                    <Github className="h-6 w-6" />
                  </CardItem>
                )}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    
    </div>
  );
};

export default Projects;
