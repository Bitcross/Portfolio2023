import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from "../../public/images/profile/chris2.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";


export default function Home() {
  return (
    <>
      <Head>
      <title>Chris Mooney</title>
        <meta
          name="description"
          content="Chris Mooney is a Web Designer and Developer as well as a Digital Marketer and Content Creator."
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center w-full min-h-screen dark:text-purple-300 sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16'>
           <div className="flex items-center justify-between w-full lg:flex-col">
               <div className='w-1/2 md:w-full'>
                <Image src={profilePic} alt="Chris" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                 />
               </div>
               <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Hey There!" className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl text-purple-800
                '/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                I&apos;m a freelance web designer, developer, and digital marketer. I love creating awesome websites that not only look great but also deliver a top-notch user experience. By using the latest technologies and smart marketing strategies, I help my clients achieve online success. Hit me up and let&apos;s chat!
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/resume.pdf" target={"_blank"}
                  className="flex items-center p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent bg-purple-900 text-purple-300 hover:bg-dark hover:text-purple-700 hover:border-purple-700 md:p-2 md:px-4 md:text-base
                  " download={true}
                  >Resume <LinkArrow className={"w-6 ml-1"}/>
                  
                  </Link>
                  <Link href="mailto:cmooney1423@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-purple-300 md:text-base"
                  >Email</Link>
                </div>
               </div>
           </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
