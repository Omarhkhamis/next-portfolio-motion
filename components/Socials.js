import Link from "next/link";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiGithubLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href={"/"}
        className="transition-all duration-300 hover:text-accent"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"/"}
        className="transition-all duration-300 hover:text-accent"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"/"}
        className="transition-all duration-300 hover:text-accent"
      >
        <RiFacebookBoxFill />
      </Link>
      <Link
        href={"/"}
        className="transition-all duration-300 hover:text-accent"
      >
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
