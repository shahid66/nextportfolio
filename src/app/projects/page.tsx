"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtn from "@/components/WorkSliderBtn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "Basha Finder",
    description:
      "Basha Finder is a complete real estate web application that connects property owners and renters on a single platform. The system allows users to easily find, rent,  apartments, while owners can list their properties for  rent. The platform includes  payments and user-specific dashboards for a smooth and personalized experience.",

    stack: [
      { name: "Html5" },
      { name: "Tailwindcss" },
      { name: "Typescript" },
      { name: "Nextjs" },
      { name: "ExpressJs" },
      { name: "MongoDB" },
      { name: "JWT" },
      { name: "SurjoPay" },
    ],
    image: "/assets/bas.png",
    live: "https://basfinder-frontend.vercel.app",
    githubFrontend: "https://github.com/shahid66/bashaFinder-frontend",
    githubBackend: "https://github.com/shahid66/basaFinder-backend",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Bike Buy",
    description:
      "Bike Buy is a user-friendly web application designed to simplify the process of purchasing bikes online. The platform allows users to browse and buy bikes listed by the admin, with features like  payments, advanced search and filtering, and role-based dashboards for efficient management and interaction. The system is built with a focus on user experience , ensuring a seamless and enjoyable shopping experience. Landlord email:landloar@gmail.com, password: 1111,",
    stack: [
      { name: "Html5" },
      { name: "Tailwindcss" },
      { name: "Typescript" },
      { name: "ReactJs" },
      { name: "ReduxToolkit" },
      { name: "ExpressJs" },
      { name: "MongoDB" },
      { name: "JWT" },
      { name: "SurjoPay" },
    ],
    image: "/assets/pro-2.png",
    live: "https://bike-frontend-sigma.vercel.app/",
    githubFrontend: "https://github.com/shahid66/bike-frontend",
    githubBackend: "https://github.com/shahid66/bike-api-v2",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Restaurants",
    description:
      "The Online Restaurant web application is a modern food ordering platform where users can browse menus, place orders, manage a cart, and save their favorite meals for future visits. Designed for speed and ease of use, the platform provides a smooth online food experience with a clean interface and efficient ordering system.",
    stack: [
      { name: "Html5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Reactjs" },
      { name: "Reduxtoolkit" },
    ],
    image: "/assets/pro-3.png",
    live: "http://restaurants.khandokershahid.com/",
    githubFrontend: "https://github.com/shahid66/assignment3",
    githubBackend: null,
  },
  {
    num: "04",
    category: "Frontend",
    title: "Forever",
    description:
      "Forever is a  e-commerce website designed for seamless online shopping. It offers a smooth and secure experience for both customers and administrators, with essential features like product browsing, shopping cart, wishlist, order tracking, This is a responsive and user-friendly platform, ensuring a delightful shopping experience across all devices.",
    stack: [
      { name: "Html5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Reactjs" },
      { name: "Reduxtoolkit" },
    ],
    image: "/assets/pro-4.png",
    live: "https://foeverfrontend.vercel.app",
    githubFrontend: "https://github.com/shahid66/foeverfrontend",
    githubBackend: null,
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  console.log(project);

  const handleSlideChange = (swiper: SwiperClass) => {
    const activeIndex = swiper.activeIndex;
    setProject(projects[activeIndex]);
  };
  return (
    <div className="flex flex-col xl:flex-row xl:gap-[30px] py-4 px-4 lg:px-16 xl:px-32">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-[50%]">
          <div className="text-8xl leading-none font-extrabold  text-outline">
            {project.num}
          </div>
          <h4 className="text-2xl font-bold leading-one text-white/60 group-hover:text-primary transition-all duration-500 capitalize">
            {project.category} project
          </h4>
          <h2 className="text-[42px] font-bold leading-one text-white group-hover:text-primary transition-all duration-500 capitalize">
            {project.title}
          </h2>

          <p className="text-white/60">{project.description}</p>

          <ul className="flex gap-4 w-full flex-wrap">
            {project.stack.map((item, index) => (
              <li key={index} className="text-white/60  font-medium">
                {item.name}
                {index !== project.stack.length - 1 && ","}
              </li>
            ))}
          </ul>

          <div className="border border-white/20"></div>

          <div className="flex items-center gap-4">
            <Link href={project.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className=" text-white text-3xl group-hover:text-primary" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link href={project.githubFrontend}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className=" text-white text-3xl group-hover:text-primary" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Frontend github repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            {project.githubBackend !== null && (
              <Link href={project.githubBackend}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className=" text-white text-3xl group-hover:text-primary" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Backend github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[50%] ">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          className="xl:h-[460px] mb-12" // give height here
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="h-[460px] flex justify-center items-center bg-pink-50/20">
                <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    fill
                    className="object-cover p-4"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <WorkSliderBtn
            containerStyles="
           absolute z-20 
           flex 
           w-full justify-between items-center inset-y-0 left-0 right-0 gap-2
           md:w-max md:justify-end md:bottom-0 md:right-0 md:left-auto md:inset-y-auto
         "
            btnStyles="bg-primary hover:bg-primary-hover text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          />
        </Swiper>
      </div>
    </div>
  );
};

export default Work;
