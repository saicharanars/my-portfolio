import React from "react";
import Image from "next/image";
import css from "@/public/css3-02-svgrepo-com.svg";
import docker from "@/public/docker-svgrepo-com.svg";
import express from "@/public/express-svgrepo-com.svg";
import git from "@/public/git-svgrepo-com.svg";
import github from "@/public/github-142-svgrepo-com.svg";
import html from "@/public/html5-02-svgrepo-com.svg";
import jenkins from "@/public/jenkins-svgrepo-com.svg";
import monngodb from "@/public/mongodb-svgrepo-com.svg";
import mongoose from "@/public/mongoose-svgrepo-com.svg";
import mysql from "@/public/mysql-svgrepo-com.svg";
import nestjs from "@/public/nestjs-svgrepo-com.svg";
import nextjs from "@/public/nextjs-svgrepo-com.svg";
import postgres from "@/public/postgresql-svgrepo-com.svg";
import node from "@/public/nodejs-svgrepo-com.svg";
import react from "@/public/reactjs-svgrepo-com.svg";
import redux from "@/public/redux-svgrepo-com.svg";
import sequelize from "@/public/sequelize-svgrepo-com.svg";
import tailwind from "@/public/tailwind-css-svgrepo-com.svg";
import typescript from "@/public/typescript-official-svgrepo-com.svg";
import javascript from "@/public/javascript-155-svgrepo-com.svg";
import { motion } from "framer-motion";

const CompanyLogoData = [
  
  { src: css, alt: "CSS3" },
  { src: docker, alt: "Docker" },
  { src: express, alt: "Express" },
  { src: git, alt: "Git" },
  { src: github, alt: "GitHub" },
  { src: html, alt: "HTML5" },
  { src: jenkins, alt: "Jenkins" },
  { src: monngodb, alt: "MongoDB" },
  { src: mongoose, alt: "Mongoose" },
  { src: mysql, alt: "MySQL" },
  { src: nestjs, alt: "NestJS" },
  { src: nextjs, alt: "Next.js" },
  { src: postgres, alt: "PostgreSQL" },
  { src: node, alt: "Node.js" },
  { src: react, alt: "React" },
  { src: redux, alt: "Redux" },
  { src: sequelize, alt: "Sequelize" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: typescript, alt: "TypeScript" },
  { src: javascript, alt: "JavaScript" },
];

const InfiniteScrollingLogosAnimation = () => {
  return (
    <div className="p-5  rounded-md  m-4">
      <h2 id="skills" className="text-center font-grotesk  capitalize text-5xl text-primary font-bold my-5">
      Skills

      </h2>
      <div className="flex relative py-5 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:content-['']">
        <motion.div
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none gap-16 pr-16"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {CompanyLogoData.map(({ src, alt }, innerIndex) => (
                <div key={`${alt}-${innerIndex}`} className="flex flex-row items-start gap-2">
                  <Image
                    src={src}
                    alt={alt}
                    className="h-8 w-8  flex-none"
                  />
                  <h1 className="text-3xl font-bold capitalize font-grotesk    text-accent-foreground ">{alt}</h1>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollingLogosAnimation;