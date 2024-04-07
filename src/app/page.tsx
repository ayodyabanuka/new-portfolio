"use client"

import Box from "@/components/box"
import MapboxComponent from "@/components/map"
import ThemeSwitch from "@/components/themeSwitch"
import Image from "next/image"
import Link from "next/link"
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { CiFileOn } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion, useAnimation } from 'framer-motion';
import { useState } from "react"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { PinContainer } from "@/components/ui/3d-opin"



const Home = () => {

  const [downloading, setDownloading] = useState(false);
  const controls = useAnimation();

  const startDownload = async () => {
    setDownloading(true);
    await controls.start({ rotate: 360, transition: { duration: 2 } });
    setDownloading(false);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Box className="flex col-span-1 md:col-span-2 w-full p-0 pb-5 flex-col h-fit md:h-80">
        <div className="flex justify-between items-start">
          <div className="h-40 rounded-2xl pt-4 ">
            {/* <video className="h-full rounded-2xl" autoPlay loop muted playsInline src="/test.mov" ></video> */}
            <img src="/me.gif" className="h-full rounded-2xl" alt="" />
          </div>
          <ThemeSwitch />
        </div>
        <div className="font-bold p-5 gap-2 text-2xl">
          <span>
            Hi! I am Ayodya Banuka.Welcome to
            <span className="text-green-600">
              {" "}my portfolio
            </span>
          </span>
          .As a Senior Software Engineer, I combine{'  '}
          <span className="text-xl px-3 pb-1 pt-0.5 rounded-md text-white bg-blue-900 font-mono">technical expertise</span>
          {'  '}with{'  '}
          <span className="inline-block border border-[#9D51FF] px-1 mr-1 relative">
            <div className="absolute w-[8px] h-[8px] border border-[#9D51FF] bg-white dark:bg-gray-800 -top-[4px] -left-[4px]">
            </div>
            <div className="absolute w-[8px] h-[8px] border border-[#9D51FF] bg-white dark:bg-gray-800 -top-[4px] -right-[4px]">
            </div>
            <div className="absolute w-[8px] h-[8px] border border-[#9D51FF] bg-white dark:bg-gray-800 -bottom-[4px] -left-[4px]">

            </div>
            <div className="absolute w-[8px] h-[8px] border border-[#9D51FF] bg-white dark:bg-gray-800 -bottom-[4px] -right-[4px]">
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 translate-y-full mt-[18px] px-1 pb-0.5 rounded bg-[#9D51FF] text-white text-xs font-semibold">
              Hug✗Hug
            </div>
            creative flair
          </span>
          to deliver
          <span className="text-purple-600">
            {" "}innovative solutions.
          </span>
        </div>
      </Box>

      <Box className="p-0 w-full  h-80">
        <MapboxComponent />
      </Box>

      <Box className="flex justify-center items-center flex-col col-span-1  h-80 gap-3 w-full bg-[url('/bluedown.png')]">
        <div className="flex gap-3">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link className="border p-3 rounded-lg flex items-center gap-2 text-black dark:text-gray-400 bg-white dark:bg-[#2E3947] hover:bg-gray-200 dark:hover:border-gray-400 dark:border transition-all group duration-100" href={"/"}>
              <FaLinkedinIn />
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link className="border p-3 rounded-lg flex items-center gap-2 text-black dark:text-gray-400 bg-white dark:bg-[#2E3947] hover:bg-gray-200 dark:hover:border-gray-400 dark:border transition-all group duration-100" href={"/"}>
              <FaInstagram />
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link className="border p-3 rounded-lg flex items-center gap-2 text-black dark:text-gray-400 bg-white dark:bg-[#2E3947] hover:bg-gray-200 dark:hover:border-gray-400 dark:border transition-all group duration-100" href={"/"}>
              <FaFacebookF />
            </Link>
          </motion.div>
        </div>
        <div className="flex gap-3">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link className="border p-3 rounded-lg flex items-center gap-2 text-black dark:text-gray-400 bg-white dark:bg-[#2E3947] hover:bg-gray-200 dark:hover:border-gray-400 dark:border transition-all duration-100" href={"/"}>
              <FaBehance />
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link className="border p-3 rounded-lg flex items-center gap-2 text-black dark:text-gray-400 bg-white dark:bg-[#2E3947] hover:bg-gray-200 dark:hover:border-gray-400 dark:border transition-all duration-100" href={"/"}>
              <FaXTwitter />
            </Link>
          </motion.div>
        </div>
      </Box>
      <Box className="relative h-80 w-full grid col-span-1  group">
        <div>
          <div style={{ position: 'absolute', top: '56%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Image src="/folderBack.png" width={150} height={150} alt="" />
          </div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} >
            <Image src="/doc.png" className="group-hover:-translate-y-6 transition-all duration-500 ease-in-out" width={120} height={120} alt="" />
          </div>
          <div style={{ position: 'absolute', top: '59%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Image src="/folderFront.png" width={150} height={150} alt="" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 p-3 group">
          <button className="border w-fit p-3 rounded-full flex items-center gap-2 text-base text-black dark:text-gray-400 bg-white dark:bg-[#2E3947] hover:bg-gray-200 dark:hover:border-gray-400 dark:border transition-all group duration-500 ease-in-out">
            <CiFileOn />
            <div className="opacity-0 hidden group-hover:opacity-100 group-hover:block transition-all duration-500 ease-in-out">Ayodya&apos;s CV</div>
          </button>
        </div>
      </Box>
      <CardContainer className="h-80 w-full flex flex-col relative justify-center items-center">
        <Box className="h-80 w-full flex flex-col relative justify-center items-center">
          <CardItem
            translateZ={20}
            className="flex justify-center w-full"
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link className="border w-fit p-3 rounded-full flex items-center gap-2 text-black dark:text-gray-400 bg-white dark:bg-[#2E3947] hover:bg-gray-200 dark:hover:border-gray-400 dark:border transition-all duration-100" href={"mailto:ayodyabanukafernando@gmail.com"}>
                ayodyabanukafernando@gmail.com
              </Link>
            </motion.div>
          </CardItem>

          <div className="absolute hidden bottom-0 left-50 p-10">Thank You!</div>
        </Box>
      </CardContainer>
      <Box className=" grid grid-cols-3 md:flex gap-5 justify-center items-center col-span-1 h-80 md:col-span-2 w-full">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Image className="text-gray-300 hover:scale-125 transition-all duration-300 ease-in-out " src={"/icons/nextjs.svg"} width={40} height={40} alt={""} />
            </TooltipTrigger>
            <TooltipContent>
              <div>NextJs</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Image className="text-gray-300 hover:scale-125 transition-all duration-300 ease-in-out" src={"/icons/nest.svg"} width={40} height={40} alt={""} />
            </TooltipTrigger>
            <TooltipContent>
              <div>NestJs</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Image className="text-gray-300 hover:scale-125 transition-all duration-300 ease-in-out" src={"/icons/framer.svg"} width={40} height={40} alt={""} />
            </TooltipTrigger>
            <TooltipContent>
              <div>Framer Motion</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Image className="text-gray-300 hover:scale-125 transition-all duration-300 ease-in-out" src={"/icons/react.svg"} width={40} height={40} alt={""} />
            </TooltipTrigger>
            <TooltipContent>
              <div>React</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Image className="text-gray-300 hover:scale-125 transition-all duration-300 ease-in-out" src={"/icons/node.svg"} width={40} height={40} alt={""} />
            </TooltipTrigger>
            <TooltipContent>
              <div>NodeJs</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Image className="text-gray-300 hover:scale-125 transition-all duration-300 ease-in-out" src={"/icons/flutter.svg"} width={40} height={40} alt={""} />
            </TooltipTrigger>
            <TooltipContent>
              <div>Flutter</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Image className="text-gray-300 hover:scale-125 transition-all duration-300 ease-in-out" src={"/icons/apple.svg"} width={40} height={40} alt={""} />
            </TooltipTrigger>
            <TooltipContent>
              <div>IOS(Swift)</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Image className="text-gray-300 hover:scale-125 transition-all duration-300 ease-in-out" src={"/icons/android.svg"} width={40} height={40} alt={""} />
            </TooltipTrigger>
            <TooltipContent>
              <div>Android(Java)</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="flex justify-center">
              <Image className="text-gray-300 hover:scale-125 transition-all duration-300 ease-in-out" src={"/icons/figma.svg"} width={40} height={40} alt={""} />
            </TooltipTrigger>
            <TooltipContent>
              <div>Figma</div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Box>

    </div >
  )
}

export default Home


// #475671