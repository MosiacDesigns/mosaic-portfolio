"use client";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const socials = [
  // { icon: <FaGithub />, path: "" },
  { icon: <FaXTwitter />, path: "https://x.com/MosaicDesigns06" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/mosaicdesigns06/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
