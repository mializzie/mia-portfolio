import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Opens the resume PDF in a new tab
  const resumeClick = () => {
    window.open("/Mia_Gayapersad_resume.pdf", "_blank");
  };

  return (
    <>
      {/* Mobile Header */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex flex-col items-center">
              {/* Profile Picture */}
              <img
                src="/images/MIA.jpg"
                alt="Mia Gayapersad"
                className="w-20 h-20 rounded-full mb-2"
              />
              {/* Name */}
              <h1
                onClick={() => router.push("/")}
                className="font-medium text-xl mb-2 cursor-pointer"
              >
                {name}.
              </h1>
              {/* Nav & Theme Buttons */}
              <div className="flex items-center space-x-2">
                {data.darkMode && mounted && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                      alt="theme toggle"
                    />
                  </Button>
                )}
                <Popover.Button>
                  <img
                    className="h-5"
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
                  />
                </Popover.Button>
              </div>

              {/* Mobile Menu */}
              <Popover.Panel
                className={`absolute right-0 z-10 w-11/12 p-4 ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                } shadow-md rounded-md mt-2`}
              >
                <div className="grid grid-cols-1 gap-2">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && <Button onClick={resumeClick}>Resume</Button>}
                  <Button
                    onClick={() =>
                      window.open("mailto:gayapersadmia@gmail.com")
                    }
                  >
                    Contact
                  </Button>
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
        {/* Profile Picture */}
        <img
          src="/images/MIA.jpg"
          alt="Mia Gayapersad"
          className="w-24 h-24 rounded-full mb-2"
        />
        {/* Name */}
        <h1
          onClick={() => router.push("/")}
          className="font-medium text-2xl mb-4 cursor-pointer"
        >
          {name}.
        </h1>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
          {showResume && <Button onClick={resumeClick}>Resume</Button>}
          <Button
            onClick={() => window.open("mailto:gayapersadmia@gmail.com")}
          >
            Contact
          </Button>
          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                alt="theme toggle"
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
