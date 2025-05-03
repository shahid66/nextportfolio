import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type SocialIconsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }: SocialIconsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
