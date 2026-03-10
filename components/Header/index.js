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
  const { name, showBlog, showResume, resume } = data;

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
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1 onClick={() => router.push("/")} className="font-medium p-2 laptop:p-0 link">
                {name}.
              </h1>
              <div className="flex items-center">
                {data.darkMode && mounted && (
                  <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} />
                  </Button>
                )}
                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open ? (theme === "dark" ? "menu-white.svg" : "menu.svg") : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`}>
              <div className="grid grid-cols-1">
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleAboutScroll}>About</Button>
                {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
                {showResume && <Button onClick={resumeClick}>Resume</Button>}
                <Button onClick={() => window.open("mailto:gayapersadmia@gmail.com")}>Contact</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Desktop Header */}
      <div className={`mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"} dark:text-white top-0 z-10 tablet:flex`}>
        <h1 onClick={() => router.push("/")} className="font-medium cursor-pointer mob:p-2 laptop:p-0">{name}.</h1>
        <div className="flex">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
          {showResume && <Button onClick={resumeClick}>Resume</Button>}
          <Button onClick={() => window.open("mailto:gayapersadmia@gmail.com")}>Contact</Button>
          {mounted && theme && data.darkMode && (
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:gayapersadmia@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Desktop / Tablet Header */}
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => window.open(resume.resumeUrl, "_blank")}
              >
                Resume
              </Button>
            )}
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
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => window.open(resume.resumeUrl, "_blank")}
              >
                Resume
              </Button>
            )}
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
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
