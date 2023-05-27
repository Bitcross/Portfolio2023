import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/chris.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
      <title>Chris Mooney | About Page</title>
        <meta name="description" content="Chris Mooney is a Web Designer and Developer as well as a Digital Marketer and Content Creator." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center text-purple-300">
        <Layout className="pt-16">
          <AnimatedText
            text="Let's Talk About Me"
            className="mb-16 !leading-tight text-5xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hey, I&apos;m Chris, a web developer and digital marketer and content creator. I&apos;m always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>

              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="my-4 font-medium">
                I began my journey into tech back in 2019 when I made the decision to learn to code. I dabbled in high school, but now was the time to take it seriously. I poured my weekends and nights into learning as much as I could so I could change my family&apos;s lives and my own with new opportunities.
              </p>

              <p className="font-medium">
                When I&apos;m not working on a website, design project or marketing materials, I can usually be found with a controller in my hands. I&apos;ve been a passionate gamer since I was 6 and that hasn&apos;t shown any signs of subsiding.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid
 p-8 bg-dark border-gray-400 xl:col-span-4 md:order-1 md:col-span-8
"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-gray-400" />
              <Image
                src={profilePic}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
