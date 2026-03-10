import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Image from "next/image";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { name, showBlog, showResume, resume, darkMode } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const resumeClick = () => {
    window.open(resume.resumeUrl, "_blank");
  };

  return (
    <>
      {/* Mobile Header */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex flex-col items-center">
              {/* Profile Picture */}
              <div className="relative w-20 h-20 mb-2">
                <Image
                  src="/images/MIA.jpg"
                  alt="Mia Gayapersad"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              {/* Name */}
              <h1
                onClick={() => router.push("/")}
                className="font-medium text-xl mb-2 cursor-pointer"
              >
                {name}.
              </h1>

              {/* Nav Buttons */}
              <div className="flex items-center space-x-2">
                {darkMode && mounted && (
                  <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <Image
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                      alt="theme toggle"
                      width={24}
                      height={24}
                    />
                  </Button>
                )}
                <Popover.Button>
                  <Image
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="menu toggle"
                    width={20}
                    height={20}
                  />
                </Popover.Button>
              </div>

              <Popover.Panel
                className={`absolute right-0 z-10 w-11/12 p-4 ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                } shadow-md rounded-md mt-2`}
              >
                <div className="grid grid-cols-1 gap-2">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
                  {showResume && <Button onClick={resumeClick}>Resume</Button>}
                  <Button onClick={() => window.open("mailto:gayapersadmia@gmail.com")}>Contact</Button>
                </div>
              </Popover.Panel>
            </div>
          </>
        )}
      </Popover>

      {/* Desktop Header */}
      <div
        className={`hidden tablet:flex flex-col items-center mt-10 sticky top-0 z-10 ${
          theme === "light" ? "bg-white" : ""
        } dark:text-white`}
      >
        <div className="relative w-24 h-24 mb-2">
          <Image
            src="/images/MIA.jpg"
            alt="Mia Gayapersad"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <h1
          onClick={() => router.push("/")}
          className="font-medium text-2xl mb-4 cursor-pointer"
        >
          {name}.
        </h1>

        <div className="flex items-center space-x-4">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
          {showResume && <Button onClick={resumeClick}>Resume</Button>}
          <Button onClick={() => window.open("mailto:gayapersadmia@gmail.com")}>Contact</Button>
          {mounted && darkMode && (
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Image
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                alt="theme toggle"
                width={24}
                height={24}
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
