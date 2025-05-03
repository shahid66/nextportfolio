import Link from "next/link";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className=" text-white">
      <div className="flex justify-between items-center py-4 px-4 lg:px-16 xl:px-32 ">
        <Link href="/">
          <h1 className="text-primary md:text-3xl font-medium">
            KK<span className="text-white">.</span>SHAHID
          </h1>
        </Link>
        {/* desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          {/* <Link href="/contact">
            <Button>Hire me</Button>
          </Link> */}
        </div>

        {/* mobile */}

        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
