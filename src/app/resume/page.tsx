"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "With a Bachelor's degree in Computer Science and Engineering, I have hands-on experience in frontend frameworks, backend services, and state management systems. I love to build full-stack applications that are not only functional but also elegant and accessible. My goal is to create user-friendly applications that solve real-world problems and enhance user experiences.",
};

const education = {
  icon: "/images/education.png",
  title: "Education",
  description:
    "I chose to pursue education in Computer Science & Engineering because of a deep curiosity about how technology works and a strong desire to solve real-world problems through innovation. Learning in this field empowers me to build systems, create applications, and understand the logic that drives the digital world.",
  items: [
    {
      institution: "Dhaka International University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2016 - 2020",
      description:
        "The BSc in Computer Science & Engineering program provided a strong foundation in both theoretical and practical aspects of computing. The curriculum focused on core areas such as programming, data structures and algorithms, computer networks, database systems, software engineering, operating systems, and computer architecture",
    },
    {
      institution: "Tangail Polytechnic Institute",
      degree: "Computer Technology",
      duration: "2011 - 2015",
      description:
        "The Diploma in Computer Technology program provided comprehensive technical education focused on computer hardware, software, and networking. The curriculum combined theoretical knowledge with practical skills to prepare students for careers in IT and engineering sectors",
    },
    {
      institution: "Dhaka International University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2016 - 2020",
      description:
        "The BSc in Computer Science & Engineering program provided a strong foundation in both theoretical and practical aspects of computing. The curriculum focused on core areas such as programming, data structures and algorithms, computer networks, database systems, software engineering, operating systems, and computer architecture",
    },
    {
      institution: "Tangail Polytechnic Institute",
      degree: "Computer Technology",
      duration: "2011 - 2015",
      description:
        "The Diploma in Computer Technology program provided comprehensive technical education focused on computer hardware, software, and networking. The curriculum combined theoretical knowledge with practical skills to prepare students for careers in IT and engineering sectors",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "In the fast-paced world of technology, tools, languages, and industry demands are constantly evolving. I believe upgrading skills is essential to stay relevant, competitive, and effective in solving modern problems. For me, learning doesn't stop with a degree — it’s a continuous journey to stay current with new frameworks, programming languages, development practices, and industry trends",
  skilllist: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "tailwind.css",
      icon: <SiTailwindcss />,
    },
    {
      name: "node.js",
      icon: <FaNodeJs />,
    },
  ],
};


const page = () => {
  return (
    <section className="md:mt-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-4 px-4 lg:px-16 xl:px-32"
      >
        <div>
          <Tabs
            defaultValue="education"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about me">About me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="education">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col gap-1 justify-center items-center lg:items-start border-b border-white/10 pb-4"
                        >
                          <h4 className="text-2xl font-bold">
                            {item.institution}
                          </h4>
                          <p className="text-white/60">{item.degree}</p>
                          <p className="text-white/60">{item.duration}</p>
                          <p className="text-white/60">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                    {skills.skilllist.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-primary transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="about me">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
};

export default page;
