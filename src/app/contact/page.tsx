"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarked, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 234 567 890",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kk.shahid66@gmail.com",
  },
  {
    icon: <FaMapMarked />,
    title: "Address",
    description: "76/A, Elenga Hallpar, kalihati,Tangail",
  },
];

const page = () => {
  return (
    <section className="md:mt-10">
      <div className="py-4 px-4 lg:px-16 xl:px-32">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-primary">Let&#39;s work together</h3>
              <p className="text-white">
                I’m always open to new opportunities, collaborations, and
                creative challenges. Whether you&#39;re looking for a dedicated
                developer, a problem-solver, or a curious mind ready to learn
                and grow — I’d love to connect. I believe in teamwork, clear
                communication, and building solutions that make a real impact.
                If you have a project, idea, or role in mind{" "}
                <span className="text-primary">— let’s work together</span> and
                make it happen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="name" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
                <Textarea placeholder="Message" />
              </div>
              <Button>Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 mb-6 ">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-primary rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
