import Head from 'next/head'
import { AiOutlineTwitter, AiFillYoutube, AiFillPhone, AiFillMail, AiFillHtml5 } from 'react-icons/ai'
import {
	FaLinkedinIn,
	FaCss3Alt,
	FaReact,
	FaFacebook,
	FaPinterest,
	FaTiktok,
	FaInstagram,
	FaYoutube,
	FaTwitter
} from 'react-icons/fa'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
	SiJavascript,
	SiNextdotjs,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiFigma,
	SiCanva,
	SiWebflow,
	SiSquarespace,
	SiWordpress
} from 'react-icons/si'
import { HiDocumentText } from 'react-icons/hi'
import { useState } from 'react'
import Chris from '../public/chris.png'
import code from '../public/code.png'
import design from '../public/design.png'
import design2 from '../public/design2.png'
import Image from 'next/image'
import wordle from '../public/wordle.jpg'
import pvgc from '../public/PittsburghVideoGameCon.png'
import carbcrush from '../public/CarbCrush.png'
import Andy from '../public/andrewYoung.png'
import Anon from '../public/anonymous.png'
export default function Home() {
	return (
		<div>
			<Head>
				<title>Chris Mooney Web Design</title>
				<meta name="description" content="Chris Mooney Web Development and Design" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
			</Head>
			<main className=" px-10 bg-gray-900 md:px-20 lg:px-40">
				<section className="relative min-h-screen flex flex-col items-center justify-center text-center py-0 px-3">
					<div class="video-docker absolute top-0 w-screen h-full overflow-hidden">
						<video
							class="min-w-full min-h-full absolute object-cover"
							src="/bgvid.webm"
							autoPlay
							muted
							loop
						/>
					</div>
					<div class="video-content">
						<div className="mx-auto w-80 h-80 relative md:h-132 md:w-96">
							<Image src={Chris} layout="fill" objectFit="contain" alt="Chris Portrait" />
						</div>
						<div className="text-center p-10 py-10">
							{/* <h2 className="font-tagtype text-5xl py-2 text-purple-700 font-medium  md:text-6xl">
								Chris Mooney
							</h2> */}
							<h3 className="text-2xl py-2 text-gray-400 md:text-3xl">
								<span className="text-purple-600 pixels">Developer</span>{' '}
								<span className="text-base pr-1">and</span>{' '}
								<span className="font-tagtype text-purple-600">Designer.</span>
							</h3>
							<p className="text-md py-5 leading-8 text-gray-500 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
								Hey there! I&apos;m a freelance web designer, developer, and digital marketer. I love
								creating awesome websites that not only look great but also deliver a top-notch user
								experience. By using the latest technologies and smart marketing strategies, I help my
								clients achieve online success. Hit me up and let&apos;s chat!
							</p>
							<div className="text-5xl flex justify-center gap-8 py-3 text-gray-400">
								{/* <a
									href=""
									className=" drip bg-gradient-to-b from-purple-500 to-purple-900 rounded-full"
								>
									<AiOutlineTwitter className="text-gray-900 hover:text-purple-400" />
								</a> */}

								<a
									href=""
									className=" drip bg-gradient-to-b from-purple-500 to-purple-900 rounded-full"
								>
									<FaLinkedinIn className="text-gray-900 p-2 hover:text-purple-400" />
								</a>
								{/* <a href="" className="drip bg-gradient-to-b from-purple-500 to-purple-900 rounded-full">
									<AiFillYoutube className="text-gray-900 p-1 hover:text-purple-400" />
								</a> */}
								<a
									href="/resume.pdf"
									target="_blank"
									className="drip bg-gradient-to-b from-purple-500 to-purple-900 rounded-full"
								>
									<HiDocumentText className="text-gray-900 p-1 hover:text-purple-400" />
								</a>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="text-center pt-10">
						<h3 className="font-bombing text-6xl py-1 text-purple-700 ">Check Out My Services!</h3>
						<p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-200">
							Since the beginning, my goal has always been to offer
							<span className="text-purple-500"> affordable </span>
							services without sacrificing <span className="text-purple-500">quality </span>
							while working with businesses to meet their goals.
						</p>
					</div>
					<div className="lg:flex gap-10">
						<div className="text-center shadow-lg p-10 rounded-xl my-10  bg-gradient-to-t from-purple-800 to-black text-white flex-1">
							<Image src={design2} width={500} height={300} alt="Web Design and Development" />
							<p className="py-2">
								Revamp your business game with our kickass web design and development services! We
								create jaw-dropping websites that not only grab attention but also skyrocket your online
								presence, attract customers, and take your brand to the next level. Let&apos;npms rock
								the digital world together!
							</p>
							<h4 className="py-4 text-purple-600 dark:text-white">Tools:</h4>
							<div className="flex flex-col space-y-4 items-center">
								<div className="inline-flex space-x-2 items-center">
									<SiCanva className="text-purple-300 text-xl" />
									<span>Canva</span>
									<AiFillHtml5 className="text-purple-300 text-xl" />
									<span>HTML</span> <FaCss3Alt className="text-purple-300 text-xl" />
									<span>CSS</span>
								</div>
								<div className="inline-flex space-x-2 items-center">
									<FaTiktok className="text-purple-300 text-xl" />
									<span>JavaScript</span>
									<FaReact className="text-purple-300 text-xl" />
									<span>React</span>
									<SiWordpress className="text-purple-300 text-xl" />
									<span>WordPress</span>
								</div>
							</div>
							{/* <div className="flex flex-col space-y-4 items-center">
								<div className="inline-flex space-x-2 items-center">
									<SiAdobephotoshop className="text-purple-300 text-xl" />
									<span>Photoshop</span> <SiAdobeillustrator className="text-purple-300 text-xl" />
									<span>Illustrator</span> <SiFigma className="text-purple-300 text-xl" />
									<span>Figma</span>
								</div>
								<div className="inline-flex space-x-2 items-center">
									<SiCanva className="text-purple-300 text-xl" />
									<span>Canva</span> <SiWebflow className="text-purple-300 text-xl" />
									<span>Webflow</span> <SiSquarespace className="text-purple-300 text-xl" />
									<span>Squarespace</span>
								</div>
							</div> */}
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-t from-purple-800 to-black text-white flex-1">
							<Image src={code} width={500} height={320} alt="Digital Marketing and Content Creation" />
							<p className="py-2">
								Elevate your brand with our killer digital marketing services! From captivating content
								creation to strategic social media campaigns, we&apos;ll ignite your online presence and
								fuel your business growth. Let&apos;s conquer the digital realm together and leave a
								lasting impression on your target audience!
							</p>
							<h4 className="py-4 text-purple-600 dark:text-white">Let&apos;s Get You Set Up On:</h4>
							<div className="flex flex-col space-y-4 items-center">
								<div className="inline-flex space-x-2 items-center">
									<FaFacebook className="text-purple-300 text-xl" />
									<span>Facebook</span> <FaInstagram className="text-purple-300 text-xl" />
									<span>Instagram</span> <FaPinterest className="text-purple-300 text-xl" />
									<span>Pinterest</span>
								</div>
								<div className="inline-flex space-x-2 items-center">
									<FaTiktok className="text-purple-300 text-xl" />
									<span>Tiktok</span> <FaTwitter className="text-purple-300 text-xl" />
									<span>Twitter</span>
								</div>
							</div>
						</div>
						{/* <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-b from-purple-800 text-white flex-1">
							<Image src={consulting} width={150} height={150} />
							<h3 className="text-lg font-medium pt-8 pb-2 ">Social Media Marketing</h3>
							<p className="py-2">
								Trying to reach more potential customers?<br /> I can help.
							</p>
							<h4 className="py-4 text-purple-600 dark:text-white">Platforms I know</h4>
							<p className="text-white py-1 dark:text-white">Facebook</p>
							<p className="text-white py-1 dark:text-white">Twitter</p>
							<p className="text-white py-1 dark:text-white">TikTok</p>
						</div> */}
					</div>
				</section>
				<section className="pb-10">
					<div className="text-center">
						<h3 className="font-bombing text-6xl py-1 text-purple-700 ">Some of my Work!</h3>
					</div>
					<div class="flex justify-center pt-8">
						<div class="w-full flex flex-col md:flex-row rounded-lg bg-gradient-to-b from-purple-800 text-white shadow-lg">
							<div className="basis-1/2 w-full h-full overflow-hidden sm:h-80">
								<Image
									className="object-cover rounded-l-lg"
									width={'100%'}
									height={'100%'}
									layout="responsive"
									src={carbcrush}
									alt="Carb Crush"
								/>
							</div>
							<div class="basis-1/2 p-6 flex flex-col justify-start">
								<h5 class=" text-4xl font-medium mb-2 font-tagtype">Carb Crush</h5>
								<p class=" text-base mb-4">
									Carb Crush is a Keto Cookbook containing 50 recipes covering Breakfast, Lunch,
									Dinner and Desert. Currently available on Amazon Kindle!
								</p>
								<p class="mt-8">Technology Used:</p>
								<div className="inline-flex space-x-2 items-center pt-2">
									<AiFillHtml5 className="text-purple-300 text-xl" />
									<span>HTML</span> <FaCss3Alt className="text-purple-300 text-xl" />
									<span>CSS</span> <SiJavascript className="text-purple-300 text-xl" />
									<span>JavaScript</span>
								</div>
								<div className="pt-4 flex space-x-5">
									<a
										className="basis-1/2 text-center font-semibold px-3 py-2 border-none rounded-md bg-gradient-to-r from-purple-700 to-purple-900 text-gray-900 hover:bg-gradient-to-l hover:text-gray-300"
										href="https://bitcross.github.io/CarbCrush/"
										target="_blank"
										rel="noreferrer"
									>
										Demo
									</a>
									<a
										className="basis-1/2 text-center font-semibold px-3 py-2 border-none rounded-md bg-gradient-to-r from-purple-900 to-purple-700 text-gray-900 hover:bg-gradient-to-l hover:text-gray-300"
										href="https://github.com/Bitcross/CarbCrush"
										target="_blank"
										rel="noreferrer"
									>
										Github
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="flex justify-center pt-8">
						<div class="w-full flex flex-col md:flex-row rounded-lg bg-gradient-to-b from-purple-800 text-white shadow-lg">
							<div className="basis-1/2 w-full h-full overflow-hidden sm:h-80">
								<Image
									className="object-cover rounded-l-lg"
									width={'100%'}
									height={'100%'}
									layout="responsive"
									src={pvgc}
									alt="Pittsburgh Video Game Con"
								/>
							</div>
							<div class="p-6 flex flex-col basis-1/2 justify-start">
								<h5 class=" text-4xl font-medium mb-2 font-tagtype">Pittsburgh Video Game Con</h5>
								<p class=" text-base mb-4">
									Event website for a Pittsburgh Video Game Convention featuring an event schedule,
									local hotels, and an overview of the David L. Lawrence Convention Center.
								</p>
								<p class="mt-8">Technology Used:</p>
								<div className="inline-flex space-x-2 items-center pt-2">
									<AiFillHtml5 className="text-purple-300 text-xl" />
									<span>HTML</span> <FaCss3Alt className="text-purple-300 text-xl" />
									<span>CSS</span> <SiJavascript className="text-purple-300 text-xl" />
									<span>JavaScript</span>
								</div>
								<div className="pt-4 flex space-x-5">
									<a
										className="basis-1/2 text-center font-semibold px-3 py-2 border-none rounded-md bg-gradient-to-r from-purple-700 to-purple-900 text-gray-900 hover:bg-gradient-to-l hover:text-gray-300"
										href="https://bitcross.github.io/PittsburghVideoGameCon/"
										target="_blank"
										rel="noreferrer"
									>
										Demo
									</a>
									<a
										className="basis-1/2 text-center font-semibold px-3 py-2 border-none rounded-md bg-gradient-to-r from-purple-900 to-purple-700 text-gray-900 hover:bg-gradient-to-l hover:text-gray-300"
										href="https://github.com/Bitcross/PittsburghVideoGameCon"
										target="_blank"
										rel="noreferrer"
									>
										Github
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="flex justify-center pt-8">
						<div class="w-full flex flex-col md:flex-row rounded-lg bg-gradient-to-b from-purple-800 text-white shadow-lg">
							<div className="basis-1/2 w-full h-full overflow-hidden sm:h-80">
								<Image
									className="object-cover rounded-l-lg"
									width={'100%'}
									height={'100%'}
									layout="responsive"
									src={wordle}
									alt="Wordle"
								/>
							</div>
							<div class=" basis-1/2 p-6 flex flex-col justify-start">
								<h5 class=" text-4xl font-medium mb-2 font-tagtype">Wordle</h5>
								<p class=" text-base mb-4">
									Wordle! The word game that caught fire online before being sold to the WallStreet
									Journal for an outrageous amount of money! You have five guesses and the word
									changes daily!
								</p>
								<p class="mt-8">Technology Used:</p>
								<div className="inline-flex space-x-2 items-center pt-2">
									<AiFillHtml5 className="text-purple-300 text-xl" />
									<span>HTML</span> <FaCss3Alt className="text-purple-300 text-xl" />
									<span>CSS</span> <SiJavascript className="text-purple-300 text-xl" />
									<span>JavaScript</span>
								</div>
								<div className="pt-4 flex space-x-5">
									<a
										className="basis-1/2 text-center font-semibold px-3 py-2 border-none rounded-md bg-gradient-to-r from-purple-700 to-purple-900 text-gray-900 hover:bg-gradient-to-l hover:text-gray-300"
										href=""
										target="_blank"
									>
										Demo
									</a>
									<a
										className="basis-1/2 text-center font-semibold px-3 py-2 border-none rounded-md bg-gradient-to-r from-purple-900 to-purple-700 text-gray-900 hover:bg-gradient-to-l hover:text-gray-300"
										href=""
										target="_blank"
									>
										Github
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="text-center">
						<h3 className="font-bombing text-6xl py-1 text-purple-700 ">What people are saying...</h3>
					</div>
					<div className="lg:flex gap-10">
						<div className="text-center shadow-lg p-10 rounded-xl my-10  bg-gradient-to-b from-purple-800 text-white flex-1">
							<Image src={Andy} width={100} height={100} alt="Andrew Young" />
							<h4 className="text-4xl font-medium font-bombing text-purple-300">Andrew Young</h4>
							<h6 className="text-md pb-5">Full-stack Developer and Veteran</h6>
							<p className="py-2">
								Chris is not only a friend, but also someone I can look to for guidance and help. We
								have very similar interests and end goals, and he has been giving me advice throughout
								each step as well as assisting me with projects of my own. My focus is primarily on
								back-end development, and anytime I need help with styling my projects to make them look
								amazing he is there with a quick turn around. I have never been disappointed with
								anything he has given me, and will always go to him first before anyone else.
							</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10  bg-gradient-to-b from-purple-800 text-white flex-1">
							<Image src={Anon} width={100} height={100} alt="Anonymous" />
							<h4 className="text-4xl font-medium font-bombing text-purple-300">Shayne Eakles</h4>
							<h6 className="text-md pb-5">Owner @ JNN Services</h6>
							<p className="py-2">
								I wanted to say thank you for providing me with an excellent website at a great price!
								As a small business owner I look for value in my purchases and that&apos;s exactly what
								I found with you! Your outstanding customer support and thorough communication showed me
								immediately that you had my interests in mind before your own. Thank you for seamlessly
								updating my presence on the web!
							</p>
						</div>
					</div>
				</section>
				<section>
					<div className="flex w-full pt-6 justify-center items-center">
						<div className="bg-gradient-to-b from-purple-800 flex flex-col w-full p-8 sm:p-12 rounded-xl shadow-lg text-white items-center text-center">
							<div className="flex flex-col justify-between space-y-8">
								<div>
									<h1 className="font-bombing text-5xl tracking-wide">Contact Me</h1>
									<p className="pt-2 text-purple-100 text-sm">Like what you see? Let&apos;s chat!</p>
								</div>
								<div className="flex flex-col space-y-4 items-center">
									<div className="inline-flex space-x-2 items-center">
										<AiFillPhone className="text-purple-300 text-xl " />
										<span>
											<a href="tel:+17249441891" className="hover:text-purple-700">
												724.944.1891
											</a>
										</span>
									</div>
									<div className="inline-flex space-x-2 items-center">
										<AiFillMail className="text-purple-300 text-xl" />
										<span>
											<a href="mailto:cmooney1423@gmail.com" className="hover:text-purple-700">
												cmooney1423@gmail.com
											</a>
										</span>
									</div>
									<div className="text-3xl flex space-x-4 items-center">
										<a href="">
											<FaLinkedinIn className="text-purple-300 hover:text-purple-800" />
										</a>
										<a href="/resume.pdf" target="_blank" className="">
											<HiDocumentText className="text-purple-300 hover:text-purple-800" />
										</a>
									</div>
								</div>
							</div>
							{/* <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                    <form action="" className='flex flex-col space-y-4'>
                        <div>
                          <label htmlFor="" className='text-sm'>Your name</label>
                        
                          <input type="text" placeholder='Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 mt-2'/>
                        </div>
                        <div>
                          <label htmlFor="" className='text-sm'>Email Address</label>
                        
                          <input type="Email" placeholder='Email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 mt-2'/>
                        </div>
                        <div>
                          <label htmlFor="" className='text-sm'>Message</label>
                        
                          <textarea type="Email" placeholder='Message' 
                          rows="4"
                          className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 mt-2'/>
                        </div>
                        <button className='inline-block self-end bg-purple-700 text-white font-medium rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
                    </form>
                  </div> */}
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
