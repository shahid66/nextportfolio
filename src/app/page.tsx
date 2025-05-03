import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function Home() {
  return (
    <section>
      <div className="h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between lg:px-16 xl:px-32">
          <div className="text-center xl:text-left order-2 xl:order-none p-4">
            <span className="text-white/60 leading-10">
              Frontend Web Developer
            </span>
            <h1 className="text-[#FAF6E9] text-4xl leading-12">
              Hello I&#39;m <br />
              <span className="text-primary">
                {" "}
                Khandoker Shahidujjaman shahid
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white leading-8">
              Specialized in building dynamic, responsive, and high-performance
              web applications using modern technologies like React.js and
              Next.js, with strong problem-solving skills and a deep interest in
              creating engaging and interactive user interfaces. I enjoy
              transforming ideas into real-world digital products that are
              clean, scalable, and user-friendly
            </p>
            <div className="flex flex-col xl:flex-row items-center  gap-4">
              <Button
                variant={"outline"}
                size="lg"
                className="uppercase items-center gap-2 bg-primary"
              >
                <span>Download</span>
                <FileDown className="ml-2" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
