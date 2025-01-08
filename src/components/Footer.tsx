import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Container className="p-6 bg-black text-gray-100">
      {/* Flexbox container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Logo title="Bloggers" className="text-white" />

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6">
          <Link href={"https://www.youtube.com"} target="_blank">
            <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
          </Link>
          <Link href={"https://github.com/adeelmaheen"} target="_blank">
            <BsGithub className="text-2xl hover:text-gray-500 duration-200 cursor-pointer" />
          </Link>
          <Link href={"https://www.facebook.com"} target="_blank">
            <BsFacebook className="text-2xl hover:text-blue-300 duration-200 cursor-pointer" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/maheen-arif-a929412b6/"}
            target="_blank"
          >
            <BsLinkedin className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-300 text-center md:text-left">
          © All rights reserved&nbsp;&apos;Bloggers&apos;
        </p>
      </div>
    </Container>
  );
};

export default Footer;
