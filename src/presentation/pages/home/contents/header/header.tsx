import clsx from "clsx";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../../../../../@components/ui/button";

const Header = () => {
  const IsDark = getTheme() === "light" ? true : false;

  function getTheme() {
    return localStorage.getItem("theme");
  }

  //state
  const [mode, setMode] = useState(!IsDark);
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  //function
  const handleCLickDark = (): void => {
    document.body.classList.toggle("dark");

    if (localStorage.getItem("theme") === "light") {
      storage("dark");
    } else {
      storage("light");
    }
    setMode(true);
  };

  function storage(theme: string) {
    localStorage.setItem("theme", theme);
  }

  const handleScroll = (): void => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleResize = (): void => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  //effect
  useEffect(() => {
    if (!IsDark) {
      document.body.classList.add("dark");
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [IsDark]);

  return (
    <div
      className={clsx(
        {
          "z-50 py-4 bg-slate-100 shadow-sm dark:bg-zinc-900": scroll,
        },
        {
          "z-50 py-4": !scroll,
        },
        "fixed top-0 w-full transition-colors duration-200"
      )}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-bold text-3xl md:text-5xl font-bold">Cyclops</h1>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={clsx(
            "md:flex md:items-center md:gap-6",
            {
              hidden: !menuOpen,
            },
            {
              "flex flex-col items-center w-full mt-4 md:mt-0 md:w-auto": menuOpen,
            }
          )}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 cursor-pointer text-lg md:text-base ">
            <li>Home</li>
            <li>Pricing</li>
            <li>Platforms</li>
            <li>Contact</li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center mt-4 md:mt-0">
            <div
              onClick={handleCLickDark}
              className="bg-zinc-200 rounded-full p-2 cursor-pointer dark:bg-zinc-950"
            >
              {!mode ? <CiDark /> : <CiLight />}
            </div>
            <div className="flex gap-3">
              <Button variant="default">Login</Button>
              <Button variant="contained">Try demo</Button>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-black flex flex-col justify-start items-start p-8 z-40">
          <div className="flex justify-between items-center w-full mb-8">
            <h1 className="text-bold text-3xl md:text-5xl font-bold -mt-5 -ml-4">Cyclops</h1>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl focus:outline-none -mt-5 -mr-3"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col gap-6 cursor-pointer text-2xl text-left w-full">
            <li>Home</li>
            <li>Pricing</li>
            <li>Platforms</li>
            <li>Contact</li>
          </ul>
          <div className="flex flex-col gap-4 justify-start items-start mt-8 w-full">
            <Button variant="default">Login</Button>
            <Button variant="contained">Try demo</Button>
            <div
              onClick={handleCLickDark}
              className="bg-zinc-200 rounded-full p-2 cursor-pointer dark:bg-zinc-950 mt-4"
            >
              {!mode ? <CiDark /> : <CiLight />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
