import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/PittsburghVideoGameCon.png";
import project2 from "../../public/images/projects/CarbCrush.png";
import project3 from "../../public/images/projects/wordle.jpg";
import project4 from "../../public/images/projects/bookly.jpg";
import project5 from "../../public/images/projects/ninjacoffee.png";
import project6 from "../../public/images/projects/jnn.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid  shadow-2xl p-12 bg-dark border-gray-400
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-gray-400
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-purple-600 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-purple-700 hover:text-purple-500 lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-purple-300 sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 text-purple-700 hover:text-purple-300">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg p-2 px-6 text-lg font-semibold border-2 border-solid border-transparent bg-purple-700 text-purple-300 hover:bg-purple-300 hover:text-purple-700 hover:border-purple-700
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid p-6 relative bg-dark border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] 
    rounded-br-3xlbg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-purple-500 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl text-purple-700 hover:text-purple-500">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base text-purple-300"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6 text-purple-300">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Chris Mooney | Projects Page</title>
        <meta
          name="description"
          content="Chris Mooney is a Web Designer and Developer as well as a Digital Marketer and Content Creator."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Check Out My Work!"
            className="mb-16 !leading-tight text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Pittsburgh Video Game Con"
                summary="Event website for a Pittsburgh Video Game Convention featuring an event schedule, local hotels, and an overview of the David L. Lawrence Convention Center."
                img={project1}
                link="https://bitcross.github.io/PittsburghVideoGameCon/"
                github="https://github.com/Bitcross/PittsburghVideoGameCon"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="E-Commerce"
                title="Carb Crush Cookbook Landing Page"
                img={project2}
                link="https://bitcross.github.io/CarbCrush/"
                github="https://github.com/Bitcross/CarbCrush"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Game"
                title="Wordle Clone"
                img={project3}
                link="https://bitcross.github.io/WordleClone/"
                github="https://github.com/Bitcross/WordleClone"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="App"
                title="Bookly Book Reader"
                summary="A book reader pulling from public domain complete with text to speech!"
                img={project4}
                link="https://bitcross.github.io/Bookly/"
                github="https://github.com/Bitcross/Bookly"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                img={project5}
                title="Ninja Coffee"
                link="https://bitcross.github.io/NinjaCoffee/"
                github="https://github.com/Bitcross/NinjaCoffee"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                img={project6}
                title="JNN Services"
                link="https://bitcross.github.io/JNNServices/"
                github="https://github.com/Bitcross/JNNServices"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
